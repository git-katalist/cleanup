import styled from "styled-components";

const ProductStyled = styled.div`
  background-color: whitesmoke;
  color: black;
  padding-bottom: 1rem;
  box-shadow: 0.3rem 0px 7px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1280px) {
    /* max-width: 278px; */
  }
`;

const ProductPage = styled.a``;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ProductImage = styled.img`
  transform: scale(0.8);
  transition: all 450ms ease-in;

  &:hover {
    transform: scale(0.9);
  }
`;

const ProductName = styled.h4`
  padding: 1rem 1.3rem;
  background-color: grey;
  color: white;
  font-size: 2.2rem;
`;

const ProductExcerpt = styled.p`
  padding: 1rem 1.3rem;
  font-size: 1.7rem;
  font-weight: 100;
  line-height: 1.3;
`;

const Buttons = styled.div`
  padding-left: 1.3rem;
  padding-right: 1.3rem;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ReadMore = styled.a`
  display: inline-block;
  padding: 0.5rem 0.75rem;
  background-color: green;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-size: 14px;
  border: 2px solid green;
  transition: all 450ms ease-in-out;

  &:hover {
    background-color: transparent;
    color: green;
  }
`;

const Contact = styled(ReadMore)`
  background-color: transparent;
  border: 2px solid green;
  color: green;
  transition: all 450ms ease-in-out;

  &:hover {
    background-color: green;
    color: white;
  }
`;

export {
  ProductStyled,
  ProductName,
  ProductPage,
  ImageWrapper,
  ProductImage,
  ProductExcerpt,
  Buttons,
  ReadMore,
  Contact,
};
