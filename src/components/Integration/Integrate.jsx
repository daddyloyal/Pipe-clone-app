import styles from "../style";
import integrateBg from "../../assets/integrate_bg.webp";
import check from "../../assets/CheckCircle.svg";

const Integrate = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.marginY}  max-w-screen-lg flex flex-col justify-center md:flex-row gap-10 mx-auto`}>
        <div className={`integrate-text font-inter max-w-md ${styles.paddingY} flex flex-col justify-center mx-auto`}>
            <p className="font-bold text-xs text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-1 mx-auto md:mx-0">INTEGRATE</p>
            <h2 className="text-2xl lg:text-4xl font-light text-white font-inter my-3 text-center md:text-start">
              Seamlessly integrated{" "}
            <span className="text-tertiary">
              with all your tools
            </span>
          </h2>
          <p className="font-inter text-tertiary text-sm font-normal my-6 mx-auto md:mx-0 text-center md:text-start">
            Pipe works by securely connecting your existing data and turning your future revenue streams into tradable assets.
          </p>
          <p className="font-inter text-white text-sm font-normal flex gap-1 border-b border-gray-900 py-4"><img src={check} alt="" className="w-5"/>Access real-time financing <span className="text-tertiary hidden md:block">with live data connections</span></p>
          <p className="font-inter text-white text-sm font-normal flex gap-1 border-b border-gray-900 py-4"><img src={check} alt="" className="w-5"/>Sync billing, banking, and accounting<span className="text-tertiary hidden md:block">in just a few clicks</span></p>
          <p className="font-inter text-white text-sm font-normal flex gap-1 py-4"><img src={check} alt="" className="w-5"/>Bank-level security<span className="text-tertiary hidden md:block">and SOC2 certified</span></p>
          <button className="button-content bg-secondary text-white font-semibold font-inter py-2 px-4 my-6 w-fit rounded-full h-fit text-sm">
            Learn More
          </button>
        </div>
        <div className="integrate-image">
            <img src={integrateBg} alt="" className="max-w-xs md:max-w-md lg:max-w-xl mx-auto" />
        </div>
    </section>
  )
}

export default Integrate