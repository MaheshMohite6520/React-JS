import { Component } from "react";

class class_componenet extends Component 
{
  // We can declare state outside the constructor
  state = {count : 0}

  constructor()
  {
    // We can declare the state inside the constructor(Recommended)
    this.ct = 0;

    // It means already declare outside the constructor automatically & it will become final or const

    super();

    this.state = 
    {
      // If we want to change the value of count then declare in state(here)
      count : 0
    }
  }

  render()
  {
    return (
      <div>
        <h1>Class-Based-Componenet</h1>

        <h2>Count : {this.state.count}</h2>

        <button onClick={() => {
          this.setState({
            count : this.state.count + 1
          })
          console.log(this.state)
        }}>
          Increament
        </button>
      </div>
    )
  }
}

export default class_componenet;