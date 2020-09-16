import React from "react";
import { Link } from "react-router-dom";

const style={
	"backgroundColor": "#2ecb9a",
	"color": "#fff"
}

const BottomBar = function(){
	return(
		<div className="afooter">
				<div className="bar">
					<div className="index" style={style}>
						<i className="fa fa-user"></i><span style={{"cursor":"pointer"}}>Utilisateur</span>
					</div>
					<div className="index">
						<Link  to="/contrat">
							<i className="fa fa-file">
								<span style={{marginLeft:"3px","cursor":"pointer"}}>Contrats</span>
							</i>
						</Link>
						<span className="notif-contrats">2</span>
					</div>
					<div className="index">
						<Link  to="/vin">
							<i className="fa fa-car"></i>
							<span style={{marginLeft:"3px","cursor":"pointer"}}>Voiture</span>
						</Link>

					</div>
				</div>
			</div>
	);
}

export default BottomBar;
