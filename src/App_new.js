import React, { Component } from 'react';
import './App.css';
import FieldForText from './Components/FieldForText';
import Table from './Components/Table';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { value: '' }
    }
    render() {
        return (
        <section className='container'>
            <div className='row'>
                <FieldForText/>
            </div>
            <div className='row'>
                <Table/>
            </div>
        </section>
        )
    }

}