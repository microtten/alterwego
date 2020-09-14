import React from "react";
import { Link } from "react-router-dom";

const Sidebar = function(){
	return(
		<nav className="menu">
			<div className="logo">
				<h1><img src="images/icons/logo.png" alt=""/></h1>
			</div>
			<li><a href="#" className="bground dashboard">Dashboard</a></li>
			<li><a href="#" className="bground mod">Modèles</a></li>
			<li><a href="#" className="bground offres">Offres</a></li>
			<li>
				<Link className="bground contrats" to="/vin">VIN</Link>
			</li>
			<li>
				<Link className="bground users" to="/">Utilisateurs</Link>
			</li>
			<li><a href="#" className="bground call">Appels</a></li>
			<li>
				<Link className="bground contrats" to="/contrat">Contrats</Link>
			</li>
			<li><a href="#" className="bground parc">Parc roulant</a></li>
			<li><a href="#" className="bground payd">Paiments</a></li>
			<li><a href="#" className="bground advis">Avis</a></li>
			<li><a href="#" className="bground attr">Attributs</a></li>
			<li><a href="#" className="bground faq">FAQ</a></li>
			<li><a href="#" className="bground stat">Statistiques</a></li>
		</nav>
	)
}

export default Sidebar;
