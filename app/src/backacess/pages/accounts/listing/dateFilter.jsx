import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("fr", fr);


const DateFilter = function({type}){
	const [startDate, setStartDate] = useState("");
	const [lastDate, setLastDate] = useState("");
	const handleChangeSt = function(date){
		setStartDate(date);
	}
	const handleChangeLast = function(date){
		setLastDate(date);
	}
	return(
		<div className="mt0 pad5 bs bgwhite relative d-flex">
			<label>du : </label>
			<div>
			<DatePicker
					selected={startDate}
					dateFormat="dd/MM/yyyy"
					onChange={handleChangeSt}
					className="underline size12"
					locale="fr"
				/>
			</div>
			<div>
			<label>au : </label>
			<DatePicker
				selected={lastDate}
				dateFormat="dd/MM/yyyy"
				onChange={handleChangeLast}
				className="underline size12"
				locale="fr"
			/>
			</div>
		</div>
	);
};

export default DateFilter;
