import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  GoogleMap,
  DrawingManager,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import ZemelapioZymeklioInfo from "../../components/ZemelapioZymeklioInfo";
import { ZymeklioInfoContext } from "../../../utils/store/zymeklio-info-context";
import {
  collection,
  DocumentData,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";
import { auth } from "../../../config/firebase";
import { IZymeklis } from "../../../utils/types/IZymeklis";
import { useAuth } from "../../../contexts/AuthContext";

const mapsAPIKey = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 55.16,
  lng: 23.88,
};

declare type Libraries = (
  | "drawing"
  | "geometry"
  | "localContext"
  | "places"
  | "visualization"
)[];

const libraries: Libraries = ["drawing"];

function ZemelapisPage() {
  const [mapDrawingMode, setMapDrawingMode] =
    useState<null | google.maps.drawing.OverlayType.MARKER>(null);

  const [zymeklis, setZymeklis] = useState<IZymeklis>();

  const { user } = useAuth();

  const {
    zymekliuArray,
    zymeklioInfo,
    showZymeklioInfo,
    hideZymeklioInfo,
    addZymeklis,
    setZymeklius,
  } = useContext(ZymeklioInfoContext);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapsAPIKey as string,
    libraries,
  });

  useEffect(() => {
    let zymekliai: any[] = [];

    const visiZymekliai = (): Promise<QuerySnapshot<DocumentData>> => {
      const q = collection(auth.getFirestore(), "zemelapioZymekliai");
      return getDocs(q);
    };

    visiZymekliai().then((response) => {
      response.forEach((res) => {
        zymekliai.push(res.data());
      });
      setZymeklius(zymekliai);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleMarkerClick = (marker: google.maps.Marker) => {
    const id = `${marker.getPosition()?.lat()}*${marker.getPosition()?.lng()}`;

    const filteredZymeklis = zymekliuArray.filter(
      (zymeklis) => zymeklis.id === id
    );
    if (filteredZymeklis) setZymeklis(filteredZymeklis[0]);

    showZymeklioInfo();
  };

  const handleCustomMarkerClick = (e: google.maps.MapMouseEvent) => {
    const id = `${e.latLng?.lat()}*${e.latLng?.lng()}`;

    const filteredZymeklis = zymekliuArray.filter(
      (zymeklis) => zymeklis.id === id
    );
    if (filteredZymeklis) setZymeklis(filteredZymeklis[0]);

    if (zymeklioInfo) hideZymeklioInfo();
    else showZymeklioInfo();
  };

  const onMarkerComplete = (marker: google.maps.Marker) => {
    marker.addListener("click", () => handleMarkerClick(marker));

    const lat = marker.getPosition()?.lat();
    const lng = marker.getPosition()?.lng();

    const id = `${lat}*${lng}`;

    let completeZymeklis: IZymeklis;

    if (lat && lng) {
      completeZymeklis = {
        id: id,
        pavadinimas: "",
        informacija: "",
        position: {
          lat: lat,
          lng: lng,
        },
      };

      addZymeklis(completeZymeklis);
      setZymeklis(completeZymeklis);
    }

    setMapDrawingMode(null);

    showZymeklioInfo();
  };

  if (loadError) return <div>Map could not be loaded.</div>;

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          id="map"
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          onLoad={onMapLoad}
          mapTypeId={google.maps.MapTypeId.HYBRID}
        >
          {user && (
            <DrawingManager
              options={{
                map: mapRef.current,
                drawingMode: mapDrawingMode,
                markerOptions: {
                  icon: "http://maps.google.com/mapfiles/ms/micons/fishing.png",
                  map: mapRef.current,
                },
                drawingControlOptions: {
                  drawingModes: [google.maps.drawing.OverlayType.MARKER],
                },
              }}
              onMarkerComplete={(marker: google.maps.Marker) =>
                onMarkerComplete(marker)
              }
            />
          )}
          {zymekliuArray.map((zymeklis) => (
            <Marker
              key={zymeklis.id}
              position={zymeklis.position}
              icon="http://maps.google.com/mapfiles/ms/micons/fishing.png"
              onClick={(e) => handleCustomMarkerClick(e)}
            />
          ))}
        </GoogleMap>
      ) : (
        <div>Map loading...</div>
      )}
      {zymeklioInfo && zymeklis && (
        <ZemelapioZymeklioInfo zymeklis={zymeklis} />
      )}
    </>
  );
}

export default memo(ZemelapisPage);
