import { Login } from './components/auth/Login'
import { Menu } from './components/main/Menu'
import {useState} from 'react'
import './App.css'

const App = () => {

  const [user, setUser] = useState(null)

  return (
    <div className='App'>
      {

        user
        ? <Menu user={user} setUser={setUser}/>
        : <Login setUser={setUser}/>
      }
    </div>
  )
}
 
export default App