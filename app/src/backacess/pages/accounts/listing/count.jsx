import React,{useState} from "react";


const Count = function(){
	const [count, setCount] = useState(10);
	const onChangeCount = function(e){
		setCount(e);
	}
	return(
	<div className="mt0 pad5 bs size12 bgwhite drpdwn relative lot">
		<i className="fa fa-bars pr5"></i>
		<p className="display">{count}<i className="fa fa-angle-down pl10"></i></p>
		<div className="hide options padt5 absolute">
			<p className="pb5"><label onClick={() => onChangeCount(10)} className="display vm">10</label></p>
			<p className="pb5"><label onClick={() => onChangeCount(20)} className="display vm">20</label></p>
			<p className="pb5"><label onClick={() => onChangeCount(30)} className="display vm">30</label></p>
			<p className="pb5"><label onClick={() => onChangeCount(40)} className="display vm">40</label></p>
			<p className="pb5"><label onClick={() => onChangeCount(50)} className="display vm">50</label></p>
			<p className="pb5"><label onClick={() => onChangeCount(100)} className="display vm">100</label></p>
		</div>
	</div>
	);
};

export default Count;
