import { styled } from "styled-components";

const StyledContent = styled.div`
  //   background: #e5e5e5;
  height: 100%;
  flex-grow: 2;
  min-width: 50vw;
  height: 100%;
`;

const Content = () => {
  return (
    <StyledContent className="padding-m">
      Content
      <div style={{ minwidth: "50vw", border: "1px solid red" }}></div>
    </StyledContent>
  );
};

export default Content;
