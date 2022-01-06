import { AnimationBubbles } from "../../components/Animation";
import { PageNotFoundStyle } from "./styles";

export const PageNotFound: React.FC = () => {
  return (
    <PageNotFoundStyle>
      <AnimationBubbles />
      <div className="notfound g-position-center">
        <div className="notfound-404">
          <h1 className="font6vw-bold">Puslapis nerastas 404</h1>
        </div>
      </div>
    </PageNotFoundStyle>
  );
};
