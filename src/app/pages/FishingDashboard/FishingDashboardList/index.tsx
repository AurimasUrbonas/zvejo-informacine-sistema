import { IFishingDashboard } from "../../../api/FishingDashboards/types/fishingDashboard";
import { FishingDashboardListStyle } from "./styles";
interface IProps {
  fishingDashboardList: IFishingDashboard[];
}
export const FishingDashboardList = (props: IProps) => {
  return (
    <FishingDashboardListStyle>
      {props.fishingDashboardList.map(
        (item: IFishingDashboard, index: number) => (
          <div key={index} className="fishingDashboardList-grid">
            <img
              className="g-left-center"
              width={40}
              height={40}
              src={item.url}
              alt=""
            />
            <div className="g-left-center">
              <div className="fishingDashboardList-grid-block">
                <div className="font12-normal">Kada</div>
                <div className="font16-normal">{item.kada}</div>
              </div>
            </div>
            <div className="g-left-center">
              <div className="fishingDashboardList-grid-block">
                <div className="font12-normal">Kur</div>
                <div className="font16-normal"> {item.kur}</div>
              </div>
            </div>
            <div className="g-left-center">
              <div className="fishingDashboardList-grid-block">
                <div className="font12-normal">Kokia</div>
                <div className="font16-normal"> {item.kokia}</div>
              </div>
            </div>
          </div>
        )
      )}
    </FishingDashboardListStyle>
  );
};
