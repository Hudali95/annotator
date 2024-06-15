import { useContext } from "react";
import styled from "styled-components";
import { MainContext } from "../Layouts/Index";
import ImageRenderer from "../Components/ImageRender";

const StyledImagesSelector = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  position: fixed;
  background: #fff;
  bottom: 120px;
  left: calc(100% - 500px);
  overflow: scroll;
  flex-wrap: wrap;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.3);
`;

function ImagesSelector() {
  const { state, dispatch } = useContext(MainContext);
  console.log("state.imagesData", state.imagesData);
  return (
    <StyledImagesSelector>
      {state.imagesData.map((image, index) => (
        <div
          style={{
            width: 100,
            display: "flex",
            alignItems: "center",
          }}
        >
          <ImageRenderer
            mini={true}
            url={image.url}
            id={image.id}
            key={image.id}
            index={index}
          />
        </div>
      ))}
    </StyledImagesSelector>
  );
}

export default ImagesSelector;
