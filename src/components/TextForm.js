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
        // txt.select();
        navigator.clipboard.writeText(txt.value);
        // document.getSelection().removeAllRanges();    // diSelect all the copied text in the textarea
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
    <div className='container mb-2' style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-4">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor : props.mode === 'dark' ? '#13466e' : 'white' ,
                                                                                                                         color : props.mode === 'dark' ? 'white' : 'black'  }}>
         </textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Covert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleClearText}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleLoClick}>Covert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1 " onClick={handleExtraSpaces}>Remove Extra Text</button>
    </div>
    <div className='container my-3' style={{color :  props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your text Summary</h2>
        <p> {text.trim().split(/\s+/).filter((element)=>{return element.length !== 0}).length  } word and {text.length} characters</p>
        <p> {0.008 * (text.trim().split(" ").filter((element)=>{return element.length !== 0}).length    )} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
    </div>
    </>
  )
}
