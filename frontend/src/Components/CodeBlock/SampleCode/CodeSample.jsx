import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CodeSample = ({ info }) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([
    { id: 1, name: "John" },
    { id: 2, name: "Steve" },
    { id: 3, name: "Kevin" },
  ]);

  const function1 = () => {
    console.log("hello world");
  };

  useEffect(() => {
    console.log("component called");
  }, []);

  const nodes = [
    {
      prop: "div",
      overflow: false,
      attributes: [{ type: "className", value: "parent" }],
    },
    {
      prop: "div",
      overflow: false,
      attributes: [
        { type: "className", value: `child` },
        { type: "onClick", value: `{function1}` },
      ],
    },
  ];

  return (
    <div className="parent">
      <div className="child" onClick={function1}>
        <h1>Count is at {count}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to={"/"}>Click Here</Link>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment Count
        </button>
        <div className="grand-child">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </h1>
          {data.map((data) => (
            <div key={data.id}>
              {" "}
              <p>{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
