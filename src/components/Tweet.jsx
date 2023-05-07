import TweetBody from "./tweetbody";
import Footer from "./footer";
import Header from "./Header";
import CommentDisplay from "./CommentsDisplay";
const Tweet = ({ name, username, time, tweet, image, avatar, id }) => {
    return (<div className="tweet">
        <img
            className="profile-pic"
            src={avatar}
            alt="Profile Picture"
            height={100}
        />
        <div className="tweet-content">
            <Header name={name} username={username} time={time} />
            <TweetBody tweet={tweet} image={image} id={id} />
            <Footer id={id} />
            <CommentDisplay />
        </div>
    </div >);
};
export default Tweet;