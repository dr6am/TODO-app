import React from 'react';
import './main.css';
import { Item } from './Item';
import { Title } from './Title';

class TODOlist extends React.Component {
    constructor() {
        super()
        
        try {
            this.state = { data: JSON.parse(localStorage.getItem('data')) }
        } catch (e) {
            this.state = { data: [] }
            localStorage.getItem('data', '[]')
        }

    }
    state = {
        data: []
    }
    LocalSave(data) {
        localStorage.setItem('data', JSON.stringify(data));
    }
    static DeleteLocal(e) {
        const id = e.target.id
        var oldData = JSON.parse(localStorage.getItem('data'));
        var newData;
        oldData.forEach((item, index) => {
            if (item.id !== id) {
                newData += item
            }
        })

        localStorage.setItem('data', JSON.stringify(newData));
        this.setState({ data: newData })

        console.log(e.target.id)
    }
    AddToDo = (e) => {
        var text = document.getElementById("textInput").value;
        if (text.length > 1) {
            const id = this.state.data.lenght || 0;
            console.log(this.state.data.length)
            const element = [{ id: id, text: text }];
            const newarray = this.state.data.concat(element);
            this.LocalSave(newarray);
            this.setState({ data: newarray });
        }
        text = null;

    }
    render() {
        return (
            <div id="content">
                <Title />
                <div id="form">
                    <input type="text" name="text" id="textInput" />
                    <button id="addBtn" onClick={this.AddToDo}>add</button>

                </div>
                {this.state.data.map(item => <Item key={item.id} id={item.id} delete={this.DeleteLocal} text={item.text} />)}
            </div>
        )
    }

}
export { TODOlist }