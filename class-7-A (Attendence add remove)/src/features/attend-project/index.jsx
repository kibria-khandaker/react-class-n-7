import React from 'react';
import './index.css';


// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class AttendanceProject extends React.Component{
	state={
		name:'',
		attendees:['Mr. X'],
		leaves:['Mr. Y']
	};
	render(){
		return (  
				<div className='AttendanceDiv'>
					<h1>Attendance Project</h1>
					<input
						type='text'
						className='form-control'
						value={this.state.name}
						onChange={e=>this.setState({name: e.target.value})}
						onKeyPress={e => {
							if(e.key == 'Enter'){
								this.setState({
									attendees:this.state.attendees.concat(
										this.state.name
									),
									name:''
								});
							}
						}}
					/>
					<br/>

					<div className='attendanceList'>
						<h4>Attendees List</h4>
						<ul className='ListGroup'>
							{this.state.attendees.map(a => <li key={a}>
								<span>{a}</span>
								<button 
								className='attendLiveBtn'
								onClick={()=>{
										const attendees = this.state.attendees.filter( at => at != a );
										const leaves = [... this.state.leaves, a];
										this.setState({attendees,leaves});
									}}
								>
								Leave
								</button>
							</li>
							)}							
						</ul>						
					</div>
					<div className='leavesList'>
						<h4>Leaves List</h4>
						<ul className='ListGroup'>
							{this.state.leaves.map(l => <li key={l}>
								<span>{l}</span>
							</li>
							)}							
						</ul>
					</div>

				</div>
			);
		}
	}
export default AttendanceProject;