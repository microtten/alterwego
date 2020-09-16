import React from "react";


const Historique = function({data}) {
	return(
		<div className="not-bs">
			{
				data.map((histo,i) => (
						<div className="list-histo  bs d-flex" key={i}>
							<div className="mright hdate">{histo.date}</div>
							<div className="mright hmessage">{histo.message}</div>
							<div className="mright hname">{histo.name}</div>
						</div>
					)
				)
			}
		</div>
	);
};

export default Historique;
