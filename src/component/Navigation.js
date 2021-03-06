import React,{Component} from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component{

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Git Engine</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link active" aria-current="page" to="/allUsers">All Users</Link>
                        <Link className="nav-link active" aria-current="page" to="/search">Search</Link>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation