import React from 'react';
import { robots } from './robots';
import Cardlist  from './Cardlist';
import SearchBox from './SearchBox';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots:robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield:event.target.value })
    }

    render(){
        const filterRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className="tc">
                <h1>Robots</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <Cardlist robots={filterRobots}/>
            </div>
        );
    }
}

export default App;