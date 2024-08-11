import './addUser.css';

const Adduser = () => {
    return <div className="addUser">
        <form>
            <input type="text" placeholder='Username' name="username" />
            <button>Search</button>
        </form>
        <div className="user">
            <div className="details">
                <img src="../../../avatar.png" alt="profile pic"/>
                <span>Jane Doe</span>
            </div>
            <button>Add user</button>
        </div>
    </div>
}

export default Adduser;