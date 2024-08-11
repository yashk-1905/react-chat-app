// from 1:23 we are starting the firebase use in our app as design part is done 
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import List from "./components/list/list"
import Login from "./components/login/login"
import Notification from "./components/notification/Notification"

const App = () => {
  const user = false
  return (
    <div className='container'>
      {
        user 
        ? <>
          <List></List>
          <Chat></Chat>
          <Detail></Detail>
        </> 
        : <Login></Login>
      }
      <Notification> </Notification>
    </div>
  )
}

export default App