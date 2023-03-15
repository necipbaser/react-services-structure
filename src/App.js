import './App.css';

//services
import {UsersService} from './services'
import {useEffect, useState} from "react";

function App() {

    const [user,setUser] = useState([])
    const [users,setUsers] =useState([])

    useEffect(()=>{
        UsersService.getUsers()
            .then(res=> setUsers(res));

        UsersService.getUserById(5)
            .then(res=>setUser(res));

        UsersService.newUserJson({
        userId:3,
        title:'Test json data',
        body:'body test'
        }). then(res=>console.log(res));

        UsersService.newUserFormData({
            userId: 4,
            title:'Title form data',
            body: 'body test'
        })
    },[])

  return (
    <div className="App">
        <p>UserId: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>UserName:{user.username}</p>
        <p>Email:{user.email}</p>

        <hr />
        {
            users.map((user,index)=>(
                <p key={index}>{user.name}</p>
            ))
        }
    </div>
  );
}

export default App;
