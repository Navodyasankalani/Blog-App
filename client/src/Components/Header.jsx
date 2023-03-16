import React from 'react'
import {Link} from 'react-router-dom'
import HeaderImage from '../img/imageheader.png'

function Header() {
  return (
    <header>
    <div className='headerleft'>
        <h1>Stay curious</h1><br/>
        <div className='border'></div>
        <h4>
            Discover Stories, thinking and expertise from <br/>
            writes on your topic.
        </h4>
        <div className="button">
            <button className='startReading'>
            <Link className='buttontext1' to="/allBlogs">Start Reading</Link>
            </button>
            <button className='addNewBlog'>
            <Link className='buttontext2' to="/write">+ Add New Blog</Link>
            </button>
        </div>
        {/* <img src='' href=""></img> */}
    </div>
    <div className='headerImg'>
      
      <img src={HeaderImage} alt=""/>
    </div>

    </header>
  )
}

export default Header