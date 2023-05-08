const CommentDisplay = ({ name, comment }) => {
    return (
        <>
            <div>
                <div>{name}</div>
                <div>{comment}</div>
                <hr />
            </div >
        </>
    );

};

export default CommentDisplay;