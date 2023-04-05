import React from 'react';
import { useState } from "react";


export default function TextForm(props) {
  const [text,setText]=useState("");
  
  const handleOnClick=()=> {
    let newTxt=text.toUpperCase();
    setText(newTxt);
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);
  }
  const handleLowClick =()=>{
    setText(text.toLowerCase());
  }
  
  return (
    <>
    <div className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
        <h1>{props.heading}</h1>
      <div className="input-group">
            <textarea className={`form-control " text-${props.mode==="light"?"dark":"light"} bg-${props.mode==="light"?"white":"black"}`} aria-label="With textarea" rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary my-3' onClick={handleOnClick}>Convert to Uppercase</button>
    <button className='btn btn-primary my-3 mx-3' onClick={handleLowClick}>Convert to Lowercase</button>
    
    </div>
    <div className={`container bg-${props.mode} text-${props.mode==="light"?"dark":"light"} ` }>
      <h1>Text Summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((e)=>{ return e.length!=0 }).length} minutes to read text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textarea to preview it"}</p>
    </div>
    </>
  )
}
