import { PostRegisterUser } from "./Fetch";

export function RegisterUser({username, setUsername, password, setPassword}) {
    async function handleUserRegistration(event) {
        console.log(event.currentTarget);
        event.preventDefault();
        await PostRegisterUser(username, password)
        // if (password === confirmPassword) {
        //     console.log("account created");
        // } else {
        //     console.log("passwords do not match");
        // }
        console.log(localStorage.token);
    }

    return (
        <form onSubmit={handleUserRegistration}>
            <h2>Welcome! Let's set up an account:</h2>
            <label for='username'> Create username: </label>
            <input type='username' placeholder='Enter username' name="username" minLength={8} onChange={e => setUsername(e.target.value)}></input>
            <label for='password'> Create password: </label>
            <input type='password' placeholder='Enter password' name="password" minLength={8} onChange={e => setPassword(e.target.value)}></input>
            <label for='confirm password'> Confirm password: </label>
            <input type='password' placeholder='Confirm password' name='confirmPassword' minLength={8}></input>
            <button type="submit" onClick={handleUserRegistration}>Register Me</button>
        </form>
    )     

}