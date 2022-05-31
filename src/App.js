import './App.css';
import { TextArea } from './Components/TextArea';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [textTranslated, setTextTranslated] = useState('');

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const clickHandler = (e) => {
    console.log('fffjj')
    setTextTranslated('Trnslation done');
  }

  return (
    <div className="App">
      <div class="container">
        <div class="wrapper">
          <div class="text-input">
            {/* <textarea spellcheck="false" class="from-text" placeholder="Enter text" onChange={changeHandler}>{text}</textarea> */}
            <textarea spellcheck="false" class="from-text" placeholder="Enter text" value={text} onChange={changeHandler} />
            <textarea spellcheck="false" readOnly disabled class="to-text" placeholder="Translation" value={textTranslated} />
          </div>
          <ul class="controls">
            <li class="row from">
              <select>
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </li>
            <li class="exchange"><i class="fas fa-exchange-alt"></i></li>
            <li class="row to">
              <select>
                <option value="en">French</option>
                <option value="ru">Russian</option>
              </select>
            </li>
          </ul>
        </div>
        <button onClick={clickHandler}>Translate Text</button>
    </div>
    </div>
  );
}

export default App;
