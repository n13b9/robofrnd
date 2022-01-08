import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
// import {robots} from './robots.js'
import Searchbox from '../components/SearchBox.js'
import "./App.css";
import Scroll from '../components/Scroll.js'
import ErrorBoundary from '../components/ErrorBoundary.js'




class App extends Component{
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>this.setState({robots: users}))
		
	}

	onSearchChange =(event) => {
		this.setState({searchfield: event.target.value})
		
		// console.log(filteredRobots);
	}

	render() {
		const {robots, searchfield} = this.state // de-structuring
		const filteredRobots = robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			if(!robots.length){
					return <h1> Loading </h1>
			}else {

				return (
					<div className="tc">
						<h1 className="f1"> RobotFriends </h1>
						<Searchbox searchChange={this.onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								< Cardlist robots={filteredRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
	);
		}
		

	}

	

};

export default App;