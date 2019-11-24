import React from 'react';
import './main.css';
import { Item } from './Item';
import { Title } from './Title';

class TODOlist extends React.Component {
    constructor() {
        super()
        if (localStorage.getItem('data') != null) {
            if (localStorage.getItem('data').length > 1)
                this.state = { data: JSON.parse(localStorage.getItem('data')) }

        } else {
            this.state = { data: [] }
            localStorage.getItem('data', '[]')
        }

    }
    state = {
        data: []
    }
    LocalSave(data) {
        if (Array.isArray(data) && data != null)
            localStorage.setItem('data', JSON.stringify(data));
    }
    UpdateList() {
        
    }
    DeleteLocal = (e) => {
        const id = parseInt(e.target.id)
        var data = JSON.parse(localStorage.getItem('data'));

        if (Array.isArray(data)) {
            data.forEach((item, index) => {
                if (item != null) {
                    if (item.id === id) {
                        delete data[index]
                    }
                    
                }
            })
            this.LocalSave(data)
        } else {
            localStorage.getItem('data', '[]')
        }
        this.setState({ data: data });
        
    }
    UpdateState = () => {
        if (localStorage.getItem('data') != null) {
            if (localStorage.getItem('data').length > 1)
                this.setState({ data: JSON.parse(localStorage.getItem('data')) })

        } else {
            this.setState({ data: [] })
            localStorage.getItem('data', '[]')
        }
    }
    AddToDo = (e) => {
        var text = document.getElementById("textInput").value;
        if (text.length > 1) {
            const id = this.state.data.length ? this.state.data.length : 0;
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

                {Array.isArray(this.state.data) &&
                    this.state.data.map(item => {
                        if(item != null)
                            return (<Item id={item.id} delete={this.DeleteLocal} text={item.text} key={item.id.toString()} />)
                    })
                }
                {!Array.isArray(this.state.data) && 'loading...' && this.UpdateState()}
            </div>
        )
    }

}
export { TODOlist }