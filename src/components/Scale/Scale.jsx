import styles from "../style";
import active from "../../assets/active.svg";
import activity from "../../assets/activity.svg";
import capFooter from "../../assets/capital-footer.svg";
import investFooter from "../../assets/investors-footer.svg";
import tradeNow from "../../assets/trade-now.svg";
import scaleNow from "../../assets/scale-now.svg"

const Scale = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.marginY} mx-auto`}>
      <div className="scale-heading mx-auto my-2">
        <p className="text-xs font-bold font-inter text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-1 text-center mx-auto">
          SCALE
        </p>
        <h2 className="font-normal text-xl md:text-2xl lg:text-4xl text-white mx-auto text-center">
          Built to scale
        </h2>
        <h2 className="font-normal text-xl md:text-2xl lg:text-4xl text-tertiary mx-auto text-center">
          as your business grows
        </h2>
      </div>

      <div className="scale-grid grid grid-cols-1 h-fit max-w-5xl md:grid-cols-7 gap-5 rounded-[14px] p-6 my-2 mx-auto">
        {/* Capital Footer Contain*/}
        <div className={`md:col-span-4 flex flex-col gap-1 bg-[#15181e] border-slate-900 border rounded-[48px] py-6 px-4`}>
          {/* Image with fade */}
          <div className="h-[350px] overflow-hidden mx-auto">
            <img src={tradeNow} alt="capital-footer" className="" />
          </div>

          {/* Text contained in the same div */}
          <div className="">
            
            <p className="text-xs font-bold font-inter text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit text-start">
              ACCESS
            </p>
            <h2 className="text-white font-bold text-start text-xl">
              Access instant financing
            </h2>

            <h2 className="text-xl py-2 text-start text-tertiary break-words max-w-sm">
              Convert your revenue into up-front capital with the click of a
              button.
            </h2>
          </div>
        </div>

        {/* Active Contain */}
        <div className={`md:col-span-3 flex flex-col gap-1 bg-[#15181e] border-slate-900 border rounded-[48px] py-6 px-4`}>
          <div className="h-[350px] overflow-hidden">
            <img src={active} alt="active" className="mx-auto" />
          </div>

          <div className="">
            <p className="text-xs font-bold font-inter text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit text-start">
                OPERATE
            </p>
            <h2 className="text-white font-bold text-start text-xl">
              Operate with ease
            </h2>

            <h2 className="text-xl py-2 text-start text-tertiary break-words max-w-sm mx-auto">
              Financing on autopilot so you can focus on running your business.
            </h2>
          </div>
        </div>

        {/* Activity Contain */}
        <div className={`md:col-span-3 flex flex-col gap-1 bg-[#15181e] border-slate-900 border rounded-[48px] py-6 px-4`}>
            <div className="h-[350px] overflow-hidden">
                <img src={activity} alt="activity" className="mx-auto" />
            </div>
            <div className="">
            <p className="text-xs font-bold font-inter text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit text-start">
                DEPLOY
            </p>
            <h2 className="text-white font-bold text-start text-xl">
                Deploy your capital intelligently
            </h2>
            <h2 className="text-xl py-2 text-start text-tertiary break-words max-w-sm mx-auto">
                Invest in the largest untapped asset class.
            </h2>
          </div>
        </div>

        {/* Input Contain */}
        <div className={`md:col-span-4 bg-[#15181e] gap-1 border-slate-900 border rounded-[48px] py-6 px-4`}>
          <div className="h-[350px] overflow-hidden">
            <img src={scaleNow} alt="scale" className="mx-auto" />
          </div>
          <div className="">
            <p className="text-xs font-bold font-inter text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit text-start">
                BUILD
            </p>
            <h2 className="text-white font-bold text-start text-xl">
              Scale your business flexibly
            </h2>
            <h2 className="text-xl text-start py-2 text-tertiary break-words max-w-sm">
              Leverage our API to create unique capital offerings for your
              customers.
            </h2>
          </div>
        </div>
      </div>

      <div className={`scale-footer ${styles.marginY} ${styles.paddingY} grid grid-cols-1 md:grid-cols-2 my-2 mx-auto max-w-[68rem] gap-6`}>
        <div className="investors-footer rounded-[15px] max-w-[36rem] max-h-[28rem] bg-[#15181e] px-4 py-6 overflow-x-hidden overflow-y-hidden relative mx-auto">
          <div className="text-content py-6 px-4">
            <h2 className="text-white font-inter text-xl md:text-2xl">Invest</h2>
            <h2 className="text-tertiary font-inter text-xl md:text-2xl">Diversify your portfolio by investing in the largest untapped asset class</h2>
          </div>
          <div className="image-content flex justify-end">
            <img src={investFooter} alt="Investors Footer" className="max-w-[16rem] md:max-w-[28rem]" />
          </div>
          <div className="button-content">
            <button className="button-content bg-button text-white font-semibold font-inter py-2 px-4 my-6 w-fit rounded-full h-fit text-sm absolute bottom-1">
              Explore
            </button>
          </div>
        </div>
        <div className="capital-footer rounded-[15px] max-w-[36rem] max-h-[28rem] bg-white px-4 overflow-x-hidden overflow-y-hidden relative mx-auto">
          <div className="text-content absolute py-6 px-4">
            <h2 className="text-slate-600 font-inter text-xl md:text-2xl">Capital</h2>
            <h2 className="text-slate-500 font-inter text-xl md:text-2xl">Turn your future revenue into dilution-free capital instantly</h2>
          </div>
          <div className="image-content flex justify-end">
            <img src={capFooter} alt="Capital Footer" className="max-w-[16rem] md:max-w-[36rem]" />
          </div>
          <div className="button-content">
            <button className="button-content bg-[#ebecee] text-black font-semibold font-inter py-2 px-4 my-6 w-fit rounded-full h-fit text-sm absolute bottom-0 md:bottom-1">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scale;
