import Products from "@components/Products";
import { ProductsStyled } from "@styles/productsStyled";
import { products } from "data/products";
import Carousel from "../carousel/slider";

export default function Home() {
  return (
    <>
      {/* <Carousel /> */}
      <h1 style={{ color: "black" }}>What is happening</h1>
      <ProductsStyled>
        {products.map((product, id) => (
          <Products {...product} key={product.id} />
        ))}
      </ProductsStyled>
      <div>
        <h2>About</h2>
        <p>
          Bonema is an Award winning, accredited and registered medical device
          distributor to hospitals, Clinics and retail pharmacies. Our clientele
          includes to name a few, Netcare Group, Louis Pasteur Holdings Group,
          Phelang Bonolo Healthcare Group and Sedibeng Hospital, in this process
          we have accumulated a great deal of experience in servicing clients
          and delivering on time, servicing Southern Africa. Bonema is also the
          sole distributor for Sofwave, 1drop and Mecan in Southern Africa and a
          Fotona, Phillips and BioMaxima SA certified reseller. We have built
          relationships with trusted and certified manufacturers and logistics
          companies globally. We have offices in South Africa, Botswana and
          Swaziland with clientele in Africa, China, Australia and United States
          of America.
        </p>
      </div>
    </>
  );
}
