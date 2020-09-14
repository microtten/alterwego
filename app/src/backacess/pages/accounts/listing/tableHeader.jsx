import React from "react";


const TableHeader = function(){
	return(
		<div className="title">
				<div className="select-style mb10 p10">
					<div className="col-list">
						<p>crée le <i className="fa fa-sort"></i></p>
					</div>
					<div className="col-list">
						<p>modifié le<i className="fa fa-sort"></i></p>
					</div>
					<div className="col-list">
						<p>identité <i className="fa fa-sort"></i></p>
					</div>
					<div className="col-list">
						<p>contact <i className="fa fa-sort"></i></p>
					</div>
					<div className="col-list dpdwn">
						<p className="line">activé <i className="fa fa-angle-down"></i></p>
						<div className="hide">
							<p className="pb5"><label className="display vm">Oui</label><input className="display vm fright" type="checkbox"/></p>
							<p className="pb5"><label className="display vm">Non</label><input className="display vm fright" type="checkbox"/></p>
						</div>
					</div>
					<div className="col-list dpdwn">
						<p className="line">yousign<i className="fa fa-angle-down"></i></p>
						<div className="hide">
							<p className="pb5"><label className="display vm">Oui</label><input className="display vm fright" type="checkbox"/></p>
							<p className="pb5"><label className="display vm">Non</label><input className="display vm fright" type="checkbox"/></p>
						</div>
					</div>
					<div className="col-list dpdwn">
						<p className="line">pre-auth <i className="fa fa-angle-down"></i></p>
						<div className="hide">
							<p className="pb5"><label className="display vm">Accepté</label><input className="display vm fright" type="checkbox"/></p>
							<p className="pb5"><label className="display vm">Réfusé</label><input className="display vm fright" type="checkbox"/></p>
						</div>
					</div>
					<div className="col-list dpdwn">
						<p className="line">scoring <i className="fa fa-angle-down"></i></p>
						<div className="hide">
							<p className="pb5"><label className="display vm">Accepté</label><input className="display vm fright" type="checkbox"/></p>
							<p className="pb5"><label className="display vm">Non traité</label><input className="display vm fright" type="checkbox"/></p>
						</div>
					</div>
					<div className="col-list dpdwn">
						<p className="line">dernier co <i className="fa fa-angle-down"></i></p>
						<div className="hide">
							<p className="pb5"><label className="display vm">Signature</label><input className="display vm fright" type="checkbox"/></p>
							<p className="pb5"><label className="display vm">VIN</label><input className="display vm fright" type="checkbox" /></p>
						</div>
					</div>
					<div className="col-list">
						<p>dernière ofr <i className="fa fa-angle-down"></i></p>
					</div>
				</div>
			</div>
	);
};

export default TableHeader;
