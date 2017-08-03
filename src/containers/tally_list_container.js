import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/";

//import component
import TallyListComponent from "../components/tally_list_component";

class TallyListContainer extends React.Component {
    componentWillMount() {
        this.props.loadData()
    }
    render() {
        return(
         <TallyListComponent 
            politicians={this.props.politicians}
            handleRemove={this.props.deleteData}
            addComment={this.props.comment} />
        )
    }
}

const mapStateToProps = (state)=> {
    return state;
}

const mapDispatchersToProps = (dispatch)=> {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(TallyListContainer); 