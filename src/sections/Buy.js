import BuyLayout from "../assets/layout.png";

const data = [
  {
    text: "Purchase SOL on a reputable exchange: To start, buy SOL on well-known exchanges such as Binance, FTX, Kraken or Coinbase.",
  },
  {
    text: "Set-up a Solana wallet and copy address: Download the Phantom wallet extension for Google Chrome, Microsoft Edge, Firefox, or the Brave Browser Link: <a href='https://phantom.app' target='_blank' class='underline'>https://phantom.app.</a> Once you have created your wallet, you will need click on the top where it says Wallet # as this will copy your wallet address to your clipboard.",
  },
  {
    text: "Send SOL from your Exchange wallet to your Phantom wallet: To begin, Identify your SOL within your exchange wallet and select withdraw. At this point, it should ask you how much you would like to withdraw along with the receiving address. This is where you paste your address from the previous step to complete the withdrawal of funds.",
  },
  {
    text: "CONVERTING SOL TO USDC ON RAYDIUM SWAP: FIRST, GO TO <a class='underline' href='https://raydium.io/SWAP' target='_blank'>HTTPS://RAYDIUM.IO/SWAP<a> THEN CLICK ON CONNECT AT THE TOP RIGHT OF THE SCREEN. ONCE YOUR WALLET IS CONNECTED, YOU WILL SELECT 'FROM: SOL' AND 'TO(ESTIMATE): USDC' AND THEN CLICK SWAP AT THE BOTTOM. NOTE: BE SURE TO LEAVE A SMALL AMOUNT OF SOL IN YOUR WALLET AS THIS IS USED TO POWER CURRENT AND FUTURE TRANSACTIONS. CONVERT USDC TO $CAC ON DEXLABS. NOTE: THIS PROCEDURE SHOULD BEVERY SIMILAR TO THE PREVIOUS CONVERSION USING RAYDIUM SWAP.",
  },
];

const Buy = () => {
  return (
    <div className="pb-20" id="buy">
      <div className="container pb-20 border-b-2 border-white">
        <h2 className="text-5xl text-center">How To Buy $CAC?</h2>
        {/* 
        <p className="mt-10 max-w-2xl w-full md:ml-10">
          Limited: 1,500 unique, fruity, algorithmically generated Bananas -
          stored with proof of ownership stored on the Solana blockchain.
        </p>
        <p className="mt-4 max-w-2xl w-full  md:ml-10">
          We believe in Solana and we believe in NFTs. In the future, we'll look
          at this period as a defining moment in culture and technology. History
          is being made, and we want to be part of it in a meaningful way.
        </p> */}
        <div className="my-80 hidden lg:block w-6/12 mx-auto relative ">
          <img src={BuyLayout} alt="" className="" />
          {data.map((val, i) => (
            <div key={i} className={`card${i + 1} bg-blue p-4 absolute`}>
              <div className="w-16 h-16 grid place-content-center rounded-full bg-blue-dark text-2xl mx-auto mb-4">
                {i + 1}
              </div>
              <p dangerouslySetInnerHTML={{ __html: val.text }} />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {data.map((val, i) => (
            <div key={i} className="lg:hidden bg-blue p-4">
              <div className="w-16 h-16 grid place-content-center rounded-full bg-blue-dark text-2xl mx-auto mb-4">
                {i + 1}
              </div>
              <p dangerouslySetInnerHTML={{ __html: val.text }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
