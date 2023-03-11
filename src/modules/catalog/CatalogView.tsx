import React, { ChangeEvent, useEffect, useState, useRef } from "react";

import { LoadingSpinner, Table, Cards } from "../../tools/ui_components";
import { SearchTextField } from "./SearchTextField"

import useCatalog from "./useCatalog";
import StyledCatalogView from "./StyledCatalogView";
import StyledSearchBox from './StyledSearchBox';
import { CatalogProduct } from '../product/types';

const CatalogView = () => {
  const { isLoading, products, columns, getKeyRow } = useCatalog();
  const [productsList, setProductsList] = useState<CatalogProduct[]>([])
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchPhrase, setSearchPhrase] = useState("")

  const handleSearchChange = ((event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value)
  })

  const handleSearchClick = () => {
    inputRef.current?.focus()
  }

  useEffect(() => {
    const filteredProducts = 
      products.filter((product: CatalogProduct) => product.id.toString().includes(searchPhrase) ||
        product.title.includes(searchPhrase))

      setProductsList(filteredProducts)
  },[searchPhrase, products])

  useEffect(() => {
    setProductsList(products)
  }, [products])

  return (
    <StyledCatalogView>
      <div className="CatalogView__header">
        <div className="CatalogView__header_text">Catalog Page</div>
        <StyledSearchBox>
          <SearchTextField placeholder="Search..." 
            ref={inputRef}
            onChange={handleSearchChange} 
            onClick={handleSearchClick}
            value={searchPhrase} />
        </StyledSearchBox>
      </div>

      <div className="CatalogView__grid_cards">
        <Cards data={productsList} getKeyRow={getKeyRow} />
      </div>

      <div className="CatalogView__grid">
        <Table data={productsList} columns={columns} getKeyRow={getKeyRow} />
      </div>      

      <LoadingSpinner isVisible={isLoading} />
    </StyledCatalogView>
  );
};

export default CatalogView;
