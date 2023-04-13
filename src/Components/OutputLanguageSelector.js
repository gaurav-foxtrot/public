import React from "react";

function OutputLanguageSelector() {
  const setLang = (e) => {
    console.log(e.target.value);

    localStorage.setItem("output_lang", e.target.value);
  };

  return (
    <div>
      <div className="relative w-full lg:max-w-sm  ">
        <div className=" pt-5 ml-14">
          <select
            onChange={(e) => {
              console.log("Inside lang input");
              setLang(e);
            }}
            className="      text-gray-500 bg-white border rounded shadow-sm w-32 h-16 appearance-none focus:border-orange-600 text-center"
          >
            {localStorage.setItem("output_lang", "java8")}
            <option value="java8">JAVA 8</option>
            <option value="java11">JAVA 11</option>
            <option value="python3">Python 3</option>
            <option value="python2.8">Python 2.8</option>
            <option value="c">C</option>
            <option value="c++">C++</option>
            <option value="ruby">Ruby</option>
            <option value="c#">C#</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default OutputLanguageSelector;
