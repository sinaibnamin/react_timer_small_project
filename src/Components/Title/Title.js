import React, {Component} from 'react'
import './Title.css'
class Title extends Component{
    constructor(props){
        super(props)

        this.state = {
            title: 'dummy title',
            isInput: false
        } 
    }
    editHandler(){
        this.setState({
            ...this.state,
            isInput:true
        })

    }

    inputChange(event){
        
        this.setState({
            ...this.state,
            title: event.target.value
        })
    }
    keyPressHandler(event){
        if(event.key == 'Enter'){
            this.setState({
                ...this.state,
                isInput:false
            })
        }
    }
    blurHandler(event){
      
            this.setState({
                ...this.state,
                isInput:false
            })
     
    }


  
    render(){
        let output = null
        if(this.state.isInput){
            output= <div>
                <input className="form-control" type="text" 
                value={this.state.title}
                onBlur= { event=> this.blurHandler(event) }
                onKeyPress= { event => this.keyPressHandler(event) }
                onChange={ (event)=> this.inputChange(event) }
                />
                </div>
        }else{
            output = 
                <div className="d-flex">
                <h1>{this.state.title}</h1>
                <span onClick={ ()=> this.editHandler() } className="btn btn-primary edit-icon">edit</span>
                </div>
            
        }
        return(
            <div>
                {output}
            </div>
        )
    }
}
export default Title