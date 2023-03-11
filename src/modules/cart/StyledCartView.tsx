import styled from "styled-components";

const StyledCartView = styled.div`
  .CartView__header {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-inline: 8px;
    margin-block: 16px;

    margin: 0 auto;

    @media screen and (max-width: 599px) {
      width: 328px;
    }

    @media screen and (min-width: 600px) and (max-width: 904px) {
      width: 534px;
    }

    @media screen and (min-width: 905px) and (max-width: 1239px) {
      width: 840px;
    }    
    
    @media screen and (min-width: 1440px) and (max-width: 1647px) {
      width: 1040px;
    }        

    @media screen and (min-width: 1648px) and (max-width: 1920px) {
      width: 1271px;
    }            

    .CartView__header_text {
      border-bottom: 1px solid #C9C9C9;
      margin-right: -36px;
      font-size: 24px;
      font-weight: bold;
      width: 100%;
    }
  }

  .CartView__grid_cards {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin: 8px 24px;

    @media screen and (max-width: 599px) {
      width: 328px;
    }

    @media screen and (min-width: 600px) and (max-width: 904px) {
      width: 534px;
    }
  
    @media screen and (min-width: 905px) and (max-width: 1920px) {
      display: none
    }      
  
    .CartView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CartView__grid_addToCart {
      cursor: pointer;
    }
  }

  .CartView__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 24px auto;

    @media screen and (max-width: 599px) {
      width: 328px;
    }

    @media screen and (min-width: 600px) and (max-width: 904px) {
      width: 534px;
    }

    @media screen and (min-width: 905px) and (max-width: 1239px) {
      width: 840px;
    }    
    
    @media screen and (min-width: 1440px) and (max-width: 1647px) {
      width: 1040px;
    }        

    @media screen and (min-width: 1648px) and (max-width: 1920px) {
      width: 1271px;
    }                
  }  

  .CartView__grid_table {
    @media screen and (min-width: 0) and (max-width: 904px) {
      display: none
    }
    
    @media screen and (min-width: 905px) and (max-width: 1439px) {
      width: 689px;
    }


    @media screen and (min-width: 1440px) and (max-width: 1647px) {
      width: 838px;
    }    

    @media screen and (min-width: 1648px) {
      width: 840px;
    }    

    .CartView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CartView__grid_addToCart {
      cursor: pointer;
    }      
  }

  .CartView__grid_summary {
  }

`;

export default StyledCartView;
