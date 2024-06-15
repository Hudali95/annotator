import { styled } from "styled-components";
import FooterButtons from "../Components/FooterButtons";
import MiniMap from "../Features/MiniMap";

const StyledFooterBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.3);
  height: 120px;
`;

const FooterBar = () => {useContext
  const {state, dispatch} = useContext(MainContext)
  const handleButtonsClick =(type)=>{
    switch(type){
      case 'left' :
        break
        default:
        break
    }

  }
  return (
    <StyledFooterBar className="padding-m">
      <FooterButtons text={"left"} onClick={()=>handleButtonsClick("left")} />
      <MiniMap />
      <FooterButtons text={"more"}  onClick={()=>handleButtonsClick("more")}/>
      <FooterButtons text={"right"}  onClick={()=>handleButtonsClick("right")}/>
    </StyledFooterBar>
  );
};

export default FooterBar;
