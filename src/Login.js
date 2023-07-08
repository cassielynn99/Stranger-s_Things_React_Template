import { login } from "./Fetch";

export function LoginUser({ username, setUsername, password, setPassword }) {
    console.log('login user', username, password)
    async function handleUserLogin(event) {
        console.log(event.currentTarget);
        event.preventDefault();
        await login (username, password)
        
    }
    return (
        <form onSubmit={handleUserLogin}>
            <h2>Welcome back! Let's log in:</h2>
            <label for='username'> Username: </label>
            <input type='username' placeholder='Enter username' name="username" onChange={e => setUsername(e.target.value)}></input>
            <label for='password'> Password: </label>
            <input type='password' placeholder='Enter password' name="password" onChange={e => setPassword(e.target.value)}></input>
            <button type="submit">Log In</button>
        </form>
    )
}