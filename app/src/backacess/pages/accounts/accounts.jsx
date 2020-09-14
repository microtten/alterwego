import React,{useState,useEffect} from "react";
import { Meteor } from "meteor/meteor";
import {useCookies} from "react-cookie";
import { withRouter } from "react-router-dom";
// import { useTracker } from "meteor/react-meteor-data";
import Loader from "../../components/loader";
import Listing from "./listing/listing";

const Accounts = function({history, ...props}) {
	const[isLoader,setLoader] = useState(true);
	const [cookies, setCookie] = useCookies(["connected"]);

	useEffect(function() {
		Meteor.call("getTokenHelper",cookies.connected,(err,res) => {
			if (!res) {
				history.replace("/login");
			}
		});
		setLoader(false);
	},[]);
	return(
		<div className="users">
			{isLoader ? (
				<Loader isLoad={isLoader} />
			) : (
				<Listing />
			)}

		</div>
	);
};

export default withRouter(Accounts);
