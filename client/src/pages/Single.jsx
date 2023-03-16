import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Menu from '../Components/Menu'
import axios from 'axios'
import moment from 'moment'
import { AuthContext } from '../context/authContext'
import FlightCard from "./FlightCard";
import toast, { Toaster } from "react-hot-toast";
import MyList from './MyList'

function Single() {

  const [post, setPost] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);

  const location = useLocation()
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2]

  const {currentUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
        setIsLoading(false);
         console.log(res)
         console.log(res.data.title)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/allBlogs")
    } catch (err) {
      console.log(err);
    }
  }

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }

  const addFlights = (fli) => {
    if (!favourites.includes(fli)) {
      toast.success("Added to favourites");
      setFavourites([...favourites, fli]);
    } else {
      toast.success("Removed from favourites");
      setFavourites([...favourites.filter((item) => item !== fli)]);
    }
  };

  const removeFlights = (fli) => {
    toast.success("Removed from favourites");
    setFavourites([...favourites.filter((item) => item !== fli)]);
  };

  if (isLoading) return <p>Loading...</p>;


  return (

    <div className='single'>
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
      <div className="user">
        {post.userImg && <img src={post.userImg} alt="" />}
      <div className="info">
        <span>{post.username}</span>
        <p>Posted {moment(post.date).fromNow()}</p>
      </div>
      {currentUser.username === post.username && (
      <div className="edit">
        <Link to={`/write?edit=${postId}`} state={post}>
          <img src={Edit} alt="" />
        </Link>
          <img onClick={handleDelete} src={Delete} alt="" />
      </div>)}
      </div>
      <h1>{post.title}</h1>
      <FlightCard tit="Trending Destination">
     <div
           key={post.id}
           className="destination"
           onClick={() => addFlights(post)}
         >
     Click this + button Add this blog to MyList 
       <button>+</button>
       </div>
       </FlightCard>
      {getText(post.desc)}


      <br/><br/>
      <div>
        
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      LLLLLLLLLLLLL

      <FlightCard tit="Trending Destination">
        
           {/* <li>{item.desc}</li> */}
          
{/* 
        // post.length &&
        //   post?.map((item) => (
        //     <div
        //       key={item.id}
        //       className="destination"
        //       onClick={() => addFlights(item)}
        //     >
        //       <li>{item.title}</li>
        //       <li>{item.desc}</li>
        //       <button>+</button>
        //     </div>
        //   )) */}
        <div
              key={post.id}
              className="destination"
              onClick={() => addFlights(post)}
            >
        {/* {post.title} */}
        Click this + button Add this blog to MyList 
          <button>+</button>
          </div>
          </FlightCard>


          {/* {favourites.length ? (
          <div
              key={post.id}
              className="destination"
              onClick={() => removeFlights(post)}
            >
              <li>{post.title}</li>

              <button>-</button>
            </div>
             ): (
          <p>Nothing addeddddd to your list yet</p>
        ) } */}
          <FlightCard tit="My Destination List">
          {favourites.length ? (
          <div
              key={post.id}
              className="destination"
              onClick={() => removeFlights(post)}
            >
              <li>{post.title}</li>

              <button>-</button>
            </div>
             ): (
          <p>Nothing added to your list yet</p>
        ) }

        {/* {favourites.length ? (
          favourites?.map((item) => (
            <div
              key={item.id}
              className="destination"
              onClick={() => removeFlights(item)}
            >
              <li>{item.title}</li>
              <button>-</button>
            </div>
          ))
        ) : (
          <p>Nothing added to your list yet</p>
        )} */}
      </FlightCard>

      {/* <MyList items={post} onDeleteItem={removeFlights} /> */}




      </div>
      </div>



      {/* <div className="menu"> */}
        <Menu cat={post.cat}/>
      {/* </div> */}

    </div>
  )
}

export default Single