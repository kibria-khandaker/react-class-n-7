import React from 'react';
// import React, { Component } from 'react'; // (class Component) use korle ei laine { Component } use kora lagbe

import PersonalInfo from './personal-info';
import Skills from './skills';
import Links from './links';

// class Profile extends Component{
// 	render(){
// 		const{ info:{name,email,bio,phone}, skills, links }=this.props;
// 		return(
// 			<div>
// 				<PersonalInfo name={name} email={email} bio={bio} phone={phone}/>
// 				<Skills skills={skills} />
// 				<Links links={links} />
// 			</div>
// 		);
// 	}
// }

// xxxxxxxxxxx nicher function ba (Functional component) ta and uporer class (class Component) ekoi kaj jekunu vabe lekha jay but fun is easy

function Profile({info:{name,email,bio,phone}, skills, links}){
	return(
		<div>
			<PersonalInfo name={name} email={email} bio={bio} phone={phone}/>
			<Skills skills={skills} />
			<Links links={links} />
		</div>
	);
}
export default Profile;