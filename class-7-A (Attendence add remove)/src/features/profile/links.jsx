import React from 'react';
// import React, { Component } from 'react'; // (class Component) use korle ei laine { Component } use kora lagbe

// class Links extends Component{
// 	render(){
// 		const{links}=this.props;
// 		return(
// 			<div>
// 				<p>	<strong>Links:</strong>
// 					<ul>
// 						{links.map(link=>(
// 							<li>
// 								<a href={link.url}>{link.text}</a>
// 							</li>	
// 						))}
// 					</ul>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// xxxxxxxxxxx nicher function ba (Functional component) ta and uporer class (class Component) ekoi kaj jekunu vabe lekha jay but fun is easy

function Links({links}){
	return(
		<div>
			<p>	<strong>Links:</strong>
				<ul>
					{links.map(link=>(
						<li>
							<a href={link.url}>{link.text}</a>
						</li>	
					))}
				</ul>
			</p>
		</div>
	)
}

export default Links;