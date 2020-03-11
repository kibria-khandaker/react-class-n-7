import React from 'react';
import './index.css';

const DEFAULT_VALUE = {
		name:'',
		email:'',
		password:''	
};



const InputElement = ({name,label,type,placeholder,value,onChange,error}) => (
		<div className='form-groupBox'>
			<label className='form-labelText' htmlFor={name}>{label}</label>
			<input 
				className={`form-inputBox ${error ? 'is-invalid' : ''}`}
				type={type} 
				name={name}
				id={name}
				placeholder={placeholder} 
				value={value} 
				onChange={onChange} 
			/>
			{error && <div className='invalid-feedback'>{error}</div>}
		</div>
	);


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class BasicForm extends React.Component{
	state = {
		values:DEFAULT_VALUE,
		errors:{}
	};

	handleChange = e => {
		this.setState({
			values:{
				...this.state.values,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const{isValid,errors} = this.validateForm();

		if(isValid){
			console.log(this.state.values);
			e.target.reset();
		 }else{
		 	this.setState({errors});
		 }
	};

	validateForm = () =>{
		const {name,email,password}=this.state.values
		const errors = {}

		// NAme
		if (!name) {
			errors.name = 'Please provide your name.'
		}else if(name.length > 10){
			errors.name = 'Name is too Long'
		}

		// Email
		if (!email){
			errors.email = 'Please provide your Email.'
		}

		// Password
		if (!password){
			errors.password = 'Please provide your Password.'
		}else if(password.length < 5){
			errors.password = 'password is too Short'
		}else if(password.length > 8){
			errors.password = 'password is too Long'
		}

		return{
			errors,
			isValid: Object.keys(errors).length === 0
		};
	};

	render(){
		const{values:{name,email,password},errors}=this.state;
		return (  
				<div className='BasicFormDiv'>
					<h1>React Basic Form</h1>
					<form 
						onSubmit={this.handleSubmit} 
						onReset={() => this.setState({values:DEFAULT_VALUE, errors:{}})} 
					>

						<InputElement
							name='name'
							label='Name:'
							type='text'
							placeholder='Kibria'
							value={name}
							error={errors.name}
							onChange={this.handleChange}
						/>
						<InputElement
							name='email'
							label='Email:'
							type='email'
							placeholder='Kibria@gmail.com'
							value={email}
							error={errors.email}
							onChange={this.handleChange}
						/>
						<InputElement
							name='password'
							label='Password:'
							type='password'
							placeholder='*******'
							value={password}
							error={errors.password}
							onChange={this.handleChange}
						/><br/>
						<button className='form-submit' type='submit'>
							Submit
						</button>
					</form>
				</div>
			);
		}
	}
export default BasicForm;