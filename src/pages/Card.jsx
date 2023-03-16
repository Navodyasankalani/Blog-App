import React from 'react';

function Card({items}) {
    console.log(items)
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img className="br-100 h3 w3 dib" alt={item.title} src={process.env.PUBLIC_URL + item.imgPath} /> */}
      <div>
        
        <h2>{items.title}</h2>
        <p>{items.desc}</p>
      </div>
    </div>
  );
}

export default Card;