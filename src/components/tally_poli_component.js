import React from "react";

class TallyPoliComponent extends React.Component {
    genComments() { console.log(this.props)
        return this.props.politician.comments.map((item, i)=> {
            return (<p key={item + i}>{item}</p>);
            });
        }
    render() {
        return(
            <div>
                <div className="col-md-2 custom-col">
                    <div className="poli-image" style={{backgroundImage:`url('${this.props.politician.image}')`}}>
                        <button id="remove"
                            onClick={()=> {
                                this.props.handleRemove(this.props.politician._id);
                            }} >X
                        </button>
                    </div>
                    <div className="row">
                    <div className="col-md-12 titles">
                    <h4 className="test" >{this.props.politician.title}</h4>
                    <h5 className="upvote test">{this.props.politician.upvote} </h5>
                    <h5 className="downvote test">{this.props.politician.downvote} </h5>
                    
                    </div>
                    </div>
                   
                    <input 
                        value={this.props.input.title}
                        onChange={(event)=> {
                            this.props.handleChange("title", event);
                        }}
                        style={{display: this.props.input.edit ? "inherit":"none"}} />
                    <input 
                        value={this.props.input.image}
                        onChange={(event)=> {
                            this.props.handleChange("image", event);
                        }}
                        style={{display: this.props.input.edit ? "inherit":"none"}} />
                    <button onClick={()=> {
                            this.props.handleUpdate(this.props.politician._id, this.props.input);
                            this.props.handleToggle();
                        }} 
                        style={{display: this.props.input.edit ? "inherit":"none"}}
                        >Save</button>
                        
                        <button id="upvote" onClick={()=> {
                                this.props.handleUpVote(this.props.politician._id);
                            }} >+</button>
                        <button id="downvote" onClick={()=> {
                                this.props.handleDownVote(this.props.politician._id);
                        }} >-</button>
                        
                    <button id="edit" onClick={()=> {
                            this.props.handleToggle();
                        }} 
                        style={{display: this.props.input.edit ? "none":"inherit"}}
                        >Edit</button>

                    <textarea value={this.props.input.comment} onChange={(event)=> {
                        this.props.handleComment(event);
                    }}></textarea>
                    <button onClick={()=> {
                        this.props.addComment(this.props.politician._id, this.props.input.comment);
                    }} ></button>
                    <button onClick={this.props.toggleComments} >Show Comments</button>
                    <p style={{display: this.props.input.showComments ? "inherit" : "none"}} >{this.genComments()}</p>
                    
                </div>

            </div>
        )
    }
}

export default TallyPoliComponent; 