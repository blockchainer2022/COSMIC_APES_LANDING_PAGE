import Team1 from "../assets/monkey1.png";
import Team2 from "../assets/monkey2.png";
import Team3 from "../assets/monkey3.png";
import Team4 from "../assets/monkey4.png";

const teamData = [
  {
    image: Team1,
    name: "Curious George",
    text: "Co-Founder Management",
    // text2: "(Management)",
  },
  {
    image: Team2,
    name: "Harambe ",
    text: "Co - Founder Tech",
    // text2: "(tech)",
  },
  {
    image: Team3,
    name: "Bubbles ",
    text: "Co- Founder Art",
    text2: "(Art)",
  },
  {
    image: Team4,
    name: "Donkey Kong",
    text: "Community Outreach",
    text2: "(Art)",
  },
];

const Team = () => {
  return (
    <div className="py-20" id="team">
      <div className="container pb-20 border-b-2 border-white">
        <h2 className="text-5xl text-center">Team Member</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {teamData.map((val, i) => (
            <div key={i} className="text-center">
              <img src={val.image} alt="" className="w-full" />
              <h6 className="mt-3 text-xl mb-1">{val.name}</h6>
              <p>{val.text}</p>
              <p>{val.text2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
