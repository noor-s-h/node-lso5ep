import React, { useState } from "react";
import ReactDOM from "react-dom";
import Collapse from "react-css-collapse";
import styled from "styled-components";
import DynamicContent from "./DynamicContent";
const elements = ["1", "2", "3", "4"];

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 20px;
  color: #444;
  font-weight: bold;
  text-align: left;
  background-color: white;
  -webkit-appearance: none;
  border: 1px solid #2e444e;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 20px;
  color: #2e444e;
`;

const C = styled(Collapse)`
  transition: height 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

function App() {
  const [openItemIndex, setOpenItemIndex] = useState(undefined);

  function toggle(id) {
    setOpenItemIndex(openItemIndex === id ? undefined : id);
  }
  return (
    <List>
      {elements.map((x) => (
        <li key={x}>
          <Button
            type="button"
            onClick={() => toggle(x)}
          >{`Toggle ${x}`}</Button>
          <C isOpen={openItemIndex === x}>
            <Content>
              <DynamicContent />
            </Content>
          </C>
        </li>
      ))}
    </List>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
