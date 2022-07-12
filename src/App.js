import io from "socket.io-client";
import { useRef, useEffect } from "react"
import './App.css';

function App() {

  // const SERVER_URL = "https://test213121.herokuapp.com";
  // http://localhost:8081";
  // "https://alex-phone-backend.herokuapp.com"
  // const socketRef = useRef(null);

  useEffect(() => {
      // socketRef.current = io(SERVER_URL);

      // socketRef.current.on("server:start", (data) => {
      //   console.log("server:start ---->", data)
      // })    
      
      // socketRef.current.on("users", (users) => {
      //   console.log("users --->", users);
      // })
  },[])

  return (
    <div className="App">
      {process.env.REACT_APP_SERVER_URL}
    </div>
  );
}

export default App;
