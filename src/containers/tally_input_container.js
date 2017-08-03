import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

//import component
import TallyInputComponent from "../components/tally_input_component.js";

class TallyInputContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            image: ""
        }
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    handleUpdateValue(data) {
        this.props.addData(data);
        this.setState({
            title: "",
            image: ''
        })
    }
    render() {
        return(
            <div>
                     <TallyInputComponent
                        input={this.state}
                        handleChange={this.handleChange}
                        handleClick={this.handleUpdateValue} />
            </div>

         
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(TallyInputContainer); 