import axios from "axios";
import { createContext, useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Content from "./Content";
import FooterBar from "./Footer";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

const enabledFunctionalities = {
  leftBar: true,
  rightBar: true,
  footerBar: true,
};

const ContentWrapper = styled.div`
  height: calc(100% - 120px);
  width: 100%;
  display: flex;
  padding: 0.5rem 1rem;
`;
const StyledLayout = styled.div`
  height: 100vh;
  padding: 0rem 0.5rem;
`;

const initialState = {
  imagesData: [],
  currentImage: false,
  updatedDetails: {},
  boudingBoxDetails: {},
  currentBoundingBox: false,
  currentState: {
    currentImage: false,
    currentIndex: 0,
    currenyBoudingBox: false
  }
}

const reducer = (state, action) => {

  console.log({ state, action })

  switch (action.type) {
    case "STORE_IMAGES_DATA":
      return {
        ...state,
        imagesData: action.payload,
        currentImage: action.payload.length ? action.payload[0].id : false,
        currentState: {
          ...state.currentState,
          currentImage: action.payload.length ? action.payload[0].id : false,
        }
      }
    case "NEXT_IMAGE":
      // state.currentImage = state.imagesData[action.payload]
      // state.currentState.currentImage = state.imagesData.length ? state.imagesData[action.payload].id : false
      // state.currentState.currentIndex = action.payload
      return {...state, currentState : {
        currentImage: state.imagesData.length ? state.imagesData[action.payload].id : false,
        currentIndex: action.payload,
        currenyBoudingBox: false
      }}
    case "PREVIOUS_IMAGE":
      state.currentImage = state.imagesData[action.payload]
      return {...state}
    case "CURRENT_IMAGES":
      currentImage = state.imagesData[action.payload]
      return state
    case "UPDATE_BOUDING_BOX":
      imagesData = action.payload
      return state
    case "CURRENT_BOUDING_BOX":
      imagesData = action.payload
      return state
    default:
      return state

  }

}

export const MainContext = createContext()

const Index = () => {
  let [imagesData, setImagesData] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=II6O1aOT1ZDr-NdwTvjbszNH1ayv7gC8NXDGiWoYHlI&per_page=10"
      )
      .then((res) =>
        dispatch({
          type: "STORE_IMAGES_DATA", payload: res.data.map((image) => ({
            id: image.id,
            url: image.urls.thumb,
          }))
        })
        // setImagesData(
        //   res.data.map((image) => ({
        //     id: image.id,
        //     url: image.urls.thumb,
        //   }))
        // )
      );
  }, []);

  console.log("askjdgasd", state)
  return (
    <StyledLayout>
      <MainContext.Provider value={{ state, dispatch }}>
        <ContentWrapper>
          <LeftBar />
          <Content />
          <RightBar />
        </ContentWrapper>
        <FooterBar />
      </MainContext.Provider>
    </StyledLayout>
  );
};

export default Index;