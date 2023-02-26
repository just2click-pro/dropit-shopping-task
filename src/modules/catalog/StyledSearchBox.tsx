import styled from "styled-components";

const StyledSearchBox = styled.div`   
  background: white;
  margin: 16px 0 0 16px;
  font-size: 24px;
  font-weight: bold;

  @media screen and (min-width: 600px) and (max-width: 904px) {
    width: 534px;
  }

  @media screen and (min-width: 905px) and (max-width: 1239px) {
    width: 412px;
  }      

  @media screen and (min-width: 1240px) and (max-width: 1440px) {
    width: 514px;
  }            

  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    width: 622px;
  }                  
}`;

export default StyledSearchBox;
