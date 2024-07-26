import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState('');
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  
  const calculateResult = () => { // Вычислить результат
     try {
        const newResult = eval(input);
        if (newResult === Infinity || isNaN(newResult)) { // Проверка деления на ноль или другие ошибки
            throw new Error('Division by zero or invalid calculation');
        }
        setResult(newResult);
        setHistory([...history, { input, result: newResult }]);
      } catch (error) {
        setResult('Error: ' + error.message);
      };
   };
  
   const useResult = () => { // Использовать результат
      setInput(result);
   };
   const clearResult = () => { // Очистить инпут и результат
      setInput('');
      setResult('');
   };
   const clearHistory = () => { // Очистить историю
      setHistory([]);
   };
  
   return (
    <div className="calculatorBody">
      <h3>SIMPLE CALCULATOR</h3>
      <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <div>Result: <span className="result">{result}</span></div>
      <div className="button-container">
        <button className="button" onClick={calculateResult}>Calculate</button>
        <button className="button" onClick={useResult}>Use Result</button>
        <button className="button" onClick={clearResult}>Clear Result</button>
      </div>
      
      <div>History:</div>
        <ul className="history">
          {history.map((entry, index) => (
            <li key={index}>
              {entry.input} = {entry.result}
            </li>
          ))}
        </ul>
      <button className="button" onClick={clearHistory}>Clear History</button>
    </div>
  );
}

export default App;
