import React from "react";
import Styled from "styled-components";
import "./styles.css";

const Title = Styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const App = () => {
  return (
    <div>
      <Title>Hello world</Title>
    </div>
  );
};

export default App;
