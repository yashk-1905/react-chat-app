import './userInfo.css';

const Userinfo = () => { 
    return <div className="userinfo">
        <div className="user">
            {/* gonna have user image and user name*/}
            <img src="../../../../public/avatar.png" alt="icon"/>
            <h2>Jonathan Doe</h2>
        </div>
        {/* icons for video call editing chat and all */}
        <div className="icons">
            <img src="../../../../public/more.png" alt="icon"/>
            <img src="../../../../public/video.png" alt="video-icon"/>
            <img src="../../../../public/edit.png" alt="edit-icon"/>
        </div>
    </div>
}

export default Userinfo;
