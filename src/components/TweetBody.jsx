import { useNavigate } from "react-router-dom";
import React from 'react'
const TweetBody = ({ tweet, image, id }) => {
    const navigate = useNavigate();
    const navigateToTweet = () => {
        navigate(`/tweet/${id}`);
    }

    return (
        <>
            <div onClick={navigateToTweet}>  <p className="tweet-text">{tweet}</p>
                <img
                    className="tweet-image"
                    src={image}
                    alt="Tweet Image"
                    style={{ width: "70%" }}
                />
            </div>
        </>
    );
};

export default TweetBody;