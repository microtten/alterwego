import React ,{useState} from "react";
import "../../../css/change.css";

const Title = function ({onChangeSub}) {
	const [changeShow, setchangeShow] = useState(0);
	const onDiffSub = function(e){
		onChangeSub(e)
		setchangeShow(e)
	}
	return (
		<div className="init-title">
			<div className="title d-flex">
				<div className={changeShow === 0 ? "col-sm-6 title-email active-email" : "col-sm-6 title-email"} onClick={()  => onDiffSub(0)}>E-MAIL</div>
				<div className={changeShow === 1 ? "col-sm-6 title-echange ligne active-email" : "col-sm-6 title-echange ligne"} onClick={()  => onDiffSub(1)}>échange</div>
			</div>
		</div>
	);
};

export default Title;
