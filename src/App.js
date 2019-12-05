import React, {Component} from 'react';
import Home from './Components/home';
import Search from './Components/search';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        axios.get('http://localhost:8000/lessons')
            .then(res => res.data)
            .then( (data) => {
                this.setState(
                    {data}
                )
            }
        );  
    }

    //arrow function for sort the courses by duration
    onSortbyduration = () => { 
        const {data} = this.state;
        this.setState({
            data : data.sort((a,b) => a.duration.localeCompare(b.duration))
        })
    }

    //arrow function for sort the courses by publishDate
    onSortbydate = () => {
        const {data} = this.state;
        this.setState({
            data : data.sort((a,b) => a.publishDate.localeCompare(b.publishDate))
        })
    }

    render() {
        return ( 
            <div className="App">
                <Search data = {this.state.data}/>  
                <Home
                    data = {this.state.data} 
                    sortByDuration= {this.onSortbyduration}
                    sortByDate= {this.onSortbydate} 
                />
            </div>
        );
    }
}

export default App;
