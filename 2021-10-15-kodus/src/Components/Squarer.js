import React, {Component} from "react"


class Squarer extends Component {


    state = {
        counter: 0
      }
    
      increaseCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
      }

    render() {
      return (
        <h1 onClick={this.increaseCounter}>
        The number is {this.state.counter}, and that squared is {this.state.counter * this.state.counter}
        </h1>
    
    )   
}
}

export default Squarer;