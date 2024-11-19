import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from  "../../assets/Dog.png";

function Card(props) {
    return (
      <div className="container ">
          <div className="row">
          <div className="card rounded-5">
           <img src={img1} alt="" className='card-img-top' />
            <div className="card-body">
              <h1 className="card-title">{props.title}</h1>
              <p className="card-text">{props.text}</p>
            </div>
          </div>  
          </div>      
      </div>
    );
}
 
export default Card;