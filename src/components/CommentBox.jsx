import { useState } from "react";
import axios from "axios";

const CommentBox = ({ id, setShouldRefresh }) => {

    let [comment, setTweetComment] = useState('');
    const upload = async () => {
        try {
            await axios.post("https://react-workshop-todo.fly.dev/posts/${id}/comment", {
                content: comment,
            }, {
                headers: {
                    apikey: '6457383b7213f63d43544ac0'
                }
            });
            setTweetComment("");
            setShouldRefresh((v) => !v);
        }
        catch (e) {
            console.log(e);
            alert('Error');
        }
    };
    const handleCommentSubmit = () => {
        upload();
    }


    return (
        <>
            <div className="comment-box">
                <p> <input type="text" className="comment-input" placeholder="Write a comment...." value={comment} onChange={(e) => setTweetComment(e.target.value)} /></p>
                <br /><br />
                <p> <button onClick={handleCommentSubmit}>Comment</button></p>
            </div>
            <div className="comment-lists">
            
            </div>

        </>
    );
};

export default CommentBox;