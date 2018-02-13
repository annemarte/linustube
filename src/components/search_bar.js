import React, { Component } from 'react';


class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state ={ term: ''};
        //state shall susequently only be changed by this.setState!!
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit =this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({term: event.target.value});
       // this.props.onSearchTermChange(this.state.term);
    }

    //stop the form from submitting
    onFormSubmit(event){
        event.preventDefault();
        this.props.onSearchTermChange(this.state.term);
        this.setState({term: ''});
    }


    render() {

        return (
            //just makes it easier to handle enterkey and button as one
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    type="text"
                    placeholder="Skriv inn søkeord her. F.eks 'zombie' ;) "
                    className ="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Søk </button>
                </span>
            </form>
        );
    }



}

export default SearchBar;


