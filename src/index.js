import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux";

import reducers from "./reducers/";

import thunk from "redux-thunk";

//import CSS
import "./styles.css";

//import containers
import Navbar from "./components/navbar.js";
import TallyInputContainer from "./containers/tally_input_container.js";
import TallyListContainer from "./containers/tally_list_container.js";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
    render() {
        return(
            <div>
                    <div className="container-fluid">
                        <div className="row">
                            <Navbar />
                        </div>
                    <div className="container">
                        <TallyInputContainer />
                        <TallyListContainer />
                    </div>
                   
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));