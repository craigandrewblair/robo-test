import React, { Component } from 'react'
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/Search/Search';
import './App.css';
import { robots } from '../components/Robots/Robots';
import Scroll from '../components/Scroll/Scroll'

class App extends Component {

    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({robots: users});
                console.log('componentDidMount');
            });
    }

    onSearchChange = (event) => {
        this.setState({
            searchField: event.target.value
        });
        console.log(event.target.value);
    }

    render(){
        // Search box filter feature
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log('render');
        // if response fails or takes time
        if(!robots.length){
            return <h2>Loading....</h2>
        }else{
        return (
            <div className='tc'>
                <h1 className='ma4'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    {/* Child of scroll */}
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )}
    }
    
}

export default App;
