import React from 'react';
import './main.css';

class TODOlist extends React.Component{
    
    state={
        data:[]
    }
    AddToDo=(e)=>{
        const id = this.state.data.lenght;
        const element = [{id: id, text:document.getElementById("textInput").value}]
        const newarray = this.state.data.concat(element)
        this.setState({data: newarray})
    }
    render(){
        return(
            <div id="content">
                <div id="form">
                    <input type="text" name="text" id="textInput"/>
                    <button id="addBtn" onClick={this.AddToDo}>add</button>
                </div>
            </div>
        )
    }
   
}
export  {TODOlist}