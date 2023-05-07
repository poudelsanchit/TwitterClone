import Header from "./Header";
import Footer from "./footer";
import TweetBody from "./tweetbody";
const Tweet = ({ name, username, time, tweet, image, avatar }) => {
    return (

        <div className="tweet">
            <img
                className="profile-pic"
                src={avatar}
                alt="Profile Picture"
            />
            <div className="tweet-content">
                <Header name={name} username={username} time={time} />
                <TweetBody tweet={tweet} image={image} />
                <Footer />
            </div>
        </div>
    );
};

export default Tweet;