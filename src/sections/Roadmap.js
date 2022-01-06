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
          <p className="text-xl mt-2 mb-4">Q3 2021</p>

          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>
              Launch Bananagram - an NFT game for Apes, Monkeys, and other
              Degens
            </p>
          </div>
          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Launch Tournament for the Degen Ape Academy</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Add other premiere collections to Bananagram</p>
          </div>
          <p className="text-xl mt-10 mb-4 ">Q4 2022</p>

          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>Mint 1,500 Solana Banana NFTs</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={Done} alt="" className="mr-3" />
            <p>List on secondary Marketplaces</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={progress} alt="" className="mr-3" />
            <p>
              10% of proceeds from initial sale will be donated to the Dian
              Fossey Gorilla Fund
            </p>
          </div>
          <div className="flex items-center mb-4">
            <img src={progress} alt="" className="mr-3" />
            <p>Launch Banana Bombs (Airdrop for Banana holders)</p>
          </div>
          <p className="text-xl mt-10 mb-4 ">Q1 2021</p>

          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Mint 1,500 Solana Banana NFTs</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>List on secondary Marketplaces</p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>
              10% of proceeds from initial sale will be donated to the Dian
              Fossey Gorilla Fund
            </p>
          </div>
          <div className="flex items-center mb-4">
            <img src={ComingSoon} alt="" className="mr-3" />
            <p>Launch Banana Bombs (Airdrop for Banana holders)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
