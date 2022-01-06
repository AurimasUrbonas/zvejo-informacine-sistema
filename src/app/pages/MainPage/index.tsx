import { MainPageWrapper } from "./styles";

export default function MainPage() {
  return (
    <MainPageWrapper>
      <div className="main-image g-center">
        <div className="main-center">
          <div className="font6vw-bold title-color animation-text">
            Sveiki atvykę!
          </div>
          <div className="description-color main-center font1vw-bold animation-text">
            Čia galite rasti informaciją ir rekomendacijas apie žvejybą ir
            žuvis!
          </div>
        </div>
      </div>
    </MainPageWrapper>
  );
}
