import React from 'react';
import '../style.css';
import Footer from '../components/Footer';
import { FaBaseballBall } from "@react-icons/all-files/fa/FaBaseballBall";
import { FaBasketballBall } from "@react-icons/all-files/fa/FaBasketballBall";
import { FaFootballBall } from "@react-icons/all-files/fa/FaFootballBall";
import { FaRunning } from "@react-icons/all-files/fa/FaRunning";
// import { FaSoccerBall} from "@react-icons/all-files/fa/FaSoccerBall"
import { GiSoccerBall, GiTennisBall, GiFishing } from "react-icons/gi";
import ParkLogo from "../images/parks-logo.png";

function ParksCollection() {
  return (
    <div>
      <h1 className="parksHeader"><img src={ParkLogo} /></h1>

      <div className="spaceDiv"></div>
      <div className="parksCollectionPage">
        <div>
          <div className="parkCard">
            <h1 className="parkCardHeader">53 Acre Park</h1>
            <GiSoccerBall className="parkIcon" />
            <FaBaseballBall className="parkIcon"/>
            <FaBasketballBall className="parkIcon"/>
            <FaFootballBall className="parkIcon"/>
            <FaRunning className="parkIcon"/>
            <GiTennisBall className="parkIcon"/>


          </div>
          <div className="parkCard">
            <h1 className="parkCardHeader">Steward Street</h1>
            <GiFishing className="parkIcon" />
          </div>
          <div className="parkCard">
            <h1 className="parkCardHeader">Spell Field</h1>
            <FaBaseballBall className="parkIcon"/>
            <GiTennisBall className="parkIcon"/>
          </div>
          <div className="parkCard">
            <h1 className="parkCardHeader">Loftis Field</h1>
            <FaBaseballBall className="parkIcon"/>
            <GiTennisBall className="parkIcon"/>
          </div>

        </div>
      <div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ParksCollection
