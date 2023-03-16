import React from "react";

// interface IProps {
//   title: string;
//   children: React.ReactNode;
// }

function FlightCard({  tit,children   }) {
    console.log(tit)
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img className="br-100 h3 w3 dib" alt={item.title} src={process.env.PUBLIC_URL + item.imgPath} /> */}
      <div>
      <h2>{tit}</h2>
      <ul>{children}</ul>
        {/* <h2>{item.title}</h2> */}
      </div>
    </div>
  );
}

export default FlightCard;