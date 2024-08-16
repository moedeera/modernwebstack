import "./BlockA.css";

const BlockA = () => {
  return (
    <div className="block-a-container">
      <div className="block-a-text">
        <small>Our Philosophy</small>
        <h3>
          Simplicity & <span>Convenience</span>{" "}
        </h3>
        <div>
          {" "}
          <p>
            Overwhelmed by all the UI Libraries nowadays? Already using one for
            your project. No worries,
            <span>
              {" "}
              we have templates for everything including vanilla React
            </span>
            Have the ability to create or customize your ideal website with ease
          </p>
          <br />
          <p>
            {" "}
            Choose the aesthetic you are looking for and simply select the
            specific UI framework you want to use and viola! No need to download
            or install any package.
          </p>
        </div>
      </div>
      <div className="block-a-image">Block A Image</div>
    </div>
  );
};

export default BlockA;
