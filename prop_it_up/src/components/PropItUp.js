import React, {Component} from 'react';

class PersonCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
        }
        
        render(){
            return(
                <div>
            <h1>{this.props.lastName}, {this.props.firstName} </h1>
            <p>Age: {this.state.age}</p>
            Hair Color: {this.props.hairColor} <br/> <br/>
            <button onClick={ () => { this.setState({age: this.state.age + 1 }) }}> Birthday for {this.props. firstName} {this.props.lastName}</button>
        </div>
        )
    }
}

export default PersonCard