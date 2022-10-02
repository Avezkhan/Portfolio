import React, { useContext } from "react";
import "./Works.css";
import OMG from "../../img/OMG.png";
import lionsheart from "../../img/lionsheart.png";
import ascendtis from "../../img/ascendtis.png";
import thinksense from "../../img/thinksense.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
          Ascendtis -  Ascendtis IT Solutions is an organization comprising of youthful and dynamic team 
          <br />that is enthusiastic to endeavor IT sector towards another path.
            <br />
            <br />
Lion's Heart - Teen Volunteers and Leaders is a non-profit that connects teen members
<br /> (ages 11-17) with age-appropriate volunteer opportunities in their area through a digital platform <br />
that also helps them track service hours, earn awards (including the President's 
<br /> Volunteer Service Award),interact with peers.
            <br />
            <br />
           OMG -  “WFH ALL IN WALL”: The World’s First Truly 5-In-1 Home Gym with an App
           <br /> Based Online WFH COACH.
            <br />
            <br />
            ThinkSense.ai - RoBoost provides a quick and easy way for users to automate 
            <br />their mundane tasks. Hundreds of user hours are spent on manual processes
            <br />such as writing standard emails, copying data from one format to another, 
            <br />filling in timesheets, filing expense reports, etc With RoBoost you can automate these process.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={OMG} alt="https://mrprandco.com/" />
          </div>
          <div className="w-secCircle">
            <img src={lionsheart} alt="https://lionsheartservice.org/lh2/" />
          </div>
          <div className="w-secCircle">
            <img src={ascendtis} alt="https://ascendtis.com/" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={thinksense} alt="https://thinksense.ai/" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="https://ascendtis.com/" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
