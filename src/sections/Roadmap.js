import Done from "../assets/Done.png";
import progress from "../assets/progress.png";
import ComingSoon from "../assets/coming-soon.png";

const Roadmap = () => {
  return (
    <div className="pb-10" id="roadmap">
      <div className="container pb-10 ">
        <h2 className="text-5xl text-center">RoadMap</h2>
        <div className="grid grid-flow-col gap-8 mt-20 justify-center">
          <div className="flex items-center">
            <img src={Done} alt="" className="mr-2" />
            <p className="text-lg">Done</p>
          </div>
          <div className="flex items-center">
            <img src={progress} alt="" className="mr-2" />
            <p className="text-lg">In Progress</p>
          </div>
          <div className="flex items-center">
            <img src={ComingSoon} alt="" className="mr-2" />
            <p className="text-lg">Coming Soon</p>
          </div>
        </div>
        <div className=" max-w-4xl mx-auto w-full">
          <p className="text-xl mt-2 mb-4">Q4 2021</p>

          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Grow Social Presence</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Launch Discord</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Mint 999 Cosmic Ape NFTs</p>
          </div>
          <p className="text-xl mt-10 mb-4 ">Q1 2022</p>

          <div className="flex items-center mb-4">
            <img src={progress} alt="" className="mr-3" />
            <p>List On Secondary Marketplaces</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={progress} alt="" className="mr-3" />
            <p>Rarity Release on Moonrank.app</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={progress} alt="" className="mr-3" />
            <p>Cosmic Ape Coin $CAC Airdrop To All NFT Holders</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>$CAC Public Drop</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Listing On Dex Exchange</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Development of Whitepaper</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Pixel Cosmic Apes Release</p>
          </div>
          <p className="text-xl mt-10 mb-4 ">Q2 2022</p>

          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Listing on first Centralized Exchange</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Initial Playable Beta of Cosmic Apes p2e Game</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Announcement of Cosmic Ape DAO</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Game marketing, and influencer outreach</p>
          </div>
          <p className="text-xl mt-10 mb-4 ">Q3 2022</p>

          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>2nd Gen Cosmic Apes Release</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Baby Cosmic Apes Release </p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Cosmic Ape Merch Drop</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Development Of Mobile Version Of Game</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>First Community Events Scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
