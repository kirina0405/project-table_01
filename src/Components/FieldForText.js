import React from 'react';
import Table from './Table';
import '../App.css';


export default class FieldForText extends React.Component {
        constructor(props) {
            super(props);
            this.state = { value: '' };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event) {
            this.setState({ value: event.target.value });
        }

        handleSubmit(event) {
            this.buildTable();
        }

            render() {
                return ( 
                    <fieldForText className='fieldForText'>
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
                    </fieldForText>
                );
            }
        }

