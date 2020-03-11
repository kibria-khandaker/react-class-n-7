import React from 'react';

class Tasks extends React.Component{
	state = {
		tasks:[
				{ id: 1, text: 'some data', isComplete:false },
				{ id: 2, text: 'some data', isComplete:true },
				{ id: 3, text: 'some data', isComplete:false },
				{ id: 4, text: 'some data', isComplete:false },
				{ id: 5, text: 'some data', isComplete:true },
				{ id: 6, text: 'some data', isComplete:false },
				{ id: 7, text: 'some data', isComplete:false },
				{ id: 8, text: 'some data', isComplete:false },
				{ id: 9, text: 'some data', isComplete:false },
				{ id: 10, text: 'some data', isComplete:true },
				{ id: 11, text: 'some data', isComplete:true },
			]
	}; 

	toggoleComplete = id =>{
		const { tasks } = this.state;
		const task = tasks.find( task => task.id === id );
		task.isComplete = !task.isComplete;
		this.setState({ tasks });
	};

	render(){

		const{tasks} = this.state;		
		return(
			<div className='App'>

				<h3>Tasks:</h3>
				<ul className='ul_class'>
					{tasks.map(task => (
						<li key={task.id}>
							<span style={{textDecoration:task.isComplete ? 'line-through':'none' }} >
								{task.text}
							</span>
							<span className={`${task.isComplete ? 'bg_green':'bg_red'}`} onClick={()=> this.toggoleComplete(task.id)} >
								{task.isComplete ? 'Completed' : 'Not Complete'}
							</span>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
export default Tasks;



// {` ${task.isComplete ? 'ul_class':'ul_class bg_green'}`}

// {`${task.isComplete ? 'bg_red':'bg_green'}`}