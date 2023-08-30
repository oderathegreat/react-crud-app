import { Component } from "react";

class About extends Component{
    
   // for state management in class based component you need a constructor and super objects

   constructor(){
    super();

    this.state={
        gender:"male", age:70,
    }
   }

   increase(){
    this.setState({
        age:this.state.age+7,
    })
   }
    render(){
        return(
            <div>
                <p>Class component  {this.state.age}  {this.state.gender}</p>
                <button onClick={()=>this.increase()}>Click me</button>
            </div>
        );
    }
}
export default About;