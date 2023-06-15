import React, { useEffect, useState } from "react";

const COHORT_NAME = '2303-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`


// async function PostRegisterUser(username, password) 
export const PostRegisterUser = async (token, username, password) => {
    console.log('hello');
    try {
        const response = await fetch(
            `${BASE_URL}/register`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        });
        const result = await response.json();
        // You can log ▲▲▲ the result
        // here ▼▼▼ to view the json object before returning it
        console.log(result);
        return result;
    } catch (err) {
        console.error(err);
    }
}


export const fetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        console.log('response: ', response);
        const data = await response.json();
        console.log('data: ', data);
        return data.data.posts;
        //setPosts(data.data.posts);
    } catch (error) {

    }
}
