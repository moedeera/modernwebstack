import { Link } from "react-router-dom";
import "./Block4.css";

export const Block4 = () => {
  return (
    <div className="block-4-container">
      <h3>Check out this Block</h3>
      <p>
        An amazing customizable block that has it's own CSS styling ready to go
        so you don't have to worry about setting up everything yourself. Copy
        and Paste and viola ! you have a professional sleek looking component
        just lie that.
      </p>
      <Link to={"/"} className="btn">
        Learn More
      </Link>
    </div>
  );
};
