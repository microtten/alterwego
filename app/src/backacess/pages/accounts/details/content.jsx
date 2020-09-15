import React from "react";
import { useForm } from "react-hook-form";
import Historique from "./historique";
import ChangePwd from "./changePwd";
import {dataHisto} from "../../../../helpers/dataHisto";
import ListUploadDoc from "./listUploadDoc";
import BottomBar from "../../../components/navigation/bottomBar";


const Content = function(){
	const { register, handleSubmit,setValue} = useForm();

	return(
		<div className="content">
			<h2 className="fleft">Informations personnelles</h2>
			<ul className="fright link">
				<li className="fleft padr10"><a href="#">Documents</a></li>
				<li className="fright"><a href="#">Historique des echanges</a></li>
			</ul>
			<div className="clear"></div>
			<div className="form-data">
				<form>
					<div className="form-info bs pad13 check">
						<div className="form1 statut tb-cell">
								<label className="form-check-label display vm" htmlFor="statut">Statut :</label>
								<input
									type="checkbox"
									className="form-check-input display vm"
									id="statut"
									name="statut"
									ref={register()}
								/>
						</div>
						<div className="form1 abandon tb-cell">
								<label className="form-check-label display vm" htmlFor="abandon">Abandon :</label>
								<input type="checkbox"
									className="form-check-input display vm"
									id="abandon" name="abandon"
									ref={register()}
								/>
						</div>
						 <div className="form1 tb-cell">
								<label className="form3-label display vm" htmlFor="paie">Paie les loyers:</label>
								<input type="checkbox"
									className="form-check-input display vm"
									id="paie" name="loyers"
									ref={register()}
									/>
						  </div>
						<div className="form1 tb-cell">
								<label className="form-check-label display vm" htmlFor="offre">Offre Assureurs:</label>
								<input type="checkbox"
									className="form-check-input display vm"
									id="offre" name="assureur" />
						</div>
						<div className="form1 scoring">
						  	<label htmlFor="scoring">Scoring (mail au changement) : </label>
						    <select className="form-control" id="scoring" name="scoring" ref={register()}>
						      <option value="traite">Traité</option>
						      <option value="non">Non-traité</option>
						    </select>
						</div>
					</div>
					<div className="form-info bs not-bs">
						<div className="field">
							<label>Genre</label><br/>
							<input type="text" name="" placeholder=""/>
						</div>
						<div className="field">
							<label>Nom</label><br/>
							<input type="text" name="" placeholder=""/>
						</div>
						<div className="field">
							<label>Prénom</label><br/>
							<input type="text" name="" placeholder=""/>
						</div>
						<div className="field">
							<label>E-mail</label><br/>
							<input type="text" className="email-field" name="" placeholder=""/>
						</div>
						<div className="info">
							<div className="info-supp">
								<label>Téléphone</label><br/>
								<input type="text" name="" placeholder=""/>
							</div>
							<div className="info-supp">
								<label>Adresse</label><br/>
								<input type="text" name="" placeholder=""/>
							</div>
							<div className="info-supp">
								<label>Ville & CP</label><br/>
								<input type="text" name="" placeholder=""/>
							</div>
						</div>
					</div>
					<div className="form-info bs not-bs">
						<div className="info-bq d-flex">
							<div className="info-bq-detail">
							    <label htmlFor="banque">Banque</label>
							    <select className="form-control" id="banque" name="banque" ref={register()}>
							      <option value="hsbc">HSBC</option>
							      <option value="bfv">BFV</option>
							      <option value="credit">CREDIT AGRICOLE</option>
							    </select>
							</div>
							<div className="info-bq-detail">
							    <label htmlFor="anciennete">Ancienneté</label>
							    <select className="form-control" id="anciennete" name="anciennete" ref={register()}>
							      <option value="2018">2018</option>
							      <option value="2017">2017</option>
							    </select>
							</div>
							<div className="info-bq-detail">
							    <label htmlFor="situation">Situation permis</label>
							    <select className="form-control" id="situation" name="situation" ref={register()}>
							      <option value="2ans">2 ans ou plus jamais suspendu</option>
							      <option value="3ans">3 ans</option>
							    </select>
							</div>
						</div>
					</div>
					<div className="form-info bs not-bs row info-source">
						<div className="col-sm-4">
							<label htmlFor="og_source">OG_Source</label>
							<input type="text"
								className="form-control"
								id="og_source"
								placeholder=""
								name="source"
								ref={register()}
							/>
						</div>
							<div className="col-sm-4">
								<label htmlFor="cclid">CClid</label>
								<input type="text"
									className="form-control"
									id="cclid" placeholder=""
									ref={register()}
									name="cclid"
								/>
							</div>
							<div className="col-sm-3 urlss">
								<label htmlFor="url_source">URL_Source</label>
								<input type="text"
									className="form-control"
									id="url_source" placeholder=""
									name="url"
									ref={register()}
								/>
							</div>
					</div>
					<div className="not-bs" style={{"fontWeight":"bold"}}>
						MODIFIER MON MOT DE PASSE
					</div>
					<ChangePwd />
					<div className="not-bs save">
						<button className="btnlast btn btn-default"><i className="fa fa-edit"></i>Sauvegarder</button>
					</div>
					<ListUploadDoc />
					<div style={{"fontWeight":"bold","textTransform":"uppercase"}}>
						Historique des échanges
					</div>
				</form>
				<Historique data={dataHisto} />
			</div>
			<BottomBar />
		</div>
	)
};

export default Content;
