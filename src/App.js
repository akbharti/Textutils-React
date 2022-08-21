import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  
  const [mode, setMode]= useState('light'); // wheater dark mode is enable or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg  : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      showAlert("Dark Mode Elabled", "success")
      document.body.style.background = '#042743';
      document.body.style.color = 'white';
      document.title = 'Textutils - Dark Mode';
      // setInterval( ()=> {
      // document.title = 'Textutils is Amazing ';
      // },1200)
      // setInterval( ()=> {
      //   document.title = 'Install Textutils Now';
      // },1100)
    }
    else{
      setMode('light');
      showAlert("Light mode enabled", "success");
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      document.title = 'Textutils - Light Mode';
    }
  }

  return (
   <>
    {/* <Navbar /> */}
    {/* <Navbar title="TextUtils" aboutText="About TestUtils" /> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes>
        <Route exact path="/" element={<TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />} />
        <Route exact path="about" element={<About />} />
      </Routes>  */}
      <TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </div>
   </>
  );
}

export default App;
