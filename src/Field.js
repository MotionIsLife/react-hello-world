/**
 * Created by Iuliia on 20.04.2017.
 */
import React, { Component } from 'react';
class Field extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRequired: props.isRequired,
            isFilling: props.isFilling,
        };
    }

    render() {
        let styleNoField = {border: '2px solid red'};
        let field = this.props.isRequired && !this.props.isFilling?
            <div>
                <input type="text" style={styleNoField} onChange={this.props.onChange}/>
                <p>Это поле является обязательным</p>
            </div> :
            <div>
                <input type="text" onChange={this.props.onChange}/>
            </div>
        return (
            <div>
                {field}
            </div>
        );
    }
}
export default Field;