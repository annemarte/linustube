import React , { Component } from 'react';


class SearchButton extends Component {
    constructor(props){
        super(props);

    }

    render() {
            return (
                <div className="search-button column">
                   <figure><img src={window.location+this.props.imageUrl}
                    value={this.props.searchTerm}
                    onClick={event => this.onClick(event.target.value)}/>
                       </figure>
                </div>
            );
        }



    onClick(term){
        this.props.onClicked(this.props.searchTerm);
        console.log("Clicked " + this.props.searchTerm);
    }

}

export default SearchButton;