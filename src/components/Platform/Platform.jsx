import styles from "../style";
import scene from "../../assets/scene_01.webp";

const Platform = () => {
  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingY} flex flex-col gap-3 max-w-screen-lg mx-auto`}
    >
      <div className="platform-content flex flex-col md:flex-row justify-between">
        <div className="text-content max-w-md">
          <p className="font-bold text-xs text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-1 font-inter">
            MODERN LIQUIDITY PLATFORM
          </p>
          <h2 className="text-xl lg:text-4xl font-light text-white font-inter my-3">
            Unlock your biggest assets.{" "}
            <span className="text-tertiary">
              Learn how our trading platform works.
            </span>
          </h2>
          <p className="font-inter text-tertiary text-sm font-semibold my-10 max-w-sm">
            Pipe uses secure live data connections to your banking, billing, and
            accounting software to turn your future revenue into a tradable
            asset.
          </p>
          <button className="button-content bg-secondary text-white font-semibold font-inter py-2 px-4 rounded-full h-fit text-sm">
            Start Now
          </button>
        </div>
        <div className="image-content">
          <img src={scene} alt="" className="max-w-[20rem] md:max-w-[40rem] rounded-[15px] mx-auto my-5 md:my-0" />
        </div>
      </div>
      <div className="platform-list my-16">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="border-t border-tertiary py-1">
            <p className="text-white text-tertiary text-xs">01.</p>
            <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">Revenue Types</h2>
        </div>
        <div className="border-t border-tertiary py-1">
            <p className="text-white text-tertiary text-xs">02.</p>
            <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">Asset Class</h2>
        </div>
        <div className="border-t border-tertiary py-1">
            <p className="text-white text-tertiary text-xs">03.</p>
            <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">Marketplace</h2>
        </div>
        <div className="border-t border-tertiary py-1">
            <p className="text-white text-tertiary text-xs">04.</p>
            <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">Get capital</h2>
        </div>
        <div className="border-t border-tertiary py-1">
            <p className="text-white text-tertiary text-xs">05.</p>
            <h2 className="text-tertiary font-inter hover:text-white font-normal text-2xl my-2">Grow</h2>
        </div>
       </div>
      </div>
    </section>
  );
};

export default Platform;
