import {
  ColumnDirective,
  ColumnsDirective,
  CommandClickEventArgs,
  CommandColumn,
  Filter,
  Grid,
  GridComponent,
  Inject,
  Page,
  Reorder,
  Resize,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { useContext, useEffect, useState } from "react";
import { L10n } from "@syncfusion/ej2-base";
import { ApieZuvisWrapper } from "./styles";
import { ref, onValue } from "firebase/database";
import Modal from "../../components/Modal/Modal";
import ZuvuDetales from "../../components/ZuvuDetales/ZuvuDetales";
import { db } from "../../../config/firebase";
import { IZuvuData } from "../../../utils/types/IZuvuData";
import { ModalContext } from "../../../utils/store/modal-context";

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

export default function ZuvuSarasasPage() {
  const [grid, setGrid] = useState<Grid | null>(null);
  const [zuvuData, setZuvuData] = useState<IZuvuData[]>();
  const [zuviesData, setZuviesData] = useState<IZuvuData>();

  const { modal, showModal } = useContext(ModalContext);

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setZuvuData(data[0]);
    });
  }, []);

  const created = () => {
    document
      .getElementById(grid?.element.id + "_searchbar")
      ?.addEventListener("keyup", (event: KeyboardEvent) => {
        grid?.search((event.target as HTMLInputElement).value);
      });
  };

  const dataBound = () => {
    grid?.hideScroll();
  };

  const commandFunction = (args?: CommandClickEventArgs) => {
    if (args && args.commandColumn && args.rowData) {
      const rowData: IZuvuData = args.rowData as IZuvuData;

      const zuvis = zuvuData?.filter((zuvis) => zuvis.id === rowData.id);
      if (zuvis) setZuviesData(zuvis[0]);

      showModal();
    }
  };

  return (
    <ApieZuvisWrapper>
      <div className="apie-zuvis-label">
        Čia galite ieškoti įvairias žuvis arba atpažinti savo pagautą žuvį ir
        sužinoti daugiau informacijos apie ją!
      </div>
      {zuvuData && (
        <GridComponent
          ref={(g) => setGrid(g)}
          created={created}
          commandClick={commandFunction}
          dataBound={dataBound}
          locale="lt-LT"
          width="100%"
          height={647}
          dataSource={zuvuData}
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
            columns: [{ field: "Pavadinimas", direction: "Ascending" }],
          }}
          pageSettings={{ pageSize: 10, pageSizes: true }}
        >
          <ColumnsDirective>
            <ColumnDirective
              field="Pavadinimas"
              headerText="Pavadinimas"
              width="80"
            />
            <ColumnDirective field="Kunas" headerText="Kūnas" width="80" />
            <ColumnDirective
              field="NugarosSpalva"
              headerText="Nugaros spalva"
              width="100"
            />
            <ColumnDirective
              field="SonuSpalva"
              headerText="Šonų spalva"
              width="100"
            />
            <ColumnDirective
              field="PilvoSpalva"
              headerText="Pilvo spalva"
              width="100"
            />
            <ColumnDirective field="Zvynai" headerText="Žvynai" width="100" />
            <ColumnDirective
              width="70"
              commands={[
                {
                  title: "Plačiau",
                  buttonOption: {
                    content: "Plačiau",
                  },
                },
              ]}
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
      )}
      {zuviesData && modal && (
        <Modal>
          <ZuvuDetales zuviesData={zuviesData} />
        </Modal>
      )}
    </ApieZuvisWrapper>
  );
}
