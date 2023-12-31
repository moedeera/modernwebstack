const codeSample = `
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { test } from "react-tester";

export const CodeSample = ({ data, info }) => {
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
`;
const imports = [
  {
    from: "react",
    imports: ["useState", "useEffect"],
  },
  { from: "react-router-dom", imports: ["Link"] },
];

const jsxRepresentation2 = {
  type: "div",
  props: {
    className: "parent",
    id: "parent1-id",
    children: [
      {
        type: "h1",
        props: {
          children: "title",
        },
      },
      {
        type: "p",
        props: {
          onClick: "function1",
          children: "Paragraph",
        },
      },
      {
        type: "Link", // Assuming 'Link' is a component
        props: {
          to: "/",
          className: "btn",
          children: "click",
        },
      },
      {
        type: "div",
        props: {
          children: `Hello {variable.name}`,
        },
      },
      {
        type: `React.Fragment`, // React.Fragment or just Fragment
        props: {
          children: `variable.grades.map((mark) => (
            <div key={mark}>{mark}</div>
          ))`,
        },
      },
    ],
  },
};

const jsxRepresentation1 = {
  type: "div",
  props: {
    className: "parent",
    children: [
      {
        type: "div",
        props: {
          className: "child",
          onClick: "function1",
          children: [
            {
              type: "h1",
              props: {
                children: "Count is at {count}",
              },
            },
            {
              type: "p",
              props: {
                children:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
              },
            },
            {
              type: "Link", // Assuming 'Link' is a component
              props: {
                to: "/",
                children: "Click Here",
              },
            },
            {
              type: "button",
              props: {
                onClick: "() => {setCount(count + 1);}",
                children: "Increment Count",
              },
            },
            {
              type: "div",
              props: {
                className: "grand-child",
                children: [
                  {
                    type: "h1",
                    props: {
                      children:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      children: ` data.map((data) => (
                        <div key={data.id}>
                          {" "}
                          <p>{data.name}</p>
                        </div>
                      ))`,
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
};

export { codeSample as codeSample, jsxRepresentation1 as codeSample2 };
