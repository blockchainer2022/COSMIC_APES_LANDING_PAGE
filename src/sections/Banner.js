/* eslint-disable jsx-a11y/anchor-is-valid */
import Twitter from "../assets/Twitter.png";
import Discord from "../assets/Discord.png";
const Banner = () => {
  return (
    <div className="py-20  text-center">
      <h1 className="text-6xl">Cosmic Apes</h1>
      <p className="w-11/12  md:max-w-3xl mx-auto mt-6 text-base sm:text-lg uppercase">
        COSMIC APES IS A EXCLUSIVE SOLANA COLLECTION OF APE NFTS. Trapped
        INSIDE THE METAVERSE FOR Billions of years. THE APEs ARE READY TO ESCAPE
        AND WREAK HAVOC ON THE BLOCKCHAIN!
      </p>
      {/* <p className="mt-20 text-sm w-11/12 sm:w-auto mx-auto">
        play our game, collect our NFTs and use our currency.
      </p> */}
      <div className="grid  sm:grid-flow-col gap-6 justify-center mt-10">
        <button className="text-gray px-10 py-2 rounded-md bg-white uppercase text-2xl">
          Buy $cac
        </button>
        <button className="text-gray px-10 py-2 rounded-md bg-white uppercase text-2xl">
          Trade nft
        </button>
      </div>
      <p className="text-base mt-10">
        Our community is amazing. Join the gang.
      </p>
      <div className="grid grid-flow-col justify-center items-center gap-3 mt-4">
        <a
          href="https://mobile.twitter.com/cosmicapesnft"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="twitter" />
        </a>
        <a
          href="https://discord.com/invite/8VTNmSkRWj"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Discord} alt="Discord" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
