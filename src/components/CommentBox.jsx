import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentDisplay from './CommentDisplay';

const CommentBox = ({ id }) => {
    //upload functions
    const [comment, setCommentContent] = useState('');
    const handleCommentSubmit = () => {
        upload();
    };
    //uploading data to API
    const upload = async () => {
        try {
            await axios.post(
                `https://react-workshop-todo.fly.dev/posts/${id}/comments`,
                {
                    content: comment,
                },
                {
                    headers: {
                        apiKey: '6457383b7213f63d43544ac0',
                    },
                }
            );
            setCommentContent("");
        } catch (error) {
            console.log(error);
            alert('Error Found');
        }
    };
    //fetching data through API
    const [comments, getComments] = useState([]);

    const fetchCommentsContent = async () => {
        try {
            const comments = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`, {
                headers: {
                    apiKey: '6457383b7213f63d43544ac0',
                },
            });
            getComments(comments.data.post.comments);
        } catch (error) {
            console.log(error);
        }
    };
    //useEffect
    useEffect(() => {
        fetchCommentsContent();
    }, []);


    return (
        <>
            <div className="comment">

                <div className="comment-box">
                    <p> <input type="text" className="comment-input" placeholder="Write a comment...." value={comment} onChange={(e) => setCommentContent(e.target.value)} /></p>
                    <br /><br />
                    <p> <button onClick={handleCommentSubmit}>Comment</button></p>
                </div>

                {comments.map((data) => (
                    <CommentDisplay
                        name={data.user.name}
                        comment={data.content}
                    />
                ))}
            </div>
        </>
    );
}

export default CommentBox;
