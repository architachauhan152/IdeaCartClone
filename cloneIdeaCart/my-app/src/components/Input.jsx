import { useState } from "react";
import styled from "styled-components";
import { ShowBooks } from "./ShowBooks";
export const Input = ({getText}) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
 
  return (
    <div style={{ display: "flex" }}>
      <input type="text" placeholder="Search" onChange={handleChange}></input>
      <button
        onClick={() => {
          getText(text)
        }}
      >
        Search
      </button>
    </div>
  );
};
