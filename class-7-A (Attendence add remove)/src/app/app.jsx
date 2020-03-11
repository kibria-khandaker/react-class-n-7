import React, { Component } from 'react';/* 8.4K (gzipped:3.4k) eita dile run kore na*/
import './app.css';

// import DynamicTheme from '../features/dynamic-theme';
// import BasicInputs from '../features/inputs';
import AttendanceProject from '../features/attend-project';

// render sam jsx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
class App extends Component{
	render(){
		return <div className='App'>
			<AttendanceProject />
		</div>;
		}
	}
export default App;