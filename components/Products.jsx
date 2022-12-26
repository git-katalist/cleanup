import Product from "./Product";

const Products = ({ ...product }) => {
  //   console.log(product);
  return (
    <>
      <Product {...product} />
    </>
  );
};

export default Products;
