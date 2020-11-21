import React from "react";
import "./InitialView.css";

const InitialView = ({ setAgreement }) => {
  return (
    <div className="initialView">
      <img
        className="initialView__image"
        src="https://officesnapshots.com/wp-content/uploads/2020/03/youtube-headquarters-lobby-san-bruno-8.jpg"
        alt=""
      />
      <h1>YouTube FrontEnd Clone</h1>
      <hr className="init__hr" />
      <h3>
        This is a demo project, coded by Franck Binde, FullStack Developer
      </h3>
      <p className="initialView__text">
        The project uses hard-coded data. The emphasis is on the general layout.
      </p>
      <button className="intialView__btn1" onClick={(e) => setAgreement(true)}>
        Take a tour
      </button>
      <button
        className="initialView__btn2"
        onClick={() =>
          window.open("https://www.linkedin.com/in/franckbinde/", "_blank")
        }
      >
        Visit my profile
      </button>
    </div>
  );
};

export default InitialView;
