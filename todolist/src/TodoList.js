import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    render(){    
        return (
            //JSX syntax
            <Fragment> 
                {/* to do comments in JSX*/}
                <div> 
                    <label htmlFor='insertArea'> Please Enter: </label>
                    <input 
                        id = "insertArea"
                        className = 'input'
                        value = {this.state.inputValue} 
                        onChange = {this.handleInputChange}
                    /> 
                    <button onClick = {this.handleBtnClick}> 
                        Submit 
                    </button>
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    
    getTodoItem(){
        return this.state.list.map((item, index) => {
            return (
                <div key = {index}> 
                    <TodoItem content={item} 
                              index={index}
                              handleItemDelete={this.handleItemDelete}
                    />
                        {/* <li key={index} 
                            onClick={this.handleItemDelete.bind(this, index)}
                            dangerouslySetInnerHTML={{__html: item}}   
                        >
                        </li> */}
                </div>
            )       
        })
    }

    handleInputChange(e){
        this.setState(()=> {
            return {
                inputValue: e.target.value
            }
        })

        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleBtnClick(){
        this.setState((prevState)=> ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))

        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: ''
        // })
    }

    handleItemDelete(index){
        // immutable for state (specification only)
        // const newList = [...this.state.list];
        // newList.splice(index, 1);
        // this.setState(
        //     {
        //         list: newList
        //     }
        // )
        this.setState((prevState)=> {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
    }
}

export default TodoList