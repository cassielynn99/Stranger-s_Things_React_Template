import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { RegisterUser } from "./Register";
import { LoginUser } from "./Login";
import { fetchPosts, deletePost, updatePost } from "./Fetch";
import { CreatePosts } from "./Posts";
import { Message } from "./Messages";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  // const [postId, setPostId] = useState(null);
  const [content, setContent] = useState("");
  // const willDeliver = false;

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
          <Link to="/posts" className='header'>Posts</Link>
          <Link to="/profile" className='header'>Profile</Link>
          <Link to="/login" className='header'>Log In</Link>
          <Link to="/register" className='header'>Register</Link>
        </div>
      </div>
      <Route exact path="/">
        <h3>Welcome to Stranger's Things! This is a site designated for selling unwanted things. Feel free to look 
          around, sell unwanted items, or buy a hidden treasure from someone else!
        </h3>
      </Route>
      <Route exact path="/posts">
        <CreatePosts
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          location={location}
          setLocation={setLocation}
        />

        {posts.map(post => {
          console.log(post)
          return (<div key={post._id}>
            <h3>{post.title}</h3>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.location}</div>
            <div>{post.willDeliver}</div>
            <button type='button' className='editButton'
            onClick={() => updatePost(post._id)}>Edit</button>
            <button type='button' className='deleteButton'
            onClick={() => deletePost(post._id)}>Delete</button>
          </div>)
        })
        }
      </Route>
      <Route exact path="/profile">
        <Message
        content = {content}
        setContent = {setContent}
        />
      </Route>
      <Route exact path="/login">
        <LoginUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      </Route>
      <Route exact path="/register">
        <RegisterUser
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          token={token}
          setToken={setToken}
        />
      </Route>
    </BrowserRouter>
  );
}

export default App;