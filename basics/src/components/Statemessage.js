import React, {Component} from 'react'

/* Functioning of State*/ 


class Statemessage extends Component {

        constructor(){
            super()
            this.state ={
                message: 'Welcome to my channel'
            }
        }

        changeMessage(){
            this.setState({
                message:'Thanks for liking and subscribing'
            })
        }

    render(){
        return (
            <div>
       <h1>{this.state.message}</h1>
       <button onClick={()=> this.changeMessage()}>Like and Subscribe</button>
       </div>
        )
    }
}


export default Statemessage;