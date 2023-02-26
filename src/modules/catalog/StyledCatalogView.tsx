import styled from "styled-components";

const StyledCatalogView = styled.div`
  .CatalogView__header {
    display: flex;
    align-items: start;
    flex-direction: column;

    margin-inline: 8px;
    margin-block: 16px;

    .CatalogView__header_text {
      border-bottom: 1px solid #C9C9C9;
      margin: 0 0 0 16px;
      padding-bottom: 16px;
      font-size: 24px;
      font-weight: bold;
      width: 98%;
    }
  }

  .CatalogView__grid_cards {
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
  
    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
  }

  .CatalogView__grid {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin: 8px 24px;

    @media screen and (min-width: 0) and (max-width: 904px) {
      display: none
    }
    
    .CatalogView__grid_productImage {
      width: 60px;
      object-fit: contain;
    }

    .CatalogView__grid_addToCart {
      cursor: pointer;
    }
  }  
`;

export default StyledCatalogView;
