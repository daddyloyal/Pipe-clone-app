import styles from "../style";
import slideCapital from "../../assets/product-slide-capital.webp";
import slideInvestors from "../../assets/product-slide-investors.webp";
import ProductSlider from "../Swiper/SwiperSecond";

const Products = () => {
  const PRODUCT_SLIDE = [
    {
        title: "Capital",
        body: "Transform future revenue into up-front capital",
        span: "with the click of a button.",
        image: slideCapital,
        foot1: "Need flexible access to capital?",
        foot2: "Get instant financing",
        footSpan: "when you need it.",

    },
    {
        title: "Invest",
        body: "Invest in a new asset",
        span: "that matches your risk and return profile",
        image: slideInvestors,
        foot1: "Easily manage a diverse portfolio.",
        foot2: "Tap into a stable new asset class",
        footSpan: "across industries",
    },
  ];

  return (
    <section
      className={`${styles.boxWidth} ${styles.marginY} ${styles.paddingY}`}
    >
      <div className="heading mx-auto my-20">
        <p className="text-xs font-bold text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-3 mx-auto">
          CASE STUDIES
        </p>
        <h2 className="font-normal font-inter text-white text-3xl w-fit mx-auto">
          A fully integrated suite
        </h2>
        <h2 className="font-normal font-inter text-tertiary text-3xl w-fit mx-auto">
          of capital products
        </h2>
      </div>

      <div className="swiper-image-content my-3 w-full mx-auto max-w-screen-md flex justify-between bg-[#14171e] border border-slate-900 rounded-lg h-full py-4 px-6">
        <ProductSlider productSlider={PRODUCT_SLIDE} />
      </div>
    </section>
  );
};

export default Products;
