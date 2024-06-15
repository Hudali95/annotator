import { styled } from "styled-components";
import ImageRenderer from "../Components/ImageRender";
import { useContext } from "react";
import { MainContext } from "./Index";

const StyledContent = styled.div`
  //   background: #e5e5e5;
  height: 100%;
  flex-grow: 2;
  min-width: 50vw;
  height: 100%;
  display : flex;
  align-items : center;
  justify-content : center;
  position : relative
`;

const Content = () => {
  const { state, dispatch } = useContext(MainContext);
  const { currentImage: image } = state.currentState;
  return (
    <StyledContent className="padding-m">
      <ImageRenderer
        mini={false}
        url={image.fullURL}
        id={image.id}
        key={image.id}
      />
      <div style={{ minwidth: "50vw", border: "1px solid red" }}></div>
    </StyledContent>
  );
};

export default Content;
