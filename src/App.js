import React, { Component } from 'react';
import './App.css';
import FieldForText from './Components/FieldForText';
import Table from './Components/Table';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        const loadText = this.state.value;
        
        const arr = loadText.split('\n');
        const arrThead = arr.splice(0, 1);
        // console.log(arrThead);
        const theadRow = arrThead.join('\n').split(',').map((arrTheadItem) => <th>{arrTheadItem}</th>);
        // console.log(theadRow);
        const rows = arr.map((row) => <tr>{row.split(',').map((cell) => <td>{cell}</td>)}</tr>);  
        alert(rows);
    }  
      
    // render() {    
    //     return ( 
    //         <table>
    //             <thead>
    //                 <tr>{this.theadRow}</tr>
    //             </thead>
    //             <tbody>
    //                 {this.rows}
    //             </tbody>  
    //         </table> 
    //     )
    // };

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
                    <tr>{this.theadRow}headerTable</tr>
                </thead>
                <tbody>
                    {this.rows}rowsTable
                </tbody>  
                </table> 
            </main>
        </section>
        )
    }

}



//     loadText = 'First name, Second name, Phone, E-mail, Web; John, Forest, +380979804567, JF@gmail.com, www.JohnForest.com; Iohn, MarkUp, +380975554567, IM@gmail.com, www.IohnMarkUp.com';

