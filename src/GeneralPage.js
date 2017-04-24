/**
 * Created by Iuliia on 20.04.2017.
 */
import React, { Component } from 'react';
import Field from './Field';

class GeneralPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "",
            isFil1: false,
            isFil2: false,
            isFil3: false,
            isFil4: false,
            isFilling1: false,
            isFilling2: false,
            isFilling3: false,
            isFilling4: false,
        };
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
    }

    onChange1 = (e) => {
        this.setState({isFil1: e.target.value !== "", isFilling1: e.target.value !== "" });
    }

    onChange2 = (e) => {
        this.setState({isFil2: e.target.value !== "", isFilling2: e.target.value !== "" });
    }

    onChange3 = (e) => {
        this.setState({isFil3: e.target.value !== "", isFilling3: e.target.value !== ""  });
    }

    onChange4 = (e) => {
        this.setState({isFil4: e.target.value !== "", isFilling4: e.target.value !== ""  });
    }

    render() {
        let isRequired = true;
        let isDisabled = !(this.state.isFil1 && this.state.isFil2 && this.state.isFil3 && this.state.isFil4);
        return (
            <div className="App">
                <Field isRequired={isRequired} isFilling={this.state.isFilling1} onChange={this.onChange1}/> <br/>
                <Field isRequired={isRequired} isFilling={this.state.isFilling2} onChange={this.onChange2}/><br/>
                <Field isRequired={isRequired} isFilling={this.state.isFilling3} onChange={this.onChange3}/><br/>
                <Field isRequired={isRequired} isFilling={this.state.isFilling4} onChange={this.onChange4}/><br/>
                <button disabled={isDisabled}>Click</button>
            </div>
        );
    }
}

export default GeneralPage;