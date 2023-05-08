import { useEffect, useState } from "react";
import LikeButton from "./likeButton";
import UnLikeButton from "./UnlikeButton";
import { useNavigate } from "react-router-dom";

const Footer = ({ id }) => {
    const navigate = useNavigate();
    const navigateToTweet = () => {
        navigate(`/tweet/${id}`);
    }
    const [isLiked, setIsLiked] = useState(false);

    const toggleLike = () => {
        setIsLiked(isLiked => !isLiked);


    }

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="tweet-footer">
                <button className="btn-reply" onClick={navigateToTweet}>Reply</button>
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
        </>);
};
export default Footer;