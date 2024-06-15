import { styled } from "styled-components";
import { SlCheck } from "react-icons/sl";
import { useContext } from "react";
import { MainContext } from "../Layouts/Index";

const StyledImageRenderer = styled.div`
  padding: 0px 2px;
  height: 100%;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  cusror: ${(props) => (props.mini ? "pointer" : "pointer")};
`;

const ImageRenderer = ({ id, url, mini, active, visited, index }) => {
  const { state, dispatch } = useContext(MainContext);
  return (
    <StyledImageRenderer
      onClick={() =>
        mini
          ? dispatch({ type: "UPDATE_CURRENT_IMAGE", payload: index })
          : undefined
      }
      style={{
        cursor: mini ? "pointer" : "crosshair",
        border:
          state.currentState.currentImage.id === id
            ? "3px solid green"
            : "none",
      }}
    >
      <img
        src={url}
        draggable={false}
        style={{
          ...{
            objectCover: "fill",
            height: "100%",
          },
          ...(visited ? { filter: "grayscale(100%)", opacity: 0.3 } : {}),
        }}
      />
    </StyledImageRenderer>
  );
};

export default ImageRenderer;
