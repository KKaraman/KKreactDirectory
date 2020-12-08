import React from "react";
import "./style.css";

function EmployeeCard(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        {/* the () allows you to only execute this when the button is clicked */}
        <p onClick={() => props.showOnlyThisEmployee(props.id)}>
          Show Only This Employee
        </p>
        <ul>
          <li>
            <strong>Name:</strong> {props.name} {props.lastName}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Phone:</strong> {props.phone}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>
      <p onClick={() => props.removeEmployee(props.id)}>
          Delete This Employee
      </p>
      <p onClick={() => props.sortEmployees()}>
          Sort the Employees
      </p>
      <p onClick={() => props.filterNationalities(props.location)}>
         Filter Nationalities
      </p>
    </div>
  );
}

export default EmployeeCard;
