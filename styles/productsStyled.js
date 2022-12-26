import styled from "styled-components";

const ProductsStyled = styled.div`
  max-width: calc(998px);
  margin: 0 auto;
  display: grid;
  gap: 64px;
  /* justify-items: space; */

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export { ProductsStyled };
