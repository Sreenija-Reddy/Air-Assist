import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/') // Ensure correct backend URL
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id='div-id'>
      <h1>Welcome to Air Assist!</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
