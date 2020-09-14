import React from "react";


const Historique = function({data}) {
	return(
		<div className="not-bs">
			{
				data.map((histo,i) => (
						<div className="row list-histo" key={i}>
							<div className="col-sm-2">{histo.date}</div>
							<div className="col-sm-6">{histo.message}</div>
							<div className="col-sm-4">{histo.name}</div>
						</div>
					)
				)
			}
		</div>
	);
};

export default Historique;
