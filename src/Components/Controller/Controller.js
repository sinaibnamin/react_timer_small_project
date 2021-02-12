import React, {Component} from 'react'
class Controller extends Component{
    constructor(props){
        super(props)
        this.state ={
            start : true,
            pause: false,
            lap: false,
            reset: false
        }
    }
    startHandler(){
        this.setState({
            ...this.state,
            start : false,
            pause: true,
            lap: true,
        })
         this.props.start()
    }
    pauseHandler(){
        this.setState({
            ...this.state,
            start : true,
            pause: false,
            lap: false,
            reset: true

        })
        this.props.pause()
    }
    resetHandler(){
        this.setState({
            
            start : true,
            pause: false,
            lap: false,
            reset: false

        })
        this.props.reset()
    }
    lapHandler(){
      
        this.props.lap()
    }
    getController(){
        let output = null
        if(this.state.start && !this.state.reset){
            output = (
                <div>
                    <button 
                    onClick={ event => this.startHandler(event) }
                    className="btn btn-success mx-3">start</button>
                </div>
            )
        }else if(this.state.pause && this.state.lap){
            output = (
                <div>
                    <button 
                    onClick={ event => this.pauseHandler(event) }
                    className="btn btn-primary mx-3">pause</button>
                     <button 
                    onClick={ event => this.lapHandler(event) }
                    className="btn btn-warning mx-3">lap</button>
                </div>
               
            )
        }else if(this.state.start && this.state.reset){
            output = (
                <div>
                    <button 
                    onClick={ event => this.startHandler(event) }
                    className="btn btn-primary mx-3">start</button>
                     <button 
                    onClick={ event => this.resetHandler(event) }
                    className="btn btn-warning mx-3">reset</button>
                </div>
               
            )
        }
        return output
    }
    render(){
        return this.getController()
        
    }
}

export default Controller