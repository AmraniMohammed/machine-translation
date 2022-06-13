import './App.css';
// import { Header } from './Components/Header';
import { useState, useEffect } from 'react';
import { Loader } from './Components/Loader';


function App() {
  const [text, setText] = useState('');
  const [textTranslated, setTextTranslated] = useState(null);
  const [isloading, setIsloading] = useState(false);

  // useEffect(() => {
  //   fetch('/ai')
  //       .then(res => res.json())
  //       .then(data => setTextTranslated(data.translation))
  // }, )

  const callAPI = () => {
    setIsloading(true);
    fetch(`/ai/${text}`)
    .then(res => res.json())
    .then(data => {
      setIsloading(false)
      setTextTranslated(data.translation)
    })

  }

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const readHandler = (e) => {
    const fromText = document.querySelector(".from-text");
    const toText = document.querySelector(".to-text");
    let utterance;
    if(e.target.id === "from") {
      utterance = new SpeechSynthesisUtterance(fromText.value);
      utterance.lang = "en-US";
    } else {
      utterance = new SpeechSynthesisUtterance(toText.value);
      utterance.lang = "fr-FR";
    }
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <header class="header" id="header">
          <div class="loopText">
                <span class="txt inverted">- Translation Application -&nbsp;</span>
                <span class="txt inverted"> Translation Application -&nbsp;</span>  
                <span class="txt inverted"> Translation Application -&nbsp;</span>  
                <span class="txt inverted"> Translation Application -&nbsp;</span>  
                <span class="txt inverted"> Translation Application -&nbsp;</span>  
            </div>
      </header>
      <div class="container">
      
        <div class="wrapper">
        <ul class="controls">
            <li class="row from">
              <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
              <div class="icons">
              <i id="from" class="fas fa-volume-up" onClick={readHandler}></i>
              </div>
            </li>
            <li class="exchange"><i class="fas fa-exchange-alt"></i></li>
            <li class="row to">
              <select>
                <option value="en">French</option>
                <option value="ru">Russian</option>
              </select>
              <div class="icons">
                <i id="to" class="fas fa-volume-up" onClick={readHandler}></i>
              </div>
            </li>
          </ul>
          <div class="text-input">
            {/* <textarea spellcheck="false" class="from-text" placeholder="Enter text" onChange={changeHandler}>{text}</textarea> */}
            <textarea spellcheck="false" class="from-text" placeholder="Enter text" value={text} onChange={changeHandler} />
            <textarea spellcheck="false" readOnly disabled class="to-text" placeholder="Translation" value={isloading? "...." : textTranslated} />
          </div>
          
        </div>
        <button onClick={callAPI}>Translate Text</button>
    </div>
    </div>
  );
}

export default App;
