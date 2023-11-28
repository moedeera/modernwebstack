import React from "react";
import "./Block0.css";
import CodeEditor from "../CodeEditor/CodeEditor";

export const Block0 = () => {
  return (
    <div className="block0-container">
      <div className="block0-codeblock">
        <div className="codeblock-upper">
          <div className="cb-preview">Preview</div>
          <div className="cb-code">Code</div>
          <div className="cb-copy">Copy</div>
        </div>
        <div className="codeblock-code">
          {`import { Menu, Transition } from '@headlessui/react'`} <br />
          {`import { Fragment, useEffect, useRef, useState } from 'react'`}
          <br />
          {`import { ChevronDownIcon } from '@heroicons/react/20/solid'`}
          <br />
          <br />
          {`function Example() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <MyLink href="/profile">Profile</MyLink>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}`}
        </div>
      </div>
      <CodeEditor />
    </div>
  );
};
