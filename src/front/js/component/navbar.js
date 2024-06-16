import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	function submitlogout() {
		actions.logout()
		navigate("/")
	}

	return (
		<nav className="navbar navbar-light bg-light" style={{background:"white"}}>
			<div className="container">
				<div className="ml-auto">
				</div>
				<div className="ml-auto">
					<Link to="/signup">
						<button className="btn btn-outline-primary" style={{marginRight:"15px"}}>Signup</button>
					</Link>
			 
					{store.authentication === false ? 
					<Link to="/login">
						<button className="btn btn-outline-primary" style={{marginRight:"15px"}}>Login</button>
					</Link>
					:""}

					<Link to="/private">
						<button className="btn btn-outline-primary" style={{marginRight:"15px"}}>Private</button>
					</Link>

					{store.authentication === true ? <button onClick={()=>submitlogout()} className="btn btn-danger">Logout</button>:""}
						 
					 
				</div>
			</div>
		</nav>
	);
};