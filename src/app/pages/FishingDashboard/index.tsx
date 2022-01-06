/* eslint-disable no-restricted-globals */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "../../../config/firebase";
import { useAuth } from "../../../contexts/AuthContext";
import FishingDashboards from "../../api/FishingDashboards/FishingDashboards";
import { IFishingDashboard } from "../../api/FishingDashboards/types/fishingDashboard";
import UseStorage from "../../api/UseStorage/UseStorage";
import { FishingDashboardList } from "./FishingDashboardList";
import { FishingDashboardStyle } from "./styles";

export const FishingDashboard = () => {
  const { uploadImage } = UseStorage();
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const types = ["image/png", "image/jpeg", "image/jpg"];
  const { user } = useAuth();
  const { handleFishingDashboard } = FishingDashboards();
  const [fishingDashboardList, setFishingDashboardList] = useState<
    IFishingDashboard[]
  >([]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { kada, kur, kokia } = event.target as typeof event.target & {
      kada: { value: string };
      kur: { value: string };
      kokia: { value: string };
    };
    if (
      kada.value !== "" &&
      kur.value !== "" &&
      kokia.value !== "" &&
      user !== null
    ) {
      await handleFishingDashboard(kada.value, kur.value, kokia.value, user);
      getList();
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    const selected = e.target.files[0];
    console.log(selected);
    if (selected && types.includes(selected.type)) {
      console.log("selected");
      setFileUrl(selected);
      if (selected) uploadImage(selected);
    } else {
      console.log("null");
      setFileUrl(null);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    let dienorastisData = [] as IFishingDashboard[];
    const dienorastis = await getDocs(
      collection(auth.getFirestore(), "dienorastis")
    );
    dienorastis.forEach((doc: any) => {
      dienorastisData.push(doc.data());
    });
    setFishingDashboardList(dienorastisData);
  };

  return (
    <FishingDashboardStyle>
      <form className="upload-data" onSubmit={() => handleSubmit(event as any)}>
        <input className="g-input" type="file" onChange={handleChange} />
        <input className="g-input" name="kada" type="date" placeholder="Kada" />
        <input className="g-input" name="kur" type="text" placeholder="Kur" />
        <input
          className="g-input"
          name="kokia"
          type="text"
          placeholder="Kokia"
        />
        <button className="g-button g-center" disabled={fileUrl === ""}>
          Pridėti
        </button>
      </form>
      <FishingDashboardList fishingDashboardList={fishingDashboardList} />
    </FishingDashboardStyle>
  );
};
