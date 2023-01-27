import styles from "./components/style";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import logo from "./assets/pipe-logo.svg";
import Customer from "./components/Customer/Customer";
import Products from "./components/Products/Products";
import Platform from "./components/Platform/Platform";
import Integrate from "./components/Integration/Integrate";
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header />
          <Hero />
          <Customer />
          <Products />
          <Platform />
          <Integrate />
        </div>

        {/*  */}
        {/* <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            Hero
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default App;
