import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { RegisterUser } from "./Register";
import { LoginUser } from "./Login";
import { fetchPosts } from "./Fetch";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    updatedPosts();
  }, [])

  async function updatedPosts() {
    const returnedPosts = await fetchPosts();
    setPosts(returnedPosts);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Stranger's Things</h1>
        <div className="Navbar">
          <Link to="/" className='header'>Home</Link>
          <Link to="/post" className='header'>Posts</Link>
          <Link to="/profile" className='header'>Profile</Link>
          <Link to="/login" className='header'>Log In</Link>
          <Link to="/register" className='header'>Register</Link>
        </div>
      </div>
      <Route path="/">
        <header></header>
      </Route>
      <Route exact path="/post">
        {posts.map(post => {
          return (<div key={post._id}>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
          </div>)
        })
        }
      </Route>
      <Route exact path="/profile">
        <p>User profiles will go here</p>
      </Route>
      <Route exact path="/login">
        <LoginUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword} />
      </Route>
      <Route exact path="/register">
        <RegisterUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
