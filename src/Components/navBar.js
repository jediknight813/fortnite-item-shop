//import { useEffect, useState } from "react";
import './styles.css';
import { Link } from 'react-router-dom';

function navBar() {

    return (
        <div className="navBar">

            <Link className="Link" to="/upcomingItems">
                <h1 className="navBarText" > upcoming items </h1>
            </Link>

            <Link className="Link"  to="/currentItems">
                <h1 className="navBarText" > current items </h1>
            </Link>

            <Link className="Link"  to="/GetAllItems">
                <h1 className="navBarText" > all items </h1>
            </Link>


        </div>
    )
}

export default navBar