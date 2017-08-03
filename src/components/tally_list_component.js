import React from "react";

//import poli container
import TallyPoliContainer from "../containers/tally_poli_container.js";

class TallyListComponent extends React.Component {
    genPoliticians() {
        return this.props.politicians.sort((a,b)=> {
            return (a.upvote - a.downvote) - (b.upvote - b.downvote)
        }).map((item, index)=> {
            return <TallyPoliContainer
                index={index}
                key={index + item._id}
                politician={item}
                handleRemove={this.props.handleRemove}
                addComment={this.props.addComment} />
        })
    }
    render() {
        return(
            <div>
                {this.genPoliticians()}
            </div>
        )
    }
}

export default TallyListComponent; 