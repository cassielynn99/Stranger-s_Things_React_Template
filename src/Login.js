export function LoginUser() {
    function handleUserLogin(event) {
        event.preventDefault();
        console.log('hi')
    }
    return (
        <form onSubmit={handleUserLogin}>
            <h2>Welcome back! Let's log in:</h2>
            <label for='username'>Username: </label>
            <input type='username' placeholder='Enter username' name="username"></input>
            <label for='password'>Password: </label>
            <input type='password' placeholder='Enter password' name="password"></input>
            <button type="submit">Log In</button>
        </form>
    )
}