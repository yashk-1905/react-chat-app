import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [emojiClicked, setEmojiClicked] = useState(false);

  // const [emojiInserted, setEmojiInserted] = useState(null);        //not the right way to inset the emoji to text in the message we will have to use the onChange on the input only and then add emoji at the end of the text

  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    console.log(e.emoji);
    // setEmojiInserted(e.emoji);
    setText(text + e.emoji);
    setEmojiClicked(false);
  };
  console.log(text);

  const endRef = useRef(null);
  
  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"}); 
  },[]);
  
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="../../../public/avatar.png" alt="profile pic" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum, dolor sit</p>
          </div>
        </div>
        <div className="icons">
          <img src="../../../public/phone.png" alt="call" />
          <img src="../../../public/video.png" alt="video-call" />
          <img src="../../../public/info.png" alt="info about user" />
        </div>
      </div>
      <div className="center">
        {/* We are gonna create our first message over here in the centre div */}
        <div className="message">
          <img src="../../../public/avatar.png" alt="user-pic" />
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        {/* this message sent by me won't have any image */}
        <div className="message mown">   
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="../../../public/avatar.png" alt="user-pic" />
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message mown">   
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="../../../public/avatar.png" alt="user-pic" />
          <div className="texts">
          <img src="../../../public/bg.jpg" alt="" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message mown">   
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="../../../public/avatar.png" alt="user-pic" />
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message mown">   
          <div className="texts">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit sapiente adipisci quo repellat ducimus ullam enim, provident odio odit earum corrupti atque iure, delectus molestiae perferendis veritatis tempore! Natus.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="../../../public/img.png" alt="upload-image" />
          <img src="../../../public/camera.png" alt="click-pic" />
          <img src="../../../public/mic.png" alt="record" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            onClick={() => {
              setEmojiClicked(!emojiClicked);
            }}
            src="../../../public/emoji.png"
            alt="emojis"
          />
          <div className="picker">
            <EmojiPicker
              open={emojiClicked}
              onEmojiClick={handleEmoji}
            ></EmojiPicker>
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
