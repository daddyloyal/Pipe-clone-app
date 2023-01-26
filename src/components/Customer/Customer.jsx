import styles from "../style";
import pave from "../../assets/pave.png";
import vermaFarms from "../../assets/verma.png";
import loveCircular from "../../assets/love-circular.png";
const Customer = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.paddingX}`}>
      <div className="heading flex justify-between w-full">
        <div className="text-content">
          <p className="text-xs font-bold text-transparent bg-gradient-to-r from-blue-700 via-purple-600 to-red-500 bg-clip-text w-fit my-3">
            CASE STUDIES
          </p>
          <h2 className="text-white font-inter font-light text-4xl">
            Loved by industry leaders
          </h2>
          <h2 className="text-tertiary font-inter font-light text-4xl">
            See what founders are saying
          </h2>
        </div>
        <button className="button-content bg-secondary text-white font-normal font-linear py-3 px-6 rounded-full h-fit mt-14 text-sm">
          Customer Stories
        </button>
      </div>
      <div className="swiper flex">
        {/* Card 1 */}
        <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto my-8 border border-gray-800 bg-secondary hover:bg-card cursor-pointer">
          <img class="w-full" src={pave} alt="pave" />
          <div class="px-6 py-4">
            <div class="font-bold font-inter text-md mb-2 text-white border-b border-slate-700 py-2">Watch Sho's Story</div>
            <p class="text-tertiary font-normal font-inter text-xl">
              Pave used Pipe side-by-side with equity to preserve ownership
              while they grew
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block text-sm font-semibold text-tertiary mr-2">
              Pipe for SaaS
            </span>
          </div>
        </div>
        {/* Card 2 */}
        <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto my-8 border border-gray-800 bg-secondary hover:bg-card cursor-pointer">
          <img class="w-full" src={vermaFarms} alt="verma" />
          <div class="px-6 py-4">
            <div class="font-bold font-inter text-md mb-2 text-white border-b border-slate-700 py-2">Watch AJ's Story</div>
            <p class="text-tertiary font-normal font-inter text-xl">
                Verma Farms got the funding they needed to complete an acquisition in less than 72 hours
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block text-sm font-semibold text-tertiary mr-2">
                Pipe for D2C
            </span>
          </div>
        </div>
        {/* Card 3 */}
        <div class="max-w-sm rounded-2xl overflow-hidden shadow-lg mx-auto my-8 border border-gray-800 bg-secondary hover:bg-card cursor-pointer">
          <img class="w-full" src={loveCircular} alt="love-circular" />
          <div class="px-6 py-4">
            <div class="font-bold font-inter text-md mb-2 text-white border-b border-slate-700 py-2">Watch Zaires's Story</div>
            <p class="text-tertiary font-normal font-inter text-xl">
                Love Circular 2x’d their revenue and grew their team after each Pipe trade
            </p>
          </div>
          <div class="px-6 py-4">
            <span class="inline-block text-sm font-semibold text-tertiary mr-2">
              Pipe for Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
