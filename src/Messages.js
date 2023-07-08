import { postMessage } from "./Fetch";

export function Message ({content, setContent}) {
    console.log('creating message', content);
    async function handleMessages(event) {
        console.log(event.currentTarget);
        event.preventDefault();
        await postMessage(content)
    }
    return (
        <form onSubmit={handleMessages}>
            <h2>Message:</h2>
            <label for='message'> Message: </label>
            <input type='message' placeholder="Enter content" name='message' onChange={e => setContent(e.target.value)}></input>
            <button type="submit" onClick={handleMessages}>Post</button>
        </form>
    )
}