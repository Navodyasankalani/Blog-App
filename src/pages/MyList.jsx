
import React, { useEffect, useState } from "react";
//import { FlightType } from "../../types/flight";
import FlightCard from "./FlightCard";
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { Card, Space } from "antd";

function MyList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [favourites, setFavourites] = useState([]);
  //const location = useLocation()
  //const navigate = useNavigate();

  const cat = useLocation().search

  // useEffect(() => {
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   // Allows us to intercept an API request so we can cancel anytime - sending signal in fetch will destroy immediately
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url, { signal }).then((res) => res.json());
  //       setData(response);
  //       setIsLoading(false);
  //     } catch (err) {
  //       if (err instanceof Error) {
  //         if (err.name === "AbortError") {
  //           console.log("api request has been cancelled");
  //         }
  //         console.log(err.name);
  //       } else {
  //         console.log("This is an unknown error");
  //       }
  //     }
  //   };
  //   fetchData();
  //   return () => {
  //     // cleanup the abort controller
  //     controller.abort();
  //   };
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setData(res.data);
        setIsLoading(false);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

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
    <>
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
      nsnsnsnsns

      {/* <div className="card-wrapper-home">
              {data.map(items => (
                <Card className="edu-card" key={items.id} hoverable>
                  <img width={370} height={250} src={`../upload/${items.img}`} alt=""/>
                  
                  
                    <h1>{items.title}</h1>
                  
                  
                </Card>
                   
              ))}
            </div> */}


      {/* <FlightCard tit="Trending Destination"> */}
        {data.length &&
          data?.map((item) => (
            <div
              key={item.id}
              className="destination"
              onClick={() => addFlights(item)}
            >
              <li>{item.title}</li>
              <button>+</button>
            </div>
          ))}
      {/* </FlightCard> 
      <FlightCard tit="My Destination List">*/}
        {favourites.length ? (
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
        )}
      {/* </FlightCard> */}
    </>
  );
}

export default MyList;
