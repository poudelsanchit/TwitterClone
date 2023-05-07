import { useState } from "react";
import axios from "axios";

const CommentBox = ({ setShouldRefresh }) => {
    let array1 = ['hello', 'hi', 'hello', 'hi', 'hello', 'hi'];

    let [comment, setTweetComment] = useState('');
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        axios.post('https://react-workshop-todo.fly.dev/posts/6457e0b2af38d5ad14563c4c/comment', {
            content: 'hello world',
        }, {
            headers: {
                apiKey: '6457383b7213f63d43544ac0'
            },
        });
        setShouldRefresh((v) => !v);

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