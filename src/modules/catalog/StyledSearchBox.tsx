import styled from "styled-components";

const StyledSearchBox = styled.div`   
  background: white;
  display: flex;
  justify-content: start;
  font-size: 24px;
  font-weight: bold;

  margin-inline: 8px;
  margin-block: 16px;

  @media screen and (min-width: 0px) and (max-width: 599px) {
    margin: 16px 24px 0;
    width: 328px;
  }

  @media screen and (min-width: 600px) and (max-width: 904px) {
    margin: 16px 24px 0;
    width: 534px;
  }

  @media screen and (min-width: 905px) and (max-width: 1239px) {
    margin: 16px 0 0;
    width: 412px;
  }      

  @media screen and (min-width: 1240px) and (max-width: 1440px) {
    margin: 16px 0 0;
    width: 514px;
  }            

  @media screen and (min-width: 1441px) and (max-width: 1920px) {
    margin: 16px 0 0;
    width: 622px;
  }                  
}`;

export default StyledSearchBox;
