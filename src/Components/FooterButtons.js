import { styled } from "styled-components";
import { SlArrowRight, SlArrowLeft, SlPlus } from "react-icons/sl";

const StyledFooterButtons = styled.div`
  padding: 0px 10px;
  height: 80%;
  display : flex;
  align-items : center;
`;

const FooterButtons = ({ text }) => {
    const RenderButton =()=>{
        switch(text){
            case 'left' :
                return <SlArrowLeft/>
                case 'right' :
                    return <SlArrowRight/>
                    case 'more' :
                        return <SlPlus/>
                        default :
                        return <>{text}</>

        }
    }
  return <StyledFooterButtons> {RenderButton()} </StyledFooterButtons>;
};

export default FooterButtons;