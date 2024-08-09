import { CodeBlock } from "../CodeBlock/CodeBlock";
import "./SubBlock2.css";

export const SubBlock2 = ({ code }) => {
  return (
    <div>
      {" "}
      <div className="sub-block-2-container">
        <div className="sub-block-2">
          <div className="upper-sub-block-2">
            <div className="usb-dot red-dot"></div>
            <div className="usb-dot yellow-dot"></div>
            <div className="usb-dot green-dot"></div>
          </div>

          <div className="upper-sub-block-2-code">
            <CodeBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
