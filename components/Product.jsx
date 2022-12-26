import {
  ProductName,
  ProductStyled,
  ProductExcerpt,
  ImageWrapper,
  ProductImage,
  Buttons,
  Contact,
  ReadMore,
} from "@styles/productStyled";
import { prefix } from "utils/prefix";

const Product = ({ name, pageUrl, imageUrl, excerpt }) => {
  return (
    <ProductStyled>
      <ProductName>{name}</ProductName>
      <ImageWrapper>
        <ProductImage src={prefix + imageUrl} />
      </ImageWrapper>
      <ProductExcerpt>{excerpt}</ProductExcerpt>
      <Buttons>
        <Contact href="/contact">Contact us ...</Contact>
        <ReadMore href={prefix + pageUrl}>Read more ...</ReadMore>
      </Buttons>
    </ProductStyled>
  );
};

export default Product;
