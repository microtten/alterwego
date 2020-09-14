import React  from "react";
import LoaderPage from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = function({isLoad}){
	if(isLoad) {
		return(
			<div className="loader text-center" style={{"width":"50%","margin":"0 auto"}}>
				<LoaderPage type="Rings" color="#00BFFF" height={80} width={80}  />
			</div>
		);
	} else {
		return(<></>);
	}

};

export default Loader;
