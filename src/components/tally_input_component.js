import React from "react";

class TallyInputComponent extends React.Component {
    render() {
        return(
            <div className="row">
                <div className="form-group input">
                    <div className="col-md-6 col-md-offset-1">
                        <input
                            className="form-control"
                            placeholder="Politician name"
                            value={this.props.input.title}
                            onChange={(event)=> {
                                this.props.handleChange("title", event);
                            }} />
                    </div>
                    <div className="col-md-1">
                        <input
                            className="form-control"
                            placeholder="Image url of their face!"
                            value={this.props.input.image}
                            onChange={(event)=> {
                                this.props.handleChange("image", event);
                            }} />
                    </div>
                    <div className="col-md-12 custom-button">
                            <button 
                                onClick={()=> {
                                    this.props.handleClick(this.props.input);
                                }} >Submit</button>
                    </div>
                </div>
          
            </div>
         
        )
    }
}

export default TallyInputComponent; 