import React,{useState,useEffect} from "react";
import { withRouter } from "react-router-dom";
// import { useTracker } from "meteor/react-meteor-data";
import Listing from "./listing/listing";

const Accounts = function({history, ...props}) {
	const[isLoader,setLoader] = useState(true);

	return(
		<div className="users">
			<Listing />
		</div>
	);
};

export default withRouter(Accounts);
