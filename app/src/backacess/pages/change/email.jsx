import React from "react";
import Wysiwyg from "./wysiwyg";

import "../../../../css/change.css";

const Email = function () {
	const onSend = function () {
		console.log("hello");
	};

	return (
		<div className="init-email">
			<div className="info-exp">
				Email expéditeur (partie avant @alterwego.fr)
			</div>
			<div className="mb-2">
				<input
					type="email"
					className="form-control"
					placeholder="Exemple:Assurrance"
				/>
			</div>
			<div className="mb-1 objmail">Objet du mail</div>
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
};

export default Email;
