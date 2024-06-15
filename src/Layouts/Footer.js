import { styled } from "styled-components";
import FooterButtons from "../Components/FooterButtons";
import MiniMap from "../Features/MiniMap";
import { useContext } from "react";
import { MainContext } from "./Index";
import ImagesSelector from "../Features/ImagesSelector";

const StyledFooterBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.3);
  height: 120px;
  position: relative;
`;

const FooterBar = () => {
  useContext;
  const { state, dispatch } = useContext(MainContext);
  const handleButtonsClick = (type) => {
    switch (type) {
      case "left":
        dispatch({
          type: "PREVIOUS_IMAGE",
          payload: state.currentState.currentIndex - 1,
        });
        break;
      case "right":
        dispatch({
          type: "NEXT_IMAGE",
          payload: state.currentState.currentIndex + 1,
        });

        break;

      case "more":
        dispatch({
          type: "TOGGLE_IMAGE_SELECTOR",
        });

        break;
      default:
        break;
    }
  };
 
  return (
    <StyledFooterBar className="padding-m">
      <FooterButtons
        text={"left"}
        handleClick={() => handleButtonsClick("left")}
      />
      <MiniMap />
      <FooterButtons
        text={"more"}
        handleClick={() => handleButtonsClick("more")}
        children={state.imageSelectorState ? <ImagesSelector /> : null}
        customStyles={`position: relative`}
      />
      <FooterButtons
        text={"right"}
        handleClick={() => handleButtonsClick("right")}
      />
    </StyledFooterBar>
  );
};

export default FooterBar;
