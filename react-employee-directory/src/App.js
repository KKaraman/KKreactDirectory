// import logo from './logo.svg';
import './App.css';
import React from "react";
// import components that we are using

import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

// app function and will return JSX;
// this is the markup for the component
// function App() {
// return (
//   // <div className="App">
//   //   <header className="App-header">
//   //     <img src={logo} className="App-logo" alt="logo" />
//   //     <p>
//   //       Edit <code>src/App.js</code> and save to reload.
//   //     </p>
//   //     <a
//   //       className="App-link"
//   //       href="https://reactjs.org"
//   //       target="_blank"
//   //       rel="noopener noreferrer"
//   //     >
//   //       Learn React
//   //     </a>
//   //   </header>
//   // </div>
// );
class App extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    // friends: friends
    employees: employees
    //this is the same as
    // friends
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };
  render() {
    return (
      <div className="container">
  
        <Wrapper>
          <Title>Employees List</Title>
          {this.state.employees.map(employee => (
            <EmployeeCard
              // removeEmployee={this.removeEmployee}
              // id={employee.id}
              key={employee.index}
              // name={employee.first.name}
              // image={employee.picture.thumbnail}
              // occupation={friend.occupation}
              // location={friend.location}
            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

// class based render
// equivalent to the function based approach above
// class App extends React.Component{
//   render(){
//     <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
//   }
// }

export default App;
