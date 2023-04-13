import React from "react";
import InputBox from "../Components/InputBox";
import InputLanguageSelector from "../Components/InputLanguageSelector";
import OutputLanguageSelector from "../Components/OutputLanguageSelector";
import OutputBox from "../Components/OutputBox";
import axios from "axios";
import { display } from "../Components/OutputBox";
import UploadFile from "../Components/UploadFile";
import "./HomePage.css";
import { useState } from "react";
import {StateProvider} from "../Components/State"

function HomePage() {

  const handleInputBox = () => {};
  const handleFileUpload = () => {};
  const convert = async () => {
    const data = {
      input_language: localStorage.getItem("input_lang"),
      target_language: localStorage.getItem("output_lang"),
      code: localStorage.getItem("input_lang_box"),
    };
    await axios
      .post("http://127.0.0.1:5000/converted_code", data)
      .then((res) => {
        localStorage.setItem("output_language_box", res.data.result);
        display(res.data.result);
        // <OutputBox code={localStorage.getItem("output_language_box")} />;
      });
  };
  return (
    <div className=" pt-10  ">
      <div class="breaker  "></div>
      <div className="upper-section  float-left px-9 m-9  pr-5  ">
        <div className="nav-bar  ">
          <ul className="float-right ml-[190px] mt-[20px] text-white bg-transparent bg-white text-orange-600 font-semibold hover:text-orange-600  border border-white hover:border-transparent rounded ">
            <li>
              <a
                className="bg-transparent bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white "
                onClick={() => {
                  handleInputBox();
                }}
              >
                Text box
              </a>
            </li>
            <li id="file-upload">
              <a
                className="bg-transparent  bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white  squared "
                onClick={() => {
                  handleFileUpload();
                }}
              >
                File upload
              </a>
            </li>
          </ul>
        </div>
        <div className="language-selector ">
          <div className="input-lang-selector ml-[190px]">
            <a className="px-4 py-2 ml-10  text-xl text-white rounded-full">
              Select Input Language
            </a>
            <InputLanguageSelector />
          </div>
          <div className="output-lang-selector mr-[230px]">
            <a className="px-4 py-2 text-xl  text-white rounded-full">
              Select Output Language
            </a>
            <OutputLanguageSelector />
          </div>
        </div>
        {/* <div class="breaker"></div> */}
      </div>
      <StateProvider>
      <UploadFile />
      <div className="lower-section px-9 m-9 flex flex-row ml-24 ">
        <div>
          <InputBox/>
        </div>  
        <div>
        <button
        onClick={() => {
          convert();
        }}
        className="bg-transparent hover:bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white hover:border-transparent rounded mt-36 ml-52 mr-24 "
      >
        Convert
      </button>
        </div>
        <div className="lower-section px-9 m-9 mt-[-65px] flex flex-row ">
          <OutputBox />
        </div>
      </div>
      </StateProvider>

      
    </div>
  );
}

export default HomePage;
