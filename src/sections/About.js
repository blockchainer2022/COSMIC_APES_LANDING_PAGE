import Image from "../assets/about-right.png";
import Supply from "../assets/supply.png";
import Fire from "../assets/fire.png";
import Circulating from "../assets/circulating.png";

const cardData = [
  {
    image: Supply,
    title: "Original Supply",
    text: "1,000,000,000",
  },
  {
    image: Fire,
    title: "Burned",
    text: "Pending…",
  },
  {
    image: Circulating,
    title: "Circulating",
    text: "Pending…",
  },
];

const About = () => {
  return (
    <div id="about">
      <div className="container pb-20 border-b-2 border-white">
        <h2 className="text-5xl text-center">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between items-center mt-20">
          <div className="order-2 lg:order-1 lg:col-span-9">
            <p className="text-lg">
              Cosmic Ape Coin $CAC is the official token of the Cosmic Apes
              Universe. Our goal is to create a collaborative space for holders
              passionate about the burgeoning Solana NFT and Token market.
              Moreover, we are dedicated to creating a popular metaverse P2E
              game that utilizes our NFTs as characters and our token as
              currency. Our team and community are looking ahead to a future
              that takes the project beyond NFT status.
            </p>
            <p className="text-lg mt-4">
              We believe that Cosmic Ape Coin provides the perfect medium for a
              worldwide community to Shop, Game, and Interact on the Solana
              blockchain. Since its inception in late December 2021, the Cosmic
              Ape NFT has taken the Solana ecosystem by storm; we wish to take
              it to another level in 2022!
            </p>
          </div>
          <div className="lg:col-span-3 lg:order-2 mx-auto lg:mx-0">
            <img src={Image} alt="" className="lg:w-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-36 lg:gap-8 mt-40">
          {cardData.map((val, i) => (
            <div
              key={i}
              className="bg-blue text-center pt-14 px-4 pb-5 relative"
            >
              <img
                src={val.image}
                alt=""
                className="absolute top-0  left-2/4  -translate-x-2/4 -translate-y-3/4"
              />
              <h4 className="text-3xl mb-3">{val.title}</h4>
              <p className="text-2xl">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
