import React from "react";

const ChangePwd = function(){
	const onChangePwd = function(){
		console.log("change pwd");
	}
return(
	<div className="form-info bs not-bs d-flex">
	<div className="info-password">
			<label htmlFor="oldPwd">Ancien mot de passe</label><br/>
			<input type="password" className="noborder bs opt"  id="newPwd" placeholder="" autoComplete="new-password" name="newpassword"/>
		</div>
		<div className="info-password">
			<label htmlFor="newPwd">Nouveau mot de passe</label><br/>
			<input type="password" className="noborder bs opt"  id="newPwd" placeholder="" autoComplete="new-password" name="newpassword"/>
		</div>
		<div className="info-password">
			<label htmlFor="conf">Confirmation</label><br/>
			<input type="password" className="noborder bs opt" id="conf" placeholder="" autoComplete="new-password" name="confpassword"/>
		</div>
		<div className="change-btn">
			<button className="btn btn-default green conf-newpwd" onClick={onChangePwd} ><i className="fa fa-edit"></i>Modifier le mot de passe</button>
		</div>
	</div>
);
}

export default ChangePwd;
