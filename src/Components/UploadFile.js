import axios from "axios";
import { useRef, useState } from "react";
import { StateContext } from "./State";

function UploadFile(props) {

  let inputRef = useRef();
  let file = null;
  const formData = new FormData();

  const upload = async () => {
    document.getElementById("warn").innerHTML = "uploading....";
    await axios.post("http://127.0.0.1:5000/upload", formData).then((res) => {
      console.log(res);
      document.getElementById("warn").innerHTML = "uploaded succesfully";
    });
  };
  const handleFile = (e) => {
    file = e.target.files[0];
    formData.append("input_language", localStorage.getItem("input_lang"));
    formData.append("target_language", localStorage.getItem("output_lang"));
    formData.append("file", file);
  };
  return (
    <div className="ml-[135px]">
      <StateContext.Consumer>
      {({ disableTextbox }) => (
      <input 
        type="file"
        id="input_file"
        className="bg-transparent bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white hover:border-transparent rounded mt-5 "
        onChange={handleFile}
        ref={inputRef}
        onClick={disableTextbox}
        required
      ></input>)}
      </StateContext.Consumer>
      <button
        className="bg-transparent bg-white text-orange-600 font-semibold hover:text-orange-600 py-2 px-4 border border-white hover:border-transparent rounded mt-6 ml-4 pt-2  pl-3 text-justify"
        onClick={() => {
          upload();
        }}
      >
        Upload
      </button>
      
      <p
        className="mt-[32px] mr-[850px] "
        id="warn"
        style={{ float: "right", color: "orange" }}
      ></p>
    </div>
  );
}

export default UploadFile;
