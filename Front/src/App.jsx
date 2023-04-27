import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import recordinput from './recordinput';

function App() {
  const [data, setData] = useState([])
  useEffect(()=> {
    fetch('http://localhost:8081/info')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <div>
        <center>
          <h1>INPUT</h1>
          <label>First Name </label>
          <input type={"text"} /><br />
          <label>Last Name </label>
          <input type={"text"} /> <br />
          <input type={"button"} value="SUBMIT" />
      </center>
    </div>
    <div className='container'>      
    <table >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, i) => (
          <tr key={i}>
            <td>{d.First_Name}</td>
            <td>{d.Last_Name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  </div>  
  )
}

export default App