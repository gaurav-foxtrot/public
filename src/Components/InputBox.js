import React from "react";
import { useState } from "react";
import { StateContext } from './State';

function InputBox(props) {

  const handler = () => {
    const input_lang_box = document.getElementById("input_language_box");
    localStorage.setItem("input_lang_box", input_lang_box.value);
    console.log(input_lang_box.value);
    // console.log("dfsgsadfgsdf");
  };
  return (
    <div class="inputbox">
      <StateContext.Consumer>
      {({ isDisabled }) => (
      <textarea
        id="input_language_box"
        placeholder="Input Code"
        className=" px-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-96 h-96 "
        disabled={isDisabled}
        onInput={() => {
          handler();
        }}
      />)}
      </StateContext.Consumer>
      {/* {localStorage.setItem(
        "input_lang",
        document.getElementById("input_language_box").value
      )} */}
    </div>
  );
}

export default InputBox;
