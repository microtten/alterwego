import React from "react";
import Wysiwyg from "./wysiwyg";

const NewChange = function() {
	return (
		<div className="init-email">
			<div className="mb-2">
				<input
					type="email"
					className="form-control"
					placeholder="Demande d'information supplementaire"
				/>
			</div>
			<div className="mb-1 objmail">Objet du mail</div>
			<Wysiwyg />
			<div className="send-email-btn mb-5">
				<button className="btn btn-default send">
					Envoyé l'e-mail
				</button>
			</div>
		</div>
	);
}

export default NewChange;
