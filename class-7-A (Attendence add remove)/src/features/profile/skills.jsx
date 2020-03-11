import React from 'react';
// import React, { Component } from 'react'; // (class Component) use korle ei laine { Component } use kora lagbe

// class Skills extends Component{
// 	render(){
// 		const{skills}=this.props;
// 		return(
// 			<div>
// 				<p>	<strong>Skils:</strong>
// 					<ul>
// 						{skills.map(skill=>(
// 							<li>{skill}</li>
// 						))}
// 					</ul>
// 				</p>
// 			</div>
// 		)
// 	}
// }
 
// xxxxxxxxxxx nicher function ba (Functional component) ta and uporer class (class Component) ekoi kaj jekunu vabe lekha jay but fun is easy

function Skills({skills}){
	return(
		<div>
			<p>	<strong>Skils:</strong>
				<ul>
					{skills.map(skill=>(
						<li>{skill}</li>
					))}
				</ul>
			</p>
		</div>
	);	
}

export default Skills;