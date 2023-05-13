import { useState } from "react";
import axios from "axios";
const UserTweet = ({ setShouldRefresh }) => {
    let [tweetContent, setTweetContent] = useState("");
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts", {
                content: tweetContent,
                image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSRT00eiKqi9d01BFAsmrHY_lmUouhzKI9At2ca71X4KeKaw4xfNg-nonc3VcaGzMrNYMk4DK1p-5OvWiQ',
            }, {
                headers: {
                    apikey: '6457383b7213f63d43544ac0'
                }
            });
            setTweetContent("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            console.log(e);
            alert('Error');
        }
    };
    const handleSubmit = () => {
        console.log(tweetContent)
    }


    return (

        <>
            <div className="tweet-box">
                <textarea placeholder="What's on your mind?" required value={tweetContent} onChange={(e) => setTweetContent(e.target.value)}></textarea>
                <button onClick={handleSubmit}>Tweet</button>
            </div>
        </>
    );
};

export default UserTweet;