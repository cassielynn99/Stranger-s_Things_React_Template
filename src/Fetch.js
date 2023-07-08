// import React, { useEffect, useState } from "react";

const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


export const PostRegisterUser = async (username, password, token) => {
  console.log('hello');
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
          token: `${token}`
        }
      })
    });
    const result = await response.json();
    // You can log ▲▲▲ the result
    // here ▼▼▼ to view the json object before returning it
    console.log(username, password);
    console.log(result);
    localStorage.token = result.data.token;
    // localStorage.username=result.data.username;
    // localStorage.password=result.data.password;
    return result;
  } catch (err) {
    console.error(err);
  }
}

export const login = async (username, password) => {
  try {
    console.log(username, password)
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`
        }
      })
    });
    const result = await response.json();
    console.log(result);
    localStorage.token = result.data.token;
    return result
  } catch (err) {
    console.error(err);
    console.log();
  }
}

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    console.log('response: ', response);
    const data = await response.json();
    console.log('data: ', data);
    return data.data.posts;
  } catch (error) {

  }
}

export const Posts = async (title, description, price, location) => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const updatePost = async (postId, title, description, price, location) => {
  console.log("readable", postId)
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        post: {
          title: `${title}`,
          description: `${description}`,
          price: `${price}`,
          location: `${location}`,
          willDeliver: true
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const deletePost = async (postId) => {
  console.log("this is being read", postId)
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const postMessage = async (postId) => {
  console.log("posting now...", postId)
  try {
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({
        message: {
          content: "Do you still have this?  Would you take $10 less?"
        }
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}