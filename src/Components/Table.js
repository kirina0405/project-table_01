import React from 'react';
import FieldForText from './FieldForText';
import '../App.css';


export default class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.buildTable = this.buildTable.bind(this);
    }

    buildTable(event) {
        const loadText = this.state.value;
        
        const arr = loadText.split('\n');
        const arrThead = arr.splice(0, 1);
        // console.log(arrThead);
        const theadRow = arrThead.join('\n').split(',').map((arrTheadItem) => <th>{arrTheadItem}</th>);
        // console.log(theadRow);
        const rows = arr.map((row) => <tr>{row.split(',').map((cell) => <td>{cell}</td>)}</tr>);  
        alert(rows);
    } 

    renderTable() {
        return ( 
            <Table className='table'>
                <table>
                    <thead>
                        <tr>{this.theadRow}</tr>
                    </thead>
                    <tbody>
                        {this.rows}
                    </tbody>  
                </table> 
            </Table>
        )
    }

}    