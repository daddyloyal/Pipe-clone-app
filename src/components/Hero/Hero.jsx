import styles from "../style";
import heroImg from "../../assets/trade-view.webp";
import orderBox from "../../assets/order-box.svg";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-2`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <button
          className={`flex flex-row items-center mb-2 mx-auto bg-primary border-slate-800 border text-white p-1 overflow-hidden font-normal font-inter text-xs rounded-full px-3 py-1`}
        >
          <p className="mr-2">Explore the capital product <span className="text-sm font-thin text-tertiary">|</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-violet-500">Explore</span> </p>
          <div className="">
            <svg
              fill="none"
              stroke="red"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              width={13}
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mt-[3px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </button>

        <section id="hero-text" className="mx-auto max-w-screen-md text-center mb-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl py-1 text-white max-w-4xl font-normal font-inter text-center mx-auto">
            The modern capital platform.
          </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl py-1 text-tertiary max-w-5xl font-light font-inter text-center mx-auto">
            Allowing you to grow on your terms.
          </h1>
          <p className="text-sm md:text-base py-4 text-center text-tertiary max-w-sm font-normal font-inter break-words mb-8 mx-auto ">
            Pipe transforms your future revenue streams into up-front capital for growth—without dilution.
          </p>
          <button className={`font-inter font-normal cursor-pointer text-xs`}>
            <a className="bg-white text-black font-bold py-4 px-8 rounded-full"
              href={`#`}>
              Start Now 
            </a>
          </button>
        </section>
        <section id="hero-img" className="mx-auto max-w-screen-xl mt-0 flex relative">
          <img src={heroImg} className="my-28 w-auto rounded-[15px]" alt="hero-img" />
          <img src={orderBox} alt="order card" className="absolute left-[75%] lg:left-[78%] top-[8.5rem] lg:top-48 w-24 lg:w-60" />
        </section>
      </div>
    </section>
  )
}

export default Hero