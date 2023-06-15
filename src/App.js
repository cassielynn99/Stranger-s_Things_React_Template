import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import RegisterUser from "./Register";
import { LoginUser } from "./Login";
import { PostRegisterUser, fetchPosts } from "./Fetch";
import React, { useEffect, useState } from "react";
const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

function App() {
  const [posts, setPosts] = useState([]);
  console.log('posts: ', posts);
  useEffect (() => {
    updatedPosts();
  }, [])

  async function updatedPosts () {
    const returnedPosts = await fetchPosts();
    setPosts (returnedPosts)
    console.log(returnedPosts);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <h1>Stranger's Things</h1>
        <div className="Navbar">
          <Link to="/" className='header'>Home</Link>
          <Link to="/posts" className='header'>Posts</Link>
          <Link to="/profile" className='header'>Profile</Link>
          <Link to="/login" className='header'>Log In</Link>
          <Link to="/register" className='header'>Register</Link>
        </div>
      </div>
      <Route path="/">
        <header></header>
      </Route>
      <Route exact path="/posts">
        {
          posts.map(post => <div key={post._id}>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
          </div>)
        }
      </Route>
      <Route exact path="/profile">
        <p>User profiles will go here</p>
      </Route>
      <Route exact path="/login">
        <LoginUser />
      </Route>
      <Route exact path="/register">
        <RegisterUser />
      </Route>
    </BrowserRouter>
  );
}

export default App;
