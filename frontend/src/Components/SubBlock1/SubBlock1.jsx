import "./SubBlock1.css";

import gear from "./gear.png";
import down from "./down.png";

export const SubBlock1 = () => {
  return (
    <div className="sub-block-1-container">
      <div className="sub-block-1-jsx">
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            JSX
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="sub-block-1-css">
        {" "}
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            CSS
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="sub-block-1-files">
        {" "}
        <div className="sb1-upper-portion">
          <div className="sb1-label">
            <img src={gear} alt="" srcset="" />
            JS
          </div>
          <div className="sb1-icon">
            <img src={down} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="sub-block-1-image"></div>
    </div>
  );
};
