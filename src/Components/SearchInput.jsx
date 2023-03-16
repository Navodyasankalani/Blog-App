import { Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import initialDetails from './initialDetails';
import SearchList from './SearchList';

function SearchInput() {
    const [searchField, setSearchField] = useState("");
    const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

    const filteredPersons = posts.filter(
        post => {
          return (
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
    
      const handleChange = e => {
        setSearchField(e.target.value);
      };

    //   function searchList() {
    //     return (
    //         <SearchList filteredPersons={filteredPersons} />
          
    //     );
    //   }

    //   const filtered = filteredPersons.map(items =>  <Home key={items.id} items={items} />); 
    // return (
    //   <div>
    //     {filtered}
    //   </div>
    // );


    // function searchList() {
    // filteredPersons.map(items => (
    //     <Card className="edu-card" key={items.id} hoverable>
    //       return(
            
    //         <h1>{items.title}</h1>
    //         <p>{items.desc}</p>
    //       );
    //     </Card>    
    // ))
    //       }
    
  return (
    <div>

<section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        />
      </div>
      {/* {searchList()} */}
      {
    filteredPersons.map(items => (
        <Card className="edu-card" key={items.id} hoverable>
         
            <h1>{items.title}</h1>
            <p>{items.desc}</p>
          
        </Card>    
    ))
          }
    </section>

    </div>
  )
}

export default SearchInput











// import React, { useContext }  from 'react'
// import {Link} from 'react-router-dom'
// import { AuthContext } from '../context/authContext'
// import { Select, Tag } from 'antd';
// const options = [
//   {
//     value: 'gold',
//   },
//   {
//     value: 'art',
//   },
//   {
//     value: 'green',
//   },
//   {
//     value: 'cyan',
//   },
// ];
// const tagRender = (props) => {
//   const { label, value, closable, onClose } = props;
//   const onPreventMouseDown = (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//   };
//   return (
//     <Tag
//       color={value}
//       onMouseDown={onPreventMouseDown}
//       closable={closable}
//       onClose={onClose}
//       style={{
//         marginRight: 3,
//       }}
//     >
//       {label}
//     </Tag>
//   );
// };

// function SearchInput() {

//     //const {currentUser,logout} = useContext(AuthContext)


//   return (
//     <div>
//         <div className="headerName">Find Blogs on Lama Blog</div>
//         <div className='border'></div>

//         <Select
//         mode="multiple"
//         showArrow
//         tagRender={tagRender}
//         defaultValue={['gold']}
//         style={{
//         width: '100%',
//         }}
//         options={options}
//         />

//         <div className="container">
//           <div className="links">
//             <Link className="link" to="/allBlogs/?cat=art">
//               <h6>ART</h6>
//             </Link>
//             <Link className="link" to="/allBlogs/?cat=technology">
//               <h6>TECHNOLOGY</h6>
//             </Link>
//             <Link className="link" to="/allBlogs/?cat=cinema">
//               <h6>CINEMA</h6>
//             </Link>
//             <Link className="link" to="/allBlogs/?cat=design">
//               <h6>DESIGN</h6>
//             </Link>
//             <Link className="link" to="/allBlogs/?cat=food">
//               <h6>FOOD</h6>
//             </Link>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default SearchInput