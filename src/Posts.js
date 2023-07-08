import { Posts } from "./Fetch";

export function CreatePosts({ title, setTitle, description, setDescription, price, setPrice, location, setLocation }) {
    console.log('creating post', title, description);
    async function handlePostCreation(event) {
        console.log(event.currentTarget);
        event.preventDefault();
        await Posts(title, description, price, location)
    }
    return (
        <form onSubmit={handlePostCreation}>
            <h2>Create Post:</h2>
            <label for='title'> Title: </label>
            <input type='title' placeholder='Enter title' name="title" onChange={e => setTitle(e.target.value)}></input>
            <label for='desciption'> Description: </label>
            <input type='description' placeholder='Enter description' name="description" onChange={e => setDescription(e.target.value)}></input>
            <label for='price'> Price: </label>
            <input type='price' placeholder='Enter price' name='price' onChange={e => setPrice(e.target.value)}></input>
            <label for='location'> Location: </label>
            <input type='location' placeholder='Enter location' name='location' onChange={e => setLocation(e.target.value)}></input>
            {/* <label for="willDeliver"> Willing to Deliver: </label>
            <select id="willDeliver" name="cars">
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="uponRequest">Upon Request</option>
            </select> */}
            <button type="submit" onClick={handlePostCreation}>Post</button>
        </form>
    )
}