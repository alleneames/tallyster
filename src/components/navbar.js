import React from "react";

class Navbar extends React.Component {
    render() {
        return(
           <div>
             <nav className="navbar navbar-default custom-navbar navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><img className="img-responsive" id="nav-image" src="../images/nav_star.png" alt="Tallyster"/></a>
                    </div>
                    <h1 id="nav-title">Tallyster</h1>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="https://le.utah.gov/Documents/find.htm">Find your Representative</a></li>
                    </ul>
                </div>
            </nav>
            </div>
          
        )
    }
}

export default Navbar;