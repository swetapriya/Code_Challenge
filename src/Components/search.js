import React, {Component} from 'react';
import SearchBar from "./searchbar";
import SearchResult from "./searchresult";

class Search extends Component {
    constructor(){
        super();
        this.state = {
            items: []
        };
    }

    //filter available courses by typing in the search field
    filterSearch = (e) => {
        var updatedList = this.props.data;
        if (e.target.value !== ''){
            updatedList = updatedList.filter(function(item){
                return item.name.toLowerCase().search(
                e.target.value.toLowerCase()) !== -1;
            });
            this.setState({items: updatedList});
        } else {
            this.setState({items: []});
        }
    }

    render(){
        return (
            <div>
                <SearchBar search={this.filterSearch} items = {this.state.items} />
                {(this.state.items) ? <SearchResult data={this.state.items} /> : null  }
            </div>
        )
    }
}

export default Search;