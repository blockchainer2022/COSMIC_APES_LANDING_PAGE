import Header from "./components/header";
import { Banner, About, Team, Buy, Roadmap } from "./sections";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Team />
      <Buy />
      <Roadmap />
    </div>
  );
};

export default Home;
