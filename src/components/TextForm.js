import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    /*
    * 'text' is a variable and 'setText is a function'.
    * whenever we want to update the 'text' variable : text = 'randomtaxtvale'  ::X:: this is wrong
    * we have to upadte the text only with the help of 'settext()' function 
    */

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked : "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }
    
    const handleLoClick = () =>{
        // console.log("Lowercase was clicked : "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearText = () =>{
        // console.log("Clear Text  was clicked : ");
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () =>{
        // console.log("Copy Text  was clicked : ");
        let txt = document.getElementById("myBox");
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    
    const handleExtraSpaces = () =>{
        // console.log("Remove Extra Text was clicked : ");
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value);
    }


    return (
    <>
    <div className='container' style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor : props.mode === 'dark' ? 'grey' : 'white' ,
                                                                                                                         color : props.mode === 'dark' ? 'white' : 'black'  }}>
         </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to UpperCase</button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>Covert to LowerCase</button>
        <button className="btn btn-primary mx-2 " onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 " onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 " onClick={handleExtraSpaces}>Remove Extra Text</button>
    </div>
    <div className='container my-3' style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text Summary</h2>
        <p> {text.trim().split(" ").length === 1 ? 0 : text.trim().split(" ").length } and {text.length} characters</p>
        <p> {0.008 * (text.trim().split(" ").length === 1 ? 0 : text.trim().split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox to preview it here... '}</p>
    </div>
    </>
  )
}
