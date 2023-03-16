import React, { useState,useEffect, useContext } from 'react'
import {useLocation, useParams  } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/authContext';


function Profile() {

  const location = useLocation()
  //const [user,setUser] = useState("");
  const state = useLocation().state;
    const [username, setUsername] = useState(state?.username || "" );
    const [email, setEmail] = useState(state?.email || "" );
    
    const [password, setPassword] = useState(state?.password || "");
    console.log(state)

    const userId = location.pathname.split("/")[2]
   // let { userId } = useParams();
   // let history = useHistory();
  //const [username, setUsername] = useState("");

    const {currentUser} = useContext(AuthContext)
    //const idu = currentUser.username
    //const userId = currentUser.id

    //console.log(idu)
    //console.log(userId)
    //const id = useLocation().search
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const res = await axios.get(`/users/${userId}`);
    //       setUser(res.data);
    //       //setUsername(res.data.username);
    //        console.log(res.data)
    //        console.log(res.data.email)
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    //   fetchData();
    // }, []);

    const handleSubmit = async e=>{
      e.preventDefault()
  
      try {
        
           await axios.put(`/users/${state.id}`, {
              username,
              email,
            }) 
           
      } catch (err) {
        console.log(err);
      }
    }
    
  return (
    <div>
    <div className="content">
      {/* <form onSubmit={handleSubmit}> */}
      {/* <h1> Username: {user.email} </h1> */}

      {/* {user.map(us=> {
        return (
      <div>  key={us.id} </div>
      
      <div>{us.username}</div>
      )})
      } */}

      {/* {user.map((us,index) => 
      
              {return(
                <div className="edu-card" key={us.id} hoverable>
                  
                  
                   
                      <div className='avatarName'>{us.username}</div>
                    <div className='title'>{us.email}</div>
                  
                  <br />
                </div>
                
              )})} */}




      {/* <span>{user.username}</span> */}
      <label> Username : 
      <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)}/>
      </label>
      {/* <label> Email:
      <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/>
      </label> */}
      {/* <label> Change Password :
      <input type="password"  name='password' value={password}  onChange={(e) => setPassword(e.target.value)}/>
      </label> */}
      {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}
      <button onClick={handleSubmit}>submit value</button>
    </div>

    </div>
  )
}

export default Profile