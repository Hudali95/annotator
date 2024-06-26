import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import ImageRenderer from "../Components/ImageRender";
import { MainContext } from "../Layouts/Index";

const StyledMiniMap = styled.div`
  height: 90px;
  flex: 2;
  display: flex;
  align-items: center;
  width: 90%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const MiniMap = () => {

  const { state, dispatch } = useContext(MainContext)
  const { imagesData } = state



  return (
    <StyledMiniMap>
      {imagesData.length
        ? imagesData.map(({ url, id }, index) => (
          <ImageRenderer
            mini={true}
            url={url}
            id={id}
            key={id}
            index={index}
            visited={index === 0}
          />
        ))
        : null}
    </StyledMiniMap>
  );
};

export default MiniMap;
