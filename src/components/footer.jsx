import { useEffect, useState } from "react";
import LikeButton from "./likeButton";
import UnLikeButton from "./UnlikeButton";
import { useNavigate } from "react-router-dom";
import CommentBox from "./CommentBox";
const Footer = () => {

    const [isLiked, setIsLiked] = useState(false);
    const [isComment, setIsComment] = useState(true);

    const toggleLike = () => {
        setIsLiked(isLiked => !isLiked);


    }
    const toggleComment = () => {
        setIsComment(isComment => !isComment);
    }
    useEffect(() => {
        console.log("Hello ");
    }, [])
    return (
        <>
            <div className="tweet-footer">
                <button className="btn-reply" onClick={toggleComment}>Reply</button>
                <button className="btn-retweet">Retweet</button>
                {isLiked ? (
                    <UnLikeButton toggle={toggleLike} />

                ) :
                    (
                        <LikeButton toggle={toggleLike} />
                    )
                }
                <button className="btn-share">Share</button>
            </div>
            {isComment ? (<CommentBox />) : null}
        </>);
};
export default Footer;