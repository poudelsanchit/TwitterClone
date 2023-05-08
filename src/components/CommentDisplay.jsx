const CommentDisplay = ({ name, content }) => {
    return (
        <>
            <div>
                <div>{name}</div>
                <div>{content}</div>
                <hr />
            </div >
        </>
    );

};

export default CommentDisplay;