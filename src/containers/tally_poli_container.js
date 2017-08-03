import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

//import component
import TallyPoliComponent from "../components/tally_poli_component";

class TallyPoliContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.politician,
            edit: false,
            comment: "",
            showComments: false
        };
        autoBind(this);
    }

    handleChange(key, event) {
        this.setState({
            [key]: event.target.value
        })
    }

    toggleEdit() {
        this.setState({
            edit: !this.state.edit,
            
        })
    }

    handleComment(event) {
        this.setState({
            comment: event.target.value
        })
    }

    toggleComments() {
        this.setState({
            showComments: !this.state.showComments
        })
    }

    render() {
        return(
         <TallyPoliComponent
            politician={this.props.politician}
            handleChange={this.handleChange}
            input={this.state}
            handleRemove={this.props.handleRemove}
            handleUpVote={this.props.voteUp}
            handleDownVote={this.props.voteDown}
            handleUpdate={this.props.changeData}
            handleToggle={this.toggleEdit}
            handleComment={this.handleComment}
            addComment={this.props.addComment}
            toggleComments={this.toggleComments}
         />
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchersToProps)(TallyPoliContainer); 