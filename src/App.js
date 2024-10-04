import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './components/Message';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:5000/api/message')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching the message:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Full Stack React & Node Application</h1>
      <Message message={message} />
    </div>
  );
};

export default App;
