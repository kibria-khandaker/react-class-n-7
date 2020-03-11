import React from 'react';
import './index.css';
// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class BasicInputs extends React.Component{

	state = {
		name:'kibria',
		currentProgramming:'',
		gender:'',
		agree:false,
		tools:['React']
	};
	handleChange=e=>{
		this.setState({
			[e.target.name]:e.target.value
		});
	};
	handleTools=e=>{
		let{tools} = this.state;
		if (e.target.checked) {
			tools.push(e.target.value);
		}else{
			tools = tools.filter(tool => tool != e.target.value);
		}
		this.setState({tools});
	};

	render(){		
		return (  
				<div className='inputsDivarea' >

					<div>
						<h1 className='text-danger'>Basic Inputs Elements</h1>
						<input 
							type='text'
							name='name'
							className='from-control'
							value={this.state.name}
							onChange={this.handleChange}
						/>
						{this.state.name && <h3>My Name is - {this.state.name}</h3>}

						<select name='currentProgramming' onChange={this.handleChange}>
							<option value='Java'>Java</option>
							<option value='JavaScript'>JavaScript</option>
							<option value='PHP'>PHP</option>
						</select>
						<div>
							<input 
								type='radio' 
								name='gender' 
								value='Male' 
								onChange={this.handleChange}
							/> Male
							<input 
								type='radio' 
								name='gender' 
								value='Female' 
								onChange={this.handleChange}
							/> Female
							<input 
								type='radio' 
								name='gender' 
								value='Others' 
								onChange={this.handleChange}
							/> Others

						</div>
						<div>
							<input 
								type='checkbox' 
								name='agree' 
								checked={this.state.agree}
								onChange={e=>this.setState({agree:e.target.checked})}
							/> agree to checke
						</div>
						<button className='btn' disabled={!this.state.agree} onClick={() => console.log(this.state)}>
							Show Data
						</button>	
					</div>

					<br/><hr/><br/>

					<div>
						<h1 className='text-danger'>Libraries An Frameworks</h1>
						<div>
							<input 
								type='checkbox' 
								name='tools' 
								value='React' 
								checked={this.state.tools.includes('React')}
								onChange={this.handleTools}
							/> React
							<input 
								type='checkbox' 
								name='tools' 
								value='Angular' 
								checked={this.state.tools.includes('Angular')}
								onChange={this.handleTools}
							/> Angular
							<input 
								type='checkbox' 
								name='tools' 
								value='vue' 
								checked={this.state.tools.includes('vue')}
								onChange={this.handleTools}
							/> Vue
							<input 
								type='checkbox' 
								name='tools' 
								value='PHP' 
								checked={this.state.tools.includes('PHP')}
								onChange={this.handleTools}
							/> PHP
							<input 
								type='checkbox' 
								name='tools' 
								value='Html' 
								checked={this.state.tools.includes('Html')}
								onChange={this.handleTools}
							/> Html
						</div>
						<div>
							<h4 className='text-danger'>My Tech Syack</h4>
							{this.state.tools.map(tool=>(
								<span key={tool} className='spanList' >
									{tool}
									<span className='spanListX' onClick={()=>{
										const tools = this.state.tools.filter(t => t != tool);
										this.setState({tools}); 
									}}>X
									</span>
								</span>
							))}
						</div>
					</div>

				</div>
			);
		}
	}
export default BasicInputs;