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
									className="display vm"
									id="statut"
									name="statut"
									ref={register()}
								/>
						</div>
						<div className="form1 abandon tb-cell">
								<label className="form-check-label display vm" htmlFor="abandon">Abandon :</label>
								<input type="checkbox"
									className="display vm"
									id="abandon" name="abandon"
									ref={register()}
								/>
						</div>
						 <div className="form1 tb-cell">
								<label className="form3-label display vm" htmlFor="paie">Paie les loyers :</label>
								<input type="checkbox"
									className="display vm"
									id="paie" name="loyers"
									ref={register()}
									/>
						  </div>
						<div className="form1 tb-cell">
								<label className="form-check-label display vm" htmlFor="offre">Offre Assureurs : </label>
								<input type="checkbox"
									className="display vm"
									id="offre" name="assureur" />
						</div>
						<div className="form1 scoring">
						  	<label htmlFor="scoring">Scoring (mail au changement) : </label>
						    <select className="noborder bs opt" id="scoring" name="scoring" ref={register()}>
						      <option value="traite">Traité</option>
						      <option value="non">Non-traité</option>
						    </select>
						</div>
					</div>
					<div className="form-info pad13 bs not-bs">
						<div className="field">
							<label>Genre</label><br/>
							<select className="opt noborder bs">
								<option>Homme</option>
								<option>Femme</option>
							</select>
						</div>
						<div className="field">
							<label>Nom</label><br/>
							<input type="text" name="" className="noborder bs" placeholder=""/>
						</div>
						<div className="field">
							<label>Prénom</label><br/>
							<input type="text" className="noborder bs" name="" placeholder=""/>
						</div>
						<div className="field">
							<label>E-mail</label><br/>
							<input type="text" className="noborder bs email-field" name="" placeholder=""/>
						</div>
						<div className="info">
							<div className="info-supp">
								<label>Téléphone</label><br/>
								<input type="text" name="" className="noborder bs" placeholder=""/>
							</div>
							<div className="info-supp">
								<label>Adresse</label><br/>
								<input type="text" name="" className="noborder bs" placeholder=""/>
							</div>
							<div className="info-supp">
								<label>Ville & CP</label><br/>
								<input type="text" name="" className="noborder bs" placeholder=""/>
							</div>
						</div>
					</div>
					<div className="form-info bs pad13 not-bs">
						<div className="info-in1">
							<div className="info-bq-detail">
							    <label htmlFor="banque">Banque</label><br/>
							    <select className="noborder bs opt" id="banque" name="banque" ref={register()}>
							      <option value="hsbc">HSBC</option>
							      <option value="bfv">BFV</option>
							      <option value="credit">CREDIT AGRICOLE</option>
							    </select>
							</div>
							<div className="info-bq-detail">
							    <label htmlFor="anciennete">Ancienneté</label><br/>
							    <select className="noborder bs opt" id="anciennete" name="anciennete" ref={register()}>
							      <option value="2018">2018</option>
							      <option value="2017">2017</option>
							    </select>
							</div>
							<div className="info-bq-detail">
							    <label htmlFor="situation">Situation permis</label><br/>
							    <select className="noborder bs opt" id="situation" name="situation" ref={register()}>
							      <option value="2ans">2 ans ou plus jamais suspendu</option>
							      <option value="3ans">3 ans</option>
							    </select>
							</div>
						</div>
						<div className="info-in2">
							<div className="info-bq-detail">
							    <label htmlFor="banque">Situation assurance</label><br/>
							    <select className="noborder opt bs" id="banque" name="banque" ref={register()}>
							      <option value="sinistre">0 ou 1 sinistre en 3 ans</option>
							      <option value="sinistre">0 ou 1 sinistre en 3 ans</option>
							      <option value="sinistre">0 ou 1 sinistre en 3 ans</option>
							    </select>
							</div>
							<div className="info-bq-detail">
							    <label>Encours</label><br/>
								<input type="text" name="" className="noborder bs opt" placeholder=""/>
							</div>
						</div>
					</div>
					<div className="form-info bs pad13 not-bs info-source">
						<div className="display">
							<label htmlFor="og_source">OG_Source</label><br/>
							<input type="text"
								className="noborder bs opt"
								id="og_source"
								placeholder=""
								name="source"
								ref={register()}
							/>
						</div>
							<div className="display">
								<label htmlFor="cclid">CClid</label><br/>
								<input type="text"
									className="noborder bs opt"
									id="cclid" placeholder=""
									ref={register()}
									name="cclid"
								/>
							</div>
							<div className="display urlss">
								<label htmlFor="url_source">URL_Source</label><br/>
								<input type="text"
									className="noborder bs opt"
									id="url_source" placeholder=""
									name="url"
									ref={register()}
								/>
							</div>
					</div>
					<div className="not-bs" style={{"fontWeight":"bold"}}>
						<h2>Modifier mot de passe</h2>
					</div>
					<ChangePwd />
					<div className="not-bs save">
						<button className="btnlast btn btn-default"><i className="fa fa-edit"></i>Sauvegarder</button>
					</div>
					<ListUploadDoc />
					<div className="histo">
						<h2>Historique des échanges</h2>
					</div>
				</form>
				<Historique data={dataHisto} />
			</div>
			<BottomBar />
			
		</div>
	)
};

export default Content;
