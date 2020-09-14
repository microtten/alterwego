import React from "react";

import Header from "../../../components/header";
import Sidebar from "../../../components/navigation/sidebar";
import ContentList from "./contentList";
import "../../../../css/user.css";
import "../../../../css/style.css";



const Listing = function(){
	return (
		<div className="container-fluid">
			<div className="wrap">
				<Header />
				<Sidebar />
				<ContentList />
				<div className="clear"></div>
			</div>
			<footer>
				<p className="center">A propos d'Alterwego CCU - CGV - Documents</p>
			</footer>
		</div>
	);
};

export default Listing;
