import React ,{ useState } from "react";
import { Link } from "react-router-dom";

import {dataListing} from "../../../../helpers/dataList";

const LastList = function(){
	const [expanded, setExpanded] = useState(false);
	const [shMinus, setshMinus] = useState(null);

	const showEdit = function (data) {
		if (!expanded) {
			setExpanded(true);
			setshMinus(data._id);
		} else {
			setExpanded(false);
			setshMinus("");
		}
	};
	return(
		<>
			{dataListing.map((user, i) => (
				<div className="list-content bs" key={user._id}>
					<div className="list bs p15 bgwhite">
						<div className="listdata">
							<p>{(user.created.split(" "))[0]} <strong>{(user.created.split(" "))[1]}</strong><i></i></p>
						</div>
						<div className="listdata">
							<p className="">{(user.updated.split(" "))[0]} <strong>{(user.updated.split(" "))[1]}</strong></p>
						</div>
						<div className="listdata">
							<p className="">{user.identity}</p>
						</div>
						<div className="listdata">
							<p className="">{user.contact}</p>
						</div>
						<div className="listdata">
							<p className={user.active == 1 ? "accpte" : (user.active == 2 ? "refs" :"")}>{user.active === 0 ? "Abandon" : (user.active === 1 ? "Oui": "Non") }</p>
						</div>
						<div className="listdata">
							<p className={user.youssign == 1 ? "accpte" : "refs"}>{user.youssign === 0 ? "Non" : "Oui" }</p>
						</div>
						<div className="listdata">
							<p className={user.preAuth == 1 ? "accpte" : (user.preAuth == 2 ? "" :"refs")}>{user.preAuth === 0 ? "Non" : (user.preAuth === 1 ? "Accepté": "Non-saisie") }</p>
						</div>
						<div className="listdata">
							<p className={user.scoring == 1 ? "accpte" : ""}>{user.scoring === 0 ? "Non-traité" : "Accepté" }</p>
						</div>
						<div className="listdata">
							<p className="">{user.dernierCo === 0 ? "Attente signature" : "Attente vin" }</p>
						</div>
						<div className="listdata">
							<p className="">{user.dernierOfr}</p>
						</div>
						<div className="listdata">
							<p className="right">
								<Link to={`/detail/${user.uid}`}><i className="fa fa-edit"></i></Link>
								<i
								className={
									shMinus == user._id
										? "fa fa-minus-circle ic"
										: "fa fa-plus-circle ic"
								}
								onClick={() => showEdit(user)}
							></i>
							</p>
						</div>
					</div>
					<div className={shMinus == user._id ? "hidden p15 bgwhite" : "d-none"}>
						<div className="tb-cell">
							<label className="display vm">Status : </label><input type="checkbox display vm" />
						</div>
						<div className="tb-cell">
							<label className="display vm">Abandon : </label><input type="checkbox display vm" />
						</div>
						<div className="tb-cell">
							<label className="display vm">Paie les loyers : </label><input type="checkbox display vm" />
						</div>
						<div className="tb-cell">
							<label className="display vm">Offres assureurs :</label><input type="checkbox display vm" />
						</div>

						<div className="tb-cell">
							<label className="display vm">Scoring (mail au changement) :</label><input type="checkbox display vm" />
						</div>
						<div className="tb-cell">
							<select className="noborder bs pad5">
								<option value="">Accepté</option>
								<option value="">refusé</option>
							</select>
						</div>
						<div className="tb-group">
							<div className="tb-group1">
								<div className="tb1">
									<label><strong>Genre</strong></label>
									<select className="noborder bs pad5">
										<option>Homme</option>
										<option>Femme</option>
									</select>
								</div>
								<div className="tb1">
									<label><strong>Nom</strong></label>
									<input type="text" className="noborder bs" />
								</div>
								<div className="tb1">
									<label><strong>Prénom</strong></label>
									<input className="noborder bs" type="text" />
								</div>
								<div className="tb1">
									<label><strong>E-mail</strong></label>
									<input type="text" className="noborder bs" />
								</div>
							</div>
							<div className="tb-group2">
								<div className="tb2">
									<label><strong>Téléphone</strong></label>
									<input type="text" className="noborder bs" />
								</div>
								<div className="tb2">
									<label><strong>Adresse</strong></label>
									<input type="text" className="noborder bs" />
								</div>
								<div className="tb2">
									<label><strong>Ville & CP</strong></label>
									<input type="text" className="noborder bs" />
								</div>
							</div>
							<div className="btn-container">
								<button className="btn shadow br-green">Modifier tous les paramètres</button>
								<button className="btn shadow orange">Sauvegarder</button>
							</div>
						</div>
					</div>
				</div>
				)
			)};
		</>
	);

}

export default LastList;
