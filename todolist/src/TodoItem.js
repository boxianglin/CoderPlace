import React, { Component, Fragment } from 'react';

class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render(){
        return (
                <div onClick={this.handleClick}>
                    {this.props.content}
                </div>)
    }

    //calling the father component method
    handleClick(){
        this.props.handleItemDelete(this.props.index);
    }
}
export default TodoItem; 