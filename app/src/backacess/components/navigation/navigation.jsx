import React from "react";


const Navigation = function(){
	const signoutUser = function(){
      console.log("dec");
    };
	return(
		<nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
		<div className="collapse navbar-collapse" id="navbarSupportedContent" style={{"position": "absolute","right": "0"}}>
			<ul className="navbar-nav mr-auto">
				<button className="btn btn-default" onClick={signoutUser}>
					Déconnexion
				</button>
             </ul>
		</div>
		</nav>
	);
};

export default Navigation;
