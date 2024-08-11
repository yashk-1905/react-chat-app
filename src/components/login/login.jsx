import { useState } from 'react';
import './login.css'
import { toast, ToastContainer } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ''
    })

    const handleAvatar = (e) => {
        if(e.target.files[0]){      //[0] because we are selecting only one image 
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0]) //This method creates a temporary URL representing the file. This URL can be used in the src attribute of an image element to display the image immediately. this is beneficial to show the preview of the image immediately
            })
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        toast.warn("Hello")
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        /**
            >FormData Constructor: The FormData() constructor creates a new FormData object.
            >Purpose: It allows you to compile a set of key/value pairs to represent form data, which can then be sent to the server as part of an HTTP request (often using POST).
         */

        const {username, email, password} = Object.fromEntries(formData);
        /**
             >Object.fromEntries() is a method that takes an iterable (like an array or FormData object) of key-value pairs and converts it into an object.
            >For example, if you have an array like [["username", "John"], ["email", "john@example.com"], ["password", "secret"]], using Object.fromEntries() would create an object like { username: "John", email: "john@example.com", password: "secret" }.
         */

        console.log(username);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // await setDoc(doc(db, "cities", "LA"), {
            //     name: "Los Angeles",
            //     state: "CA",
            //     country: "USA"
            // });

            await setDoc(doc(db, "users", res.user.uid), {
                username,   // username: username // same
                email,
                id: res.user.uid,
                blocked: [] //we are gonna have the id of the blocked user here
            });
            toast.success("Registration Successful! You can login now");
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
    return <div className="login">
        <ToastContainer position='bottom-right' />
        <div className="item">
            <h2>Welcome back,</h2>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign In</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
            <h2>Create an account</h2>
            <form onSubmit={handleRegister}>
                <label htmlFor="file">
                <img src={avatar.url ||"../../../avatar.png"} alt="profile" />
                    Upload an image
                </label>
                <input type="file" id='file' style={{display:"none"}} onChange={handleAvatar}/>
                <input type="text" placeholder='Username' name='username'/>
                <input type="text" placeholder='Email' name='email'/>
                <input type="password" placeholder='Password' name='password'/>
                <button>Sign up</button>
            </form>
        </div>
    </div>
}
export default Login;