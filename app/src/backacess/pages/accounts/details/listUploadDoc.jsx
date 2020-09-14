import React from "react";

const ListUploadDoc = function(){
return(
	<div className="document">
		<div className="title-docx">
			DOCUMENTS
		</div>
		<div className="list-docx d-flex">
			<div className="docx-content">
				<i style={{"color":"#4fdea0"}} className="fa fa-folder-open"></i>
			Documents d'identité<br/>5 fichiers
			</div>
			<div className="docx-content">
				<i className="fa fa-folder-open"></i>
				Permis de conduire
			</div>
			<div className="docx-content">
				<i style={{"color":"#4fdea0"}} className="fa fa-file"></i>
				Justificatif de domicile
			</div>
			<div className="docx-content">
				<i style={{"color":"#4fdea0"}} className="fa fa-file-pdf-o"></i>
				Justificatif de revenus <br />
				5 fichiers
			</div>
		</div>
		<button className="btnlast btn btn-default"><i className="fa fa-edit"></i>Ajouter documents</button>
	</div>
	);
}
export default ListUploadDoc;
