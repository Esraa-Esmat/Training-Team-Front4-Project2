// Import the image at the top of your file
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { MessageBox, ChatList, Input } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import logo from '../../assest/images/Logo Text.svg'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle sending a new message
  const sendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessage = {
      position: 'right',
      type: 'text',
      text: inputValue,
      date: new Date(),
    };
    setInputValue('');

    setMessages([...messages, newMessage]);

  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
      console.log(inputValue);
    }
  };
  return (
    <Container className='my-5 py-5 bg-light'>
      <div className='container'>
        <ChatList
          className='chat-list'
          dataSource={[
            {
              avatar: logo,
              alt: 'User Avatar',
              // title: 'Tax Hub',
              title: 'Hello, What is your services?',
              // subtitle: 'Hello, how can I help you?',
              date: new Date(),
              unread: 0,
            },
            
          ]}
        />

        {/* Render the messages */}
        {messages.map((message, index) => (
          <MessageBox key={index} {...message} />
        ))}

        {/* Input field for sending a message */}
        <Input
          className='mt-5 '
          placeholder='Type a message...'
          // multiline={true}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          rightButtons={<button onClick={sendMessage}>Send</button>}
        />
      </div>

      <div className="text-end mt-5 ">
                  <Link to="/addnewserviesuser" className="btn btn-danger mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>Cancel</Link>
                  <Link to="/addnewserviesuser" className="btn btn-primary mx-2 px-5 text-decoration-none" style={{ borderRadius: "35px", fontSize: "20px" }}>Save</Link>
                </div>
    </Container>
  );
};

export default Chat;
