import { Component } from "react";
export class SimpleCounterComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            toggleStatus : false,
        }
    }
    handleCounter = () =>{
        if(!this.state.toggleStatus){
            this.setState({...this.state,count:this.state.count + 1})
        }else{
            this.setState({...this.state,count:this.state.count })
        }
        
    }
    handleToggle = () =>{
        this.setState({...this.state,toggleStatus:!this.state.toggleStatus})
    }
    render(){
console.log("This is Simple Component",this.state.toggleStatus)
        return(
           <>
            <div>
            <h2>Simple Component</h2>
            <h4>{this.state.count}</h4>
            </div>
            <div>
            <button onClick={this.handleToggle}>SetToggle</button>
           <button onClick={this.handleCounter}>Counter</button>
            </div>
          
           </> 
        )
    }
}














