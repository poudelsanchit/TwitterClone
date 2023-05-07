
const CommentBox = () => {
    return (
        <>
            <div className="comment-box">
                <p> <input type="text" className="comment-input" placeholder="Write a comment...." /></p>
                <br /><br />
                <p> <button >Comment</button></p>
            </div>
            <div className="comment-lists">

            </div>

        </>
    );
};

export default CommentBox;