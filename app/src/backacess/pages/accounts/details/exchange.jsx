import React ,{useState} from "react";

import Email from "../../change/email";
import Title from "../../change/title";
import NewChange from "../../change/newChange";

const Exchange = function(){
	const [changeSubject, setChangeSubject] = useState({type:0});
	return (
		<div className="aside wysig">
			<Title onChangeSub={(type) => {
				setChangeSubject(type)
			}} />
			{changeSubject === 1 ? (<NewChange />) : (<Email />)}

		</div>
	)
}

export default Exchange;
