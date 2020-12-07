import React from "react";
import "./style.css";

function EmployeeCard(props) {
  console.log(props);
  return (
    <div className="card">
      {/* <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div> */}
      <div className="content">
        {/* the () allows you to only execute this when the button is clicked */}
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span> */}
        <ul>
          <li>
            <strong>Name:</strong> {props.key}
          </li>
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        </ul>
      </div>

    </div>
  );
}

export default EmployeeCard;
