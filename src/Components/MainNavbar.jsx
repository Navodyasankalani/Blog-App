import React, { useContext, useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import Logo from '../img/logo.png'
import { Button } from 'antd';
import axios from 'axios';

function MainNavbar() {
    const {currentUser,logout} = useContext(AuthContext)
    const [user,setUser] = useState("");

    const location = useLocation()

    //const userId = location.pathname.split("/")[2]
    const userId = currentUser.id

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get(`/users/${userId}`);
          setUser(res.data);
          //setUsername(res.data.username);
           console.log(res.data)
           //console.log(res.data.email)
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }, []);
  
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt="" />
          </Link>
        </div>
          <div className="links">
            {/* 
            <Link className="link" to="/categories/?cat=food">
              <h6>FOOD</h6>
            </Link> */}
            <Link className="link" to="/">
              <h6>Home</h6>
            </Link>
            <Link className="link" to="/allBlogs">
              <h6>All Blogs</h6>
            </Link>
            {currentUser ? <Link className='link' to="/write">Write</Link> :<Link className='link' to="/login">Write</Link>}
            {/* <span>{currentUser?.username}</span> */}
            {/* {currentUser ?  <img src={currentUser?.img} alt=""/> : ""} */}
            
            {user.email}
            {currentUser ? <Link className="link" to={`/user/${userId}`} state={user}> 
            {/* "/user/:id"  */}
            <img src={currentUser?.img} alt=""/> 
            </Link> : ""}
            {/* {currentUser ? <span onClick={logout}>Logout</span> : <Link className="link" to="/login">Login</Link>}
            <span >
              <Link className='link' to="/write">Write</Link>
            </span>*/}
            <Link className="link" to="/mylist">
              <h6>My List</h6>
            </Link>
            {currentUser ? "" : <Link className="link" to="/login">
              <h6>Sign in</h6>
            </Link>}
            <Button  type="primary" shape="round" style={{ color: "white",background:"#637D7D" }}>
            {currentUser ? <span onClick={logout}>Logout</span> :<Link className='link' to="/register">GET STARTED FREE</Link>}
            </Button>
          </div>
          
      </div>
      
    </div>
  )
}


export default MainNavbar