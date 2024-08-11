import './detail.css';

const Detail = () => { 
    return <div className="detail">
        <div className="user">
            <img src="../../../public/avatar.png" alt="profile-pic" />
            <h2>Jane Doe</h2>
            <p>Lorem ipsum dolor, sit amet</p>
        </div>
        <div className="info">
            <div className="option">
                <div className="title">
                    <span>Chat settings</span>
                    <img src="../../../public/arrowUp.png" alt="arrow-up" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Privacy & Help</span>
                    <img src="../../../public/arrowUp.png" alt="arrow-up" />
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared photos</span>
                    <img src="../../../public/arrowDown.png" alt="arrow-down" />
                </div>
                <div className="photos">
                   
                <div className="photoItem">
                        <div className="photoDetail">
                            <img src="../../../public/favicon.png" alt="fav" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img className='icon' src="../../../public/download.png" alt="download" />
                    </div>
                   
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="../../../public/favicon.png" alt="fav" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img className='icon' src="../../../public/download.png" alt="download" />
                    </div>
                   
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="../../../public/favicon.png" alt="fav" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img className='icon' src="../../../public/download.png" alt="download" />
                    </div>
                   
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="../../../public/favicon.png" alt="fav" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img className='icon' src="../../../public/download.png" alt="download" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img src="../../../public/favicon.png" alt="fav" />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img className='icon' src="../../../public/download.png" alt="download" />
                    </div>
                </div>
            </div>
            <div className="option">
                <div className="title">
                    <span>Shared files</span>
                    <img src="../../../public/arrowUp.png" alt="arrow-up" />
                </div>
            </div>
        </div>
        <button>Block user</button>
        <button className='logout'>Logout</button>
    </div>
}

export default Detail;
