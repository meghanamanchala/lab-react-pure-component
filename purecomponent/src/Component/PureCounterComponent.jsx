import { PureComponent } from "react";

export default class PureCounterComponent extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            count:0,
            toggleStatus : false,
        };

    }
    handleToggle = () =>{
        this.setState({...this.state,toggleStatus: !this.state.toggleStatus})
    }
    handleInc = () =>{
        if(!this.state.toggleStatus){
            this.setState({...this.state,count:this.state.count + 1})
        }else{
            this.setState({...this.state,count:this.state.count })
        }
    }
    render(){
        console.log("This is Pure Component",this.state.toggleStatus)
        return(
            <>
            <div>
            <h2>Pure Component</h2>
            <h4>{this.state.count}</h4>
            </div>
            <div>
            <button onClick={this.handleToggle}>SetToggle</button>
           <button onClick={this.handleInc}>Counter</button>
            </div>
          
           </>
        )
    }
}