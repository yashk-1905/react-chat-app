import { useState } from 'react';
import './chatlist.css';
import Adduser from './addUser/Adduser';

const Chatlist = () => { 
    const [addMode, setAddMode] = useState(false);
    return <div className="chatlist">
        <div className="search">
            {/* gonna have search bar */}
            <div className="searchBar">
                <img src="../../../../public/search.png" alt="icon"/>
                <input type="text" placeholder="Search"/>
            </div>
            {/* gonna have button to add new user */}
            <img className='add' onClick={() => {
                setAddMode(!addMode);
            }} src={addMode ? "../../../../public/minus.png" : "../../../../public/plus.png"} alt="icon"/>
        </div>
        {/* adding the chat items */}
        <div className="item">
            <img src="../../../../public/avatar.png" alt="user-profile" />
            <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
            </div>
        </div>
        <div className="item">
            <img src="../../../../public/avatar.png" alt="user-profile" />
            <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
            </div>
        </div>
        <div className="item">
            <img src="../../../../public/avatar.png" alt="user-profile" />
            <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
            </div>
        </div>
        <div className="item">
            <img src="../../../../public/avatar.png" alt="user-profile" />
            <div className="texts">
                <span>Jane doe</span>
                <p>hello</p>
            </div>
        </div>
        {
           addMode && <Adduser></Adduser>
        }
    </div>
}

export default Chatlist;         