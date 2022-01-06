import { AnimationBubblesStyle } from "./styles";

export const AnimationBubbles: React.FC = () => {
  const bubbles = ["", "", "", "", "", "", "", "", ""];
  return (
    <AnimationBubblesStyle>
      {bubbles.map((bubble, index) => (
        <div className="bubble" key={index}></div>
      ))}
    </AnimationBubblesStyle>
  );
};
