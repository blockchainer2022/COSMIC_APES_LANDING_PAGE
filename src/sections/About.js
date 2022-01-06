import Image from "../assets/about-right.png";
import Supply from "../assets/supply.png";
import Fire from "../assets/fire.png";
import Circulating from "../assets/circulating.png";

const cardData = [
  {
    image: Supply,
    title: "Orignal supply",
    text: "7,000,0000,000",
  },
  {
    image: Fire,
    title: "Burned",
    text: "4,200,0000,000",
  },
  {
    image: Circulating,
    title: "Circulating",
    text: "2,800,0000,000",
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
              Limited: 1,500 unique, fruity, algorithmically generated Bananas -
              stored with proof of ownership stored on the Solana blockchain.
            </p>
            <p className="text-lg mt-4">
              We believe in Solana and we believe in NFTs. In the future, we'll
              look at this period as a defining moment in culture and
              technology. History is being made, and we want to be part of it in
              a meaningful way.
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
