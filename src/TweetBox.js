import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function TweetBox() {
  
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: 'Rafeh Qazi',
      username: 'cleverqazi',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 
        "https://www.eltiempo.com/files/article_content/uploads/2018/12/20/5c1c33e4dd213.jpeg",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://icdn9.digitaltrends.com/image/digitaltrends_es/justice-league-batman-500x500.jpg"/>
          <input
            onChange={(e) => setTweetMessage(e.target.value)} 
            value={tweetMessage} 
            placeholder="what's happening?" 
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)} 
          className="tweetBox__imageInput" 
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;