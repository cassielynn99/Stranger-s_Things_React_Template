export default function RegisterUser() {
    function handleUserRegistration(event) {
        event.preventDefault();
        console.log('hi')
    }
    return (
        <form onSubmit={handleUserRegistration}>
            <h2>Welcome! Let's set up an account:</h2>
            <label for='username'>Create username: </label>
            <input type='username' placeholder='Enter username' name="username"></input>
            <label for='password'>Create password: </label>
            <input type='password' placeholder='Enter password' name="password"></input>
            <button type="submit">Register Me</button>
        </form>
    )
}