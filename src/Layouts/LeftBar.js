import { styled } from "styled-components";
import MenuBar from "../Features/MenuBar";

const StyledLeftBar = styled.div`
  width: 120px;
  height: 100%;
  border-right : 1px solid #e5e5e5;
  display : flex;
  flex-direction: column;
  align-items:center;
`;

const LeftBar = () => {
  return <StyledLeftBar> <MenuBar/> </StyledLeftBar>;
};

export default LeftBar;
