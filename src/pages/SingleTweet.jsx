import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Tweet from '../components/Tweet';

const SingleTweet = () => {
    const [tweet, setTweet] = useState(null);
    const { id } = useParams();
    const fetchTweet = async () => {
        const resp = await axios.get('https://react-workshop-todo.fly.dev/posts/' + id, {
            headers: {
                apikey: '6457383b7213f63d43544ac0'
            }
        });
        setTweet(resp.data.post)
    }
    useEffect(() => {
        fetchTweet();
    }, []);
    return (
        <>
            {
                tweet ? <Tweet name={tweet.user.fullname} username={'@' + tweet.user.name} time={tweet.date} tweet={tweet.content} image={tweet.image} avatar={'https://avatars.githubusercontent.com/u/' + tweet.user.githubId + '?v=4'} key={tweet._id} /> : null
            }
        </>
    )
}

export default SingleTweet