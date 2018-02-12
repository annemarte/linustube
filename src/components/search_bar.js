import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state ={ term: ''};
        //state shall susequently only be changed by this.setState!!
        //but you can read this.state.term...fucked up..inconsistent
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}/>
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;


