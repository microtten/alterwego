import React from "react";
import { Link } from "react-router-dom";

const Header = function(){
	return(
		<header>
			<div className="first">
				<div className="bs fleft pad5">
					<span><i className="fa fa-search"></i></span>
					<span><i className="fa fa-times-circle"></i>Contrat : <strong>0672222222</strong></span>
					<span><i className="fa fa-times-circle"></i>User : <strong>Nicole</strong></span>
					<span><i className="fa fa-times-circle"></i>Offre : <strong>Twingo II</strong></span>
					<span><i className="fa fa-times-circle"></i>VIN : <strong>048</strong></span>
					<span><i className="fa fa-times-circle"></i></span>
				</div>
				<button className="btn-header green"><i className="fa fa-heart"></i>Ajouter à mes favoris</button>
			</div>
			<div className="second">
			<Link to="/signin">
				<button className="btn-header orange"><i className="fa fa-plus"></i>Créer un utilisateur</button>
			</Link>
				<div className="padt10 fright">
					<p className="notif fleft"><i className="fa fa-bell-o"></i><span>5</span></p>
					<p className="fleft"><span className="mini"></span><strong>Erick M</strong></p>
				</div>
			</div>
		</header>
	)
}

export default Header;
