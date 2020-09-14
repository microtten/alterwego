import React,{useState} from "react";

// import Pagination from "../../../components/pagination";
import Count from "./count";
import ColumnFilter from "./columnFilter";
import DateFilter from "./dateFilter";
import TableHeader from "./tableHeader";
import LastList from "./lastList";
// <Pagination />
const style = {
	"backgroundColor":"#f7f7f7",
	"marginTop":"4px"
}

const ContentList = function(){
	const [showList, setShowList] = useState(false);
	const [typeDate, setTypeDate] = useState("Date création");
	const onShow = function(){
		setShowList(!showList);
	}
	const onchangeDateDisp = function(e){
		setTypeDate(e);
		setShowList(false);
	}
	return(
		<section className="content">
			<div className="d-flex mb10 pad5 filter size12 pl0">
				<div className="mt0 pad5 bs bgwhite relative">
					<div>
						<i style={{"marginRight":"6px"}} className="fa fa-calendar"></i>
							{typeDate}
						<i onClick={onShow} style={{"marginLeft":"6px"}} className={!showList ? "fa fa-angle-down" :"fa fa-angle-up"}></i>
					</div>
					<div className={!showList ? "d-none" :"show-type"}>
						<div style={style} className="pb5"><label onClick={() => onchangeDateDisp("Date création")} className="vm date">Date création</label></div>
						<div style={style} className="pb5"><label onClick={() => onchangeDateDisp("Date modification")} className="vm date">Date modification</label></div>
					</div>
				</div>
				<DateFilter />
				<Count />
				<ColumnFilter />
			</div>
			<TableHeader />
			<LastList />
		</section>
	);
};

export default ContentList;
