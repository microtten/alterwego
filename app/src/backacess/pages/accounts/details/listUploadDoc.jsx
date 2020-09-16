import React from "react";

const ListUploadDoc = function(){
return(
	<div className="document">
		<h2>
			DOCUMENTS
		</h2>
		<div className="list-docx d-flex">
			<div className="docx-content">
				<div className = "display vm doc-icon"><i style={{"color":"#4fdea0"}} className="fa fa-folder-open"></i></div>
				<div className = "display vm doc-name">
					<p><strong>Documents d'identité</strong></p>
					<p><span> 5 fichiers</span></p>
				</div>
			</div>

			<div className="docx-content">
				<div className = "display vm doc-icon"><i className="fa fa-folder-open"></i></div>
				<div className = "display vm doc-name">
					<p><strong>Permis de conduire</strong></p>
					<p><span> 1 fichiers</span></p>
				</div>
			</div>

			<div className="docx-content">
				<div className = "display vm doc-icon"><i style={{"color":"#4fdea0"}} className="fa fa-file"></i></div>
				<div className = "display vm doc-name">
					<p><strong>Justicatif de domicile</strong></p>
					<p><span>5 fichiers</span></p>
				</div>
			</div>

			<div className="docx-content">
				<div className = "display vm doc-icon"><i style={{"color":"#4fdea0"}} className="fa fa-file-pdf-o"></i></div>
				<div className = "display vm doc-name">
					<p><strong>Justificatif de revenus</strong></p>
					<p><span> 5 fichiers</span></p>
				</div>
			</div>
		</div>
		<div className = "center mb20">
			<button className="btnlast btn btn-default"><i className="fa fa-edit"></i>Ajouter documents</button>
		</div>
	</div>
	);
}
export default ListUploadDoc;
