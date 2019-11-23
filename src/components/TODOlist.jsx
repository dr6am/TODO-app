import React from 'react';
import './main.css';
import {Item} from './Item';

class TODOlist extends React.Component{
    
    state={
        data:[]
    }
    AddToDo=(e)=>{
        const id = this.state.data.lenght;
        const text = document.getElementById("textInput").value;
        if(text.length >1){
            const element = [{id: id, text:text}]
            const newarray = this.state.data.concat(element)
            this.setState({data: newarray})
        }
    }
    render(){
        return(
            <div id="content">
                <div id="form">
                    <input type="text" name="text" id="textInput"/>
                    <button id="addBtn" onClick={this.AddToDo}>add</button>
                    
                </div>
                {this.state.data.map(item=><Item key={item.id} text={item.text}/>)}
            </div>
        )
    }
   
}
export  {TODOlist}