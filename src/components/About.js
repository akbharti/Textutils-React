// import React, { useState } from 'react'

export default function About(props) {

//   const  [myStyle, setMyStyle] = useState({   // here 'myStyle' is an Object
//     color : 'black',
//     backgroundColor : 'white' 
//   });
  
//   const [btnText, setBtnText] = useState("Enable Dark Mode");
//  let  toggleStyle = () => {
//     if(myStyle.color === 'black'){
//         setMyStyle({
//             color : 'white',
//             backgroundColor : 'black',
//             border : '1px solid white' 
//         })
//         setBtnText("Enable Light Mode");
//     }
//     else{
//         setMyStyle({
//             color : 'black',
//             backgroundColor : 'white' 
//         })
//     setBtnText("Enable Dark Mode");
//     }
//   }

    let myStyle = {
                  color  : props.mode  === 'dark' ? 'white' : '#042743',
        backgroundColor  : props.mode  === 'dark' ? 'rgb(36,74,104)' : 'white',
                //  border  : '1px solid',
            // borderColor  : props.mode  === 'dark' ? 'balck' : 'balck'     
    }

  return (
    <div className='container' style={{ color  : props.mode  === 'dark' ? 'white' : '#042743'}}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>  Analyze Your text </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count and much more.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <b> Free to Use </b>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils is a free  character counter tool that provides instant character count & word count statistics for a given text. textUtils reports the number of words and characters. Thus it is suitable for writning text word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <b>Browser Compatible</b>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                This word counter software works in any web browser such as Chrome, Forefox, Internet Explorer, Safari, Opera. It suits to count character in facebook, blog, book, excel document, pdf document, essays etc. 
            </div>
            </div>
        </div>
      </div>
      {/* <div className="container my-3">
       <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
      </div> */}
    </div>
  )
}
