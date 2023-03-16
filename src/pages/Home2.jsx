import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Card,Row,Col,Image,Avatar,Space,Rate,Button } from 'antd';
import Navbar from '../Components/Navbar';

//const { Meta } = Card;

function Home2() {

  const [posts, setPosts] = useState([]);
  const [searchField, setSearchField] = useState("");

  const cat = useLocation().search

  let pageLimit=3
  let dataLimit=6
  const [pages, setPages] = useState(0)


  //let pageSpilts = Math.round(posts.length / dataLimit)
  //const [pages] = useState(Math.round(posts.length / dataLimit)); // this line is not work
  const [currentPage, setCurrentPage] = useState(1);

  //console.log(Math.round(posts.length / dataLimit))
  //console.log(pages)
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
        //setPages(Math.round(res.data.length / dataLimit))
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);



  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  // const getPaginatedData = () => {
  //   const startIndex = currentPage * dataLimit - dataLimit;
  //   const endIndex = startIndex + dataLimit;
  //   return posts.slice(startIndex, endIndex);
  // };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const filteredBlogs = posts.filter(
    
    post => {
      return (
        // post
        // .slice(startIndex, endIndex) && (
        post
        .title
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        post
        .desc
        .toLowerCase()
        .includes(searchField.toLowerCase()) 
        
     
      );
    }
  );

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return filteredBlogs.slice(startIndex, endIndex);
  };









  const handleChange = e => {
    setSearchField(e.target.value);
  };


  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  //console.log(items)
  return (



    <div className='home2'>
     

<div>
<hr/>
<section className="search">
      <div className="searchHeading">
        Find Blogs on Lama Blog
      </div>
      <div className="searchBar">
        <input 
          className="searchInpur"
          type = "search" 
          placeholder = "Search Blogs" 
          onChange = {handleChange}
        />
        {/* <img class="search-icon" alt='' src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
     */}
      </div>
      {/* {searchList()} */}

      <br/><br/><br/><br/><br/><br/><br/><br/>


      <Navbar />
      <br/><br/>
      <hr/>
      <br/>
      <div className="trendingBlogs">
        Trending On Lama Blog
      <Row >
          <Col  xs={24} xl={24}>
            <div className="card-wrapper-trending-home">
      {filteredBlogs.map((items,index) => 
      {
                if(index < 6)
              {return(
                <Card className="edu-card" key={items.id} hoverable>
                  <div className='leftNumber'>
                    <div className='number'>0{index+1} </div>
                    {/* <div className='borderNumber'></div> */}
                  </div>
                  <div className='rightDetails' >
                    
                      <Avatar
                        src={
                          <Image src={items.userImg} />
                        }
                        
                      />
                      <div className='avatarName'>{items.username}</div>
                    {/* </Space> */}
                  <Link className='link' to={`/post/${items.id}`}>
                    <div className='title'>{items.title}</div>
                  </Link>
                  </div>
                  <br />
                </Card>
                
              )}})}
               </div>

            
          </Col>
          
        </Row>
        <br/><br/>
      </div>
        <hr/>
        <br/><br/>
        <Row >
          <Col  xs={24} xl={24}>
            <div className="card-wrapper-home">
            

                
                {getPaginatedData().map((items,index) => (
                <Card className="edu-card" key={items.id}  hoverable>
                  <img width={370} height={250} src={`../upload/${items.img}`} alt=""/>
                  let num = {index}
                  <Link className='link' to={`/post/${items.id}`}>
                    {/* {`/post/${items.id}`}    {`/write?edit=${items.id}`} state={posts}*/}
                    <h1>{items.title}</h1>
                  </Link>
                  {getText(items.desc)}
                  <div style={{ alignitems: "center" }}>
                  
                    <Space align="center">
                      <Avatar
                        src={
                          <Image src={items.userImg} />
                        }
                      />
                    </Space>
                  </div>

                  <br />
                  <Space direction="horizontal">
                    <Rate allowHalf defaultValue={2.5} />
                    <Button type="primary" size="small">
                    Read More...{" "}
                    </Button>
                  </Space>
                </Card>
                   
              ))}
          
            </div>
          </Col>
          
        </Row>

        <br/><br/><br/>
          
        <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>



    </section>

    </div>




    <div>
      {/* <br/>
      <div className="trendingBlogs">
        <h2>Trending On Lama Blog</h2>
      <Row >
          <Col  xs={24} xl={24}>
            <div className="card-wrapper-trending-home">
              {posts.map((item, index) =>
              {
                if(index < 6)
              {return(
                <Card className="edu-card" key={item.id} hoverable>
                  <div className='leftNumber'>
                    <div className='number'>0{index+1} </div>
                    <div className='borderNumber'></div>
                  </div>
                  <div className='rightDetails' >
                    
                      <Avatar
                        src={
                          <Image src={item.userImg} />
                        }
                        
                      />
                      <div className='avatarName'>{item.username}</div>
                    
                  <Link className='link' to={`/allBlogs/post/${item.id}`}>
                    <div className='title'>{item.title}</div>
                  </Link>
                  </div>
                  <br />
                </Card>
                
              )}})}
            </div>

            
          </Col>
          
        </Row>
        <br/><br/><br/><br/>
      </div> */}

     
      {/* <div className="trendingBlogs">
<Row >
          <Col  xs={24} xl={24}>
            <div className="card-wrapper-home">

              {getPaginatedData().map((item,idx) => (
                <Card className="edu-card" key={idx} hoverable>
                  <img width={370} height={250} src={`../upload/${item.img}`} alt=""/>
                  
                  <Link className='link' to={`/allBlogs/post/${item.id}`}>
                    <h1>{item.title}</h1>
                  </Link>
                  {getText(item.desc)}
                  
                   <div style={{ alignItems: "center" }}>
                  
                    <Space align="center">
                      <Avatar
                        src={
                          <Image src={item.userImg} />
                        }
                      />
                    </Space>
                  </div>

                  <br />
                  <Space direction="horizontal">
                    <Rate allowHalf defaultValue={2.5} />
                    <Button type="primary" size="small">
                    Read More...{" "}
                    </Button> 
                  </Space>
                </Card>
                
              ))}
            </div>
          </Col>
          
        </Row>
        </div> */}


      
      
      {/* <Card
      hoverable
      style={{
        width: 370,
        height: 200,
        left : 20,
      }}
      // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
      
      {...posts.map((post) => (
        
        <div className="post" key={post.id}>
          <div className="img">
            <img src={`../upload/${post.img}`} alt="" />
          </div>
          <div className="content">
            <Link className='link' to={`/allBlogs/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>  
              <p>{getText(post.desc)}</p>
            <button>Read More...</button>
          </div>
        </div>
        
      ))} 
       
    </Card> */}
      
      
      
      
      
      
      {/* <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/allBlogs/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>  
                <p>{getText(post.desc)}</p>
              <button>Read More...</button>
            </div>
          </div>
        ))}
      </div> */}
    </div>


    
</div>
    
  )
}

export default Home2









  