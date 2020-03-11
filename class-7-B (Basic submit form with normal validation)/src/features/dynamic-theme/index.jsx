import React from 'react';
import './index.css';



// sub Component
const ChildA =() =>(
	<div className='ChildA'>
	<p>i am a Child A</p>
	</div>
);
const ChildB =() =>(
	<div className='ChildB'>
	<p>i am a Child B</p>
	</div>
);

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class DynamicTheme extends React.Component{
	state={
		isDark:false
	};
	toggleTheme = () =>{
		this.setState({isDark: !this.state.isDark});
	};
	render(){
		const {isDark} = this.state
		return (  
				<div className={ isDark ? 'wrapper Dark' : 'wrapper Light'}>
					{isDark ? <ChildA /> : <ChildB />}
					<h1>Theme code my</h1>
					<button onClick={this.toggleTheme} className='btn'>{isDark ? 'Go Light': 'Go Dark'}</button>
					
				</div>
			);
		}
	}
export default DynamicTheme;