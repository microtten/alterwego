import React from "react";


const ColumnFilter = function(){
	return(
		<div className="display mt0 pad5 bs size12 bgwhite drpdwn relative">
			<i className="fa fa-bars rotate"></i>
			<p className="display">Toutes les colonnes <i className="fa fa-angle-down"></i></p>
			<div className="hide options padt5 absolute">
				<p className="pb5"><label className="display vm">Crée le</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Modifié le</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Identié</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Contact</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Activé</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Yousign</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Pre-auth</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Scoring</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Dernier CO</label><input className="display vm fright" type="checkbox" /></p>
				<p className="pb5"><label className="display vm">Dernière OFR</label><input className="display vm fright" type="checkbox" /></p>
			</div>
		</div>
	);
};

export default ColumnFilter;
