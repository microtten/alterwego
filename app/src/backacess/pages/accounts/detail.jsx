import React from "react";
// import { Meteor } from "meteor/meteor";

import Content from "./details/content";
import Exchange from "./details/exchange";
import Resume from "./details/resume";
import Header from "../../components/header";
import Sidebar from "../../components/navigation/sidebar";
import "../../../css/style_edit.css";

const Detail = function(){
	return (
		<div className="container-fluid">
			<div className="wrap">
				<Header />
				<Sidebar />
				<Resume />
				<Content />
				<Exchange />
			</div>
			<footer>
				<p className="center">A propos d'Alterwego CCU - CGV - Documents</p>
			</footer>
		</div>
	);
};

export default Detail;
