import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
  return (
    <Work
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Movie>
        <h2>Athlete</h2>
        <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="the racer girl" />
        </Link>
      </Movie>
      <Movie>
        <h2>goodtimes</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="good times couple" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    height: 70vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default OurWork;
