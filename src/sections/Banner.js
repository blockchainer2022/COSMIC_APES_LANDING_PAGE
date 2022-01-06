/* eslint-disable jsx-a11y/anchor-is-valid */
import Twitter from "../assets/Twitter.png";
import Discord from "../assets/Discord.png";
const Banner = () => {
  return (
    <div className="py-20  text-center">
      <h1 className="text-6xl">Cosmic Apes</h1>
      <p className="w-11/12  md:max-w-3xl mx-auto mt-6 text-base sm:text-lg">
        cosmic apes is an exclusive solana collection od ape nfts. traped inside
        the metaverse for bilions of years. the ape are ready to escape and
        wreak havoc on the blockchain!{" "}
      </p>
      <p className="mt-20 text-sm w-11/12 sm:w-auto mx-auto">
        play our game, collect our NFTs and use our currency.
      </p>
      <div className="grid sm:grid-flow-col gap-6 justify-center mt-6">
        <button className="text-gray px-10 py-2 rounded-md bg-white uppercase text-2xl">
          Buy $cac
        </button>
        <button className="text-gray px-10 py-2 rounded-md bg-white uppercase text-2xl">
          Trade nft
        </button>
      </div>
      <p className="text-base mt-20">
        Our community is amazing. Join the gang.
      </p>
      <div className="grid grid-flow-col justify-center items-center gap-3 mt-4">
        <a href="#" target="_blank">
          <img src={Twitter} alt="twitter" />
        </a>
        <a href="#" target="_blank">
          <img src={Discord} alt="Discord" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
