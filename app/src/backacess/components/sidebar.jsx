import React from "react";

const Sidebar = function(){
	return(
		<div className="menu">
			<div className="logo">
				<h1><img src="public/images/icons/logo.png" alt=""/></h1>
			</div>
			<li><a href="#" className="dashboard">Dashboard</a></li>
			<li><a href="#">Modèles</a></li>
			<li><a href="#">Offres</a></li>
			<li><a href="#">VIN</a></li>
			<li><a href="#">Utilisateurs</a></li>
			<li><a href="#">Appels</a></li>
			<li><a href="#">Contrats</a></li>
			<li><a href="#">Parc roulant</a></li>
			<li><a href="#">Paiments</a></li>
			<li><a href="#">Avis</a></li>
			<li><a href="#">Attributs</a></li>
			<li><a href="#">FAQ</a></li>
			<li><a href="#">Statistiques</a></li>
		</div>
	)
}

export default Sidebar;
