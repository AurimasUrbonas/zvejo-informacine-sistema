import { useEffect, useState } from "react";
import { Orai } from "../../api/Orai/Orai";
import { ZvejoKalendoriusWrapper } from "./styles";
import { ref, onValue } from "firebase/database";
import { db } from "../../../config/firebase";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Page,
  Sort,
  Filter,
  Reorder,
  Resize,
  Toolbar,
  CommandColumn,
  Grid,
} from "@syncfusion/ej2-react-grids";
import { L10n } from "@syncfusion/ej2-base";

L10n.load({
  "lt-LT": {
    grid: {
      EmptyRecord: "Nėra įrašų",
      Search: "Paieška",
      FilterButton: "Filtruoti",
      ClearButton: "Išvalyti filtrus",
      SelectAll: "Pasirinkti visus",
    },
    pager: {
      currentPageInfo: "{0} iš {1} puslapių",
      totalItemsInfo: "({0} įrašai(-as))",
      firstPageTooltip: "Grįžti į pirmą puslapį",
      lastPageTooltip: "Eiti į paskutinį puslapį",
      nextPageTooltip: "Eiti į sekantį puslapį",
      previousPageTooltip: "Grįžti į ankstesnį puslapį",
      All: "Visi",
      pagerDropDown: "Įrašų(-ai) per puslapį",
      pagerAllDropDown: "Įrašai",
      totalItemInfo: "({0} Įrašų)",
    },
  },
});

interface IVietove {
  miestas: string;
  regionas: string;
}

interface IPrognoze {
  paveikslelis: string;
  valanda: string;
  temperatura: string;
  oroDregnumas: string;
  vejoGreitis: string;
  slegis: string;
}
interface IOrai {
  vietove: IVietove;
  prognoze: IPrognoze[];
}

interface IZuvuRekomendacijosZuvys {
  Zuvis: string;
  Kibimas: string;
  Zuklavietes: string;
  EfektyviausiGaudymoBudai: string;
  Masalai: string;
}

interface IZuvuRekomendacijos {
  Id: number;
  Menuo: string;
  Zuvys: IZuvuRekomendacijosZuvys[];
}

interface IZvejybosRekomendacijos {
  Id: number;
  Menuo: string;
  Informacija: string;
}

const getOruPrognoze = (response: any, valandos: number[]) => {
  const oruVietove: IVietove = {
    miestas: response.location.name,
    regionas: response.location.region,
  };
  const oruPrognoze: IPrognoze[] = [];

  valandos.forEach((valanda) => {
    oruPrognoze.push({
      paveikslelis:
        response.forecast.forecastday[0].hour[valanda].condition.icon,
      valanda:
        response.forecast.forecastday[0].hour[valanda].time.split(" ")[1],
      temperatura: response.forecast.forecastday[0].hour[valanda].temp_c,
      oroDregnumas: response.forecast.forecastday[0].hour[valanda].humidity,
      vejoGreitis: response.forecast.forecastday[0].hour[valanda].wind_kph,
      slegis: response.forecast.forecastday[0].hour[valanda].pressure_in,
    });
  });

  return { oruVietove, oruPrognoze };
};

const valandos = [7, 13, 17, 21];

const esamasMenuo = new Date().getMonth() + 1;

