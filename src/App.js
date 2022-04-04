import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';

import { ChatFeed, LoginForm } from './components';

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
      height="100vh"
      projectID = 'f3ba093a-3c53-4507-88cc-0d14a765e585'
      userName={localStorage.getItem('userName')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;