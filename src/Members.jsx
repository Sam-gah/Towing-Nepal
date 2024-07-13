import React from 'react';
import Contact from './memberContacts';



function Member(props) {
  return (
    <div className="container">
      <input type="radio" name="dot" id="one" />
      <input type="radio" name="dot" id="two" />
      <div className="main-card">
        <div className="cards">
          <div className="card">
            <div className="content">
              <div className="img">
                <img src={props.imgSrc} alt="Team member 1" />
              </div>
              <div className="details">
                <div className="name">{props.name}</div>
                <div className="job">{props.status}</div>
              </div>
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Member;