export default function ZvejoKalendoriusPage() {
  const [orai, setOrai] = useState<IOrai>();
  const [zuvuRekomendacijos, setZuvuRekomendacijos] =
    useState<IZuvuRekomendacijos>();
  const [zvejybosRekomendacijos, setZvejybosRekomendacijos] =
    useState<IZvejybosRekomendacijos>();

  const [grid, setGrid] = useState<Grid | null>(null);

  useEffect(() => {
    Orai().then((response) =>
      setOrai(() => {
        const { oruVietove, oruPrognoze } = getOruPrognoze(response, valandos);
        return { vietove: oruVietove, prognoze: oruPrognoze };
      })
    );

    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setZvejybosRekomendacijos(
        data[1].filter(
          (menuo: IZvejybosRekomendacijos) => menuo.Id === esamasMenuo
        )[0]
      );
      setZuvuRekomendacijos(
        data[2].filter(
          (menuo: IZuvuRekomendacijos) => menuo.Id === esamasMenuo
        )[0]
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataBound = () => {
    grid?.hideScroll();
  };

  const created = () => {
    document
      .getElementById(grid?.element.id + "_searchbar")
      ?.addEventListener("keyup", (event: KeyboardEvent) => {
        grid?.search((event.target as HTMLInputElement).value);
      });
  };

  return (
    <ZvejoKalendoriusWrapper>
      <div className="orai-wrapper">
        {orai ? (
          <>
            <h3 className="orai-vieta">
              {orai.vietove.miestas}, {orai.vietove.regionas}
            </h3>
            <hr />
            <div className="orai-siandien">
              <h3 className="orai-siandien-label">Orai šiandien</h3>
              {orai.prognoze.map((valanda) => (
                <div
                  key={valanda.valanda}
                  className="orai-siandien-info-wrapper"
                >
                  <h4 className="orai-siandien-info-valanda">
                    {valanda.valanda}:
                  </h4>
                  <div className="orai-siandien-info">
                    <div className="orai-siandien-info-prognoze">
                      <div className="orai-siandien-info-prognoze-detales">
                        <span>Temperatūra:</span>
                        <span>{valanda.temperatura} °C</span>
                      </div>
                      <div className="orai-siandien-info-prognoze-detales">
                        <span>Oro drėgnumas:</span>
                        <span>{valanda.oroDregnumas} %</span>
                      </div>
                      <div className="orai-siandien-info-prognoze-detales">
                        <span>Vėjo greitis:</span>
                        <span>{valanda.vejoGreitis} km/h</span>
                      </div>
                      <div className="orai-siandien-info-prognoze-detales">
                        <span>Slėgis:</span>
                        <span>{valanda.slegis} in</span>
                      </div>
                    </div>
                    <img src={valanda.paveikslelis} alt="Oras" />
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>Orai nepasiekiami. 😥</div>
        )}
      </div>
      <div className="rekomendacijos-wrapper">
        <div className="zvejybos-rekomendacijos-wrapper">
          {zvejybosRekomendacijos ? (
            <div key={zvejybosRekomendacijos.Id}>
              <h3 className="rekomendacijos-label">
                Žvejybos rekomendacijos {zvejybosRekomendacijos.Menuo} mėnesiui
              </h3>
              <div>{zvejybosRekomendacijos.Informacija}</div>
            </div>
          ) : (
            <div>Žvejybos rekomendacijos nepasiekiamos. 😥</div>
          )}
        </div>
        <div className="zuvu-rekomendacijos-wrapper">
          {zuvuRekomendacijos ? (
            <>
              <h3 className="rekomendacijos-label">
                Žuvų rekomendacijos {zuvuRekomendacijos.Menuo} mėnesiui
              </h3>
              <GridComponent
                ref={(g) => setGrid(g)}
                created={created}
                dataBound={dataBound}
                locale="lt-LT"
                width="100%"
                height={260}
                dataSource={zuvuRekomendacijos.Zuvys}
                enableStickyHeader={true}
                allowPaging={true}
                allowSorting={true}
                allowFiltering={true}
                allowReordering={true}
                allowResizing={true}
                allowTextWrap={true}
                rowHeight={50}
                toolbar={["Search"]}
                filterSettings={{ type: "CheckBox" }}
                sortSettings={{
                  columns: [{ field: "Zuvis", direction: "Ascending" }],
                }}
                pageSettings={{ pageSize: 10, pageSizes: true }}
              >
                <ColumnsDirective>
                  <ColumnDirective
                    field="Zuvis"
                    headerText="Žuvis"
                    width="40"
                  />
                  <ColumnDirective
                    field="Kibimas"
                    headerText="Kibimas"
                    width="50"
                  />
                  <ColumnDirective
                    field="Zuklavietes"
                    headerText="Žūklavietės"
                    width="100"
                  />
                  <ColumnDirective
                    field="EfektyviausiGaudymoBudai"
                    headerText="Efektyviausi gaudymo būdai"
                    width="100"
                  />
                  <ColumnDirective
                    field="EfektyviausiMasalai"
                    headerText="Efektyviausi masalai"
                    width="100"
                  />
                </ColumnsDirective>
                <Inject
                  services={[
                    Page,
                    Sort,
                    Filter,
                    Reorder,
                    Resize,
                    Toolbar,
                    CommandColumn,
                  ]}
                />
              </GridComponent>
            </>
          ) : (
            <div>Žuvų rekomendacijos nepasiekiamos. 😥</div>
          )}
        </div>
      </div>
    </ZvejoKalendoriusWrapper>
  );
}
