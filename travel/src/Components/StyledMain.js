import styled from "styled-components";
import defaultImg from "../images/LocationMain.jpg";

const StyledMain = styled.header`
  min-height: calc(80vh - 40px);
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

// setting styling for the single-page background
// prop so that image of that single-page can be used

export default StyledMain;
