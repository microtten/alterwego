import React,{useEffect} from "react";
import {useCookies} from "react-cookie";
import { Meteor } from "meteor/meteor";

export default function(ComposedComponent) {
	const Authentication = function(props) {
		// eslint-disable-next-line no-unused-vars
		const [cookies, setCookie] = useCookies(["connected"]);
		useEffect(function() {
			Meteor.call("getTokenHelper",cookies.connected,(err,res) => {
				if (!res) {
					// eslint-disable-next-line react/prop-types
					props.history.replace("/login");
				}
			});
		},[]);

		return(<ComposedComponent {...props} />);
	};
	return(Authentication);
}
