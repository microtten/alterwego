import React from "react";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import {useCookies} from "react-cookie";
import { v4 as uuidv4 } from "uuid";

const ConnectAs = function(props) {
	const token = uuidv4();
	const uid = uuidv4();
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie] = useCookies(["connected"]);
	const onSetSession = function(){
		let data = {};
		data.uid = "uid_"+uid;
		data.cookies = token;
		setCookie("connected",data,{
			maxAge: 60*60,
			secure: false,
			httpOnly: false
		});
		data.role = "admin";
		Meteor.call("redisHelper",data);

		// eslint-disable-next-line react/prop-types
		props.history.replace("/");
	};

	return(
		<div className="main">
			<div className="" style={{"width":"50%","margin":"0 auto"}}>
				<button className="btn btn-default" style={{"backgroundColor":"#ffb000"}} onClick={onSetSession}>Click pour se connecté</button>
			</div>
		</div>
	);
};

export default withRouter(ConnectAs);
