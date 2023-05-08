const CommentDisplay = ({ name, comment }) => {

    return (
        <>
            <div container>
                <div className="commentname">{name}</div>
                <div className="comment">{comment}</div>
                <hr />
            </div >
        </>
    );

};

export default CommentDisplay;