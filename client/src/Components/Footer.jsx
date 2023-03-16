import React from 'react'
import Logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd';

function Footer() {
  return (
    <footer>
      <div className='left'>
      <img src={Logo} alt="" />
      <h1>Writing and Reading</h1>
        <h4>
            add more value to you.
        </h4>
        <Space direction="horizantal">
            <Button  type="primary" shape="round" style={{ color: "white",background:"#1A2626" }}>
             <Link  to="/allBlogs">GET STARTED FREE</Link>
            </Button>
            
            <Button  shape="round" style={{ color: "#1A2626",background:"#F5F5F5"}}>
             <Link  to="/write">+ ADD NEW BLOG</Link>
            </Button>
            </Space>
            <h4>
            Hot-line : 011-2626266
            </h4>
        </div>
      <div>
    
       <span>Made with ♥️ and <b>React.js</b>.</span>
      </div>  
    </footer>
  )
}

export default Footer