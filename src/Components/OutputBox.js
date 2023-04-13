import React from "react";
import { outputCode } from "./Variables";

export var display = (e) => {
  document.getElementById("output_language_box").value = e;
};

function OutputBox() {
  return (
    <div class="">
      <textarea
        id="output_language_box"
        placeholder="Output Code"
        className="px-3  placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-96 h-96 mt-16"
      />
    </div>
  );
}

export default OutputBox;
