import React from 'react';
// import React, { Component } from 'react'; // (class Component) use korle ei laine { Component } use kora lagbe

// class PersonalInfo extends Component{
// 	render(){
// 		const{name,email,bio,phone}=this.props;
// 		return(
// 			<div>
// 				<h3> Name: {name}</h3>
// 				<p><strong>Email: </strong> {email}</p>
// 				<p><strong>Bio: </strong> {bio}</p>
// 				{/* {phone ? <p><strong>Phone: </strong> {phone}</p> : null} niche moto likleo hobe eilainta */}
// 				{phone && <p><strong>Phone: </strong> {phone}</p>}
// 			</div>
// 		)
// 	}
// }

// xxxxxxxxxxx nicher function ba (Functional component) ta and uporer class (class Component) ekoi kaj jekunu vabe lekha jay but fun is easy

function PersonalInfo({name,email,bio,phone}){
	return(
		<div>
			<h3> Name: {name}</h3>
			<p><strong>Email: </strong> {email}</p>
			<p><strong>Bio: </strong> {bio}</p>
			{phone && <p><strong>Phone: </strong> {phone}</p>}
		</div>
	)	
}

export default PersonalInfo;