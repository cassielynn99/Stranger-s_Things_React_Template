import { PostRegisterUser } from "./Fetch";

export function RegisterUser({username, setUsername, password, setPassword, token}) {
    async function handleUserRegistration(event) {
        event.preventDefault();
        await PostRegisterUser(username, password, token)
        console.log(token)
        return (token)
    }

    return (
        <form onSubmit={handleUserRegistration}>
            <h2>Welcome! Let's set up an account:</h2>
            <label for='username'>Create username: </label>
            <input type='username' placeholder='Enter username' name="username" minLength={8} onChange={e => setUsername(e.target.value)}></input>
            <label for='password'>Create password: </label>
            <input type='password' placeholder='Enter password' name="password" minLength={8} onChange={e => setPassword(e.target.value)}></input>
            <label for='confirm password'>Confirm password: </label>
            <input type='password' placeholder='Confirm password' name='confirm_password' minLength={8}></input>
            <button type="submit">Register Me</button>
        </form>
    )
}