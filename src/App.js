import React, { Component } from 'react';
import './App.css';
// import FieldForText from './Components/FieldForText';
// import Table from './Components/Table';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            headTable: '',
            bodyTable: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    
    handleSubmit(event) {
        const loadText = this.state.value;
        // loadText = 'First name, Second name, Phone, E-mail, Web; John, Forest, +380979804567, JF@gmail.com, www.JohnForest.com; Iohn, MarkUp, +380975554567, IM@gmail.com, www.IohnMarkUp.com';
        const arr = loadText.split(';');
        const arrThead = arr.splice(0, 1);
        const theadRow = arrThead.join('\n').split(',')
        this.setState({
            headTable: theadRow,
            bodyTable: arr
        })
    }  
    render() {
        return (
        <section>
            <header>
            <h2 className='fieldForText__title'>Load your text</h2>
            <div className='fieldForText__field'>
                <textarea 
                rows = '5'
                cols = '45'
                type = 'text'
                placeholder = 'Text...'
                value = {this.state.value}
                onChange = {this.handleChange}>
                </textarea>
            </div>
            <button className='fieldForText__button' onClick = {this.handleSubmit}>
            Get your table </button>
            </header>
            <main>
                <table>
                    <thead>
                    <tr>
                        {
                            this.state.headTable ? this.state.headTable.map(item => <th key={item}>{item}</th>) : null
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.bodyTable
                        ? this.state.bodyTable.map(row => {
                            return (<tr key={row.split(',')}>{
                                row.split(',').map(cell=>{
                                    return <td key={cell}>{cell}</td>
                                })
                            }</tr>
                            )
                        })
                        : null
                    }
                </tbody>  
                </table> 
            </main>
        </section>
        )
    }

}




