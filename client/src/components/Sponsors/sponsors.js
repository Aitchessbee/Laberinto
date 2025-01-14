import "./sponsors.css";
import Offermenu from "../OfferMenu/Offermenu";
const Sponsors = () => {
  const arrayOfTeams = [
    {
      teamName: "Team Name1",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name2",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name3",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name4",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name5",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name6",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name7",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name8",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
    {
      teamName: "Team Name9",
      teamLevel: "level",
      teamMobNumber: "Contact:9876543219",
      teamEmail: "helpme@thapar.edu",
    },
  ];
  const accordionData = [
    {
      title: "Team Name0",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name1",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name2",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name3",
      question: "why ?",
      content: `points offered :29`,
    },
    {
      title: "Team Name4",
      question: "why ?",
      content: `points offered :29`,
    },
  ];
  return (
    <div className="wrapper" id="sponsors">
      <br />
      <br />
      <div className="accordion">
        <h1 className="title">received offers</h1>
        {accordionData.map(({ title, question, content }) => (
          <Offermenu title={title} question={question} content={content} />
        ))}
      </div>
      <h1 id="sponsors" className="title">
        <b>TEAMS</b>
      </h1>
      {arrayOfTeams.map((team) => (
        <>
          <div
            className="col-sponsor"
            ontouchstart="this.classList.toggle('hover');"
          >
            <div
              className="container"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div
                className="front"
                style={
                  {
                    // backgroundImage:
                    //   "url(https://res.cloudinary.com/dpphmkop0/image/upload/v1628444822/Sponsors/grid_1_sp-WEB_01_hy9t1k.png)",
                  }
                }
              >
                <p className="title-front">{team.teamName}</p>
                <p className="level">{team.teamLevel}</p>
              </div>
              <div className="back">
                <div className="inner">
                  <p className="level">
                    {team.teamMobNumber}
                    <br />
                    {team.teamEmail}
                  </p>
                  <form action="" method="post">
                    <input type="number" placeholder="Place a bid" />
                    <button className="btn" type="submit">
                      Submit Bid
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}

      <div
        className="col-sponsor"
        ontouchstart="this.classList.toggle('hover');"
      >
        <div className="container">
          <div
            className="front"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dpphmkop0/image/upload/v1628444824/Sponsors/grid-WEB-1_02_nsgeea.png)",
            }}
          ></div>
          <div className="back">
            <div className="inner">
              <p className="title">Coding Ninjas</p>
              <span>Associate Sponsor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sponsors;
