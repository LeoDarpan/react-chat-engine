import { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        //Username  + password => ChatEnginer -> give Messages
        //works out? -> Login Successful
        //Not? -> try with new username... 

        const authObject = {
            'Project-ID': 'f3ba093a-3c53-4507-88cc-0d14a765e585', 
            'User-Name': username, 
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError('Oops, incorrect username or password!');
        }
    }
  return (
      <div className="wrapper">
          <div className="form">
              <h1 className="title">Chat Application</h1>
              <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    className="input"
                    placeholder="Username"
                    required
                  />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div align="center">
                      <button className="button" type="submit">
                          <span>Start Chat</span>
                      </button>
                  </div>
                  <h2 className="error">{error}</h2>
              </form>
          </div>
      </div>
  )
}

export default LoginForm;