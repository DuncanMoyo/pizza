import React from "react";

import {
  ProductsContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductPrice,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductHeading>{heading}</ProductHeading>

      <ProductWrapper>
        {data.map(({ img, alt, name, description, price, button }, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={img} alt={alt} />
              <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDescription>{description}</ProductDescription>
                <ProductPrice>{price}</ProductPrice>
                <ProductButton>{button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
