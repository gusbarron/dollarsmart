import "./about.css";
import { useState } from "react";
import { getDefaultNormalizer } from "@testing-library/react";

const About = () => {
  const [visible, setVisible] = useState(false);

  const showEmail = () => {
    setVisible(true);
  };

  const hideEmail = () => {
    setVisible(false);
  };

  const getContent = () => {
    if (visible) {
      return (
        <div>
          <h6>gustavo.h.barron@gmail.com</h6>;
          <button onClick={hideEmail} className="btn btn-info">
            Hide Info
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>click the button below</p>
          <button onClick={showEmail} className="btn btn-primary">
            Show Info
          </button>
        </div>
      );
    }
  };

  return (
    <div className="about-page">
      <h1>Gustavo Barron</h1>
      {getContent()}
    </div>
  );
};

export default About;
