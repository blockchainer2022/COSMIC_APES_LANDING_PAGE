import BuyLayout from "../assets/buy-layout.png";

const data = [
  {
    text: "Purchase SOL on a reputable exchange: To start, buy SOL on well-known exchanges such as Binance, FTX, Kraken or Coinbase.",
  },
  {
    text: "Set-up a Solana wallet and copy address: Download the Phantom wallet extension for Google Chrome, Microsoft Edge, Firefox, or the Brave Browser Link: https://phantom.app. Once you have created your wallet, you will need click on the top where it says Wallet # as this will copy your wallet address to your clipboard.",
  },
  {
    text: "Send SOL from your Exchange wallet to your Phantom wallet: To begin, Identify your SOL within your exchange wallet and select withdraw. At this point, it should ask you how much you would like to withdraw along with the receiving address. This is where you paste your address from the previous step to complete the withdrawal of funds.",
  },
  {
    text: "Converting SOL to USDC on Raydium Swap: First, go to https://raydium.io/swap then click on Connect at the top right of the screen. Once your wallet is connected, you will select ‘From: SOL’ and ‘To(Estimate): USDC’ and then click Swap at the bottom. Note: Be sure to leave a small amount of SOL in your wallet as this is used to power current and future transactions. Converting USDC to CHEEMS on Jupiter Swap: Once you have your USDC, you can swap your USDC for CHEEMS here: https://jup.ag/swap/USDC-CHEEMS. Note: This procedure should bevery similar to the previous conversion using Raydium Swap.",
  },
];

const Buy = () => {
  return (
    <div className="pb-20" id="buy">
      <div className="container pb-20 border-b-2 border-white">
        <h2 className="text-5xl text-center">How to buy $ cosmic apes ?</h2>

        <p className="mt-10 max-w-2xl w-full md:ml-10">
          Limited: 1,500 unique, fruity, algorithmically generated Bananas -
          stored with proof of ownership stored on the Solana blockchain.
        </p>
        <p className="mt-4 max-w-2xl w-full  md:ml-10">
          We believe in Solana and we believe in NFTs. In the future, we'll look
          at this period as a defining moment in culture and technology. History
          is being made, and we want to be part of it in a meaningful way.
        </p>
        <div className="mt-10 hidden md:block">
          <img src={BuyLayout} alt="" className="mx-auto w-10/12" />
        </div>

        <div className="grid gap-8 mt-20">
          {data.map((val, i) => (
            <div key={i} className="md:hidden bg-blue p-4">
              <div className="w-16 h-16 grid place-content-center rounded-full bg-blue-dark text-2xl mx-auto mb-4">
                {i + 1}
              </div>
              <p>{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buy;
