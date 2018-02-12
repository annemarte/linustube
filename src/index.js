import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import SearchButton from './components/search_button';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";
import imageUrlLego from './images/lego.jpg';
import imageUrlDino from './images/dinosaurs.jpg';
import imageUrlGodzilla from './images/godzilla.jpg';

//API key to youtube search api
const API_KEY = 'AIzaSyAOGoCxH1UZB7fKAHgCPSiyOAp8GpycYHc';

//react view, redux data

//Create a new component
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('lego ninjago');
    }

    videoSearch(term){
        YTSearch(
            {
                key: API_KEY,
                term: term,
                safeSearch: true,
                maxResults: 10
            },
            (videos) => {
                console.log(videos.length);
            this.setState ({
                videos: videos,
                selectedVideo: videos[Math.floor(Math.random()*videos.length)]//get random video from result
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        //can only be called every 300 milliseconds (throttling)
        return (

            <div>
                <div className="w3-container w3-animate-left w3-animate-zoom">
                     <h1 className="w3-myfont">Velkommen til LinusTube</h1>
                </div>
                <SearchBar
                    onSearchTermChange={videoSearch}/>

                <ul className="ul-menu">
                    <li className="li-menu">
                        <SearchButton
                            onClicked={videoSearch}
                            searchTerm = "lego"
                            imageUrl={imageUrlLego}/>
                    </li>
                    <li className="li-menu">
                        <SearchButton
                            onClicked={videoSearch}
                            searchTerm = "dinosaurs"
                            imageUrl={imageUrlDino}/>
                    </li>
                    <li className="li-menu">
                        <SearchButton
                            onClicked={videoSearch}
                            searchTerm = "godzilla"
                            imageUrl={imageUrlGodzilla}/>
                    </li>
                </ul>
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                        onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                        videos={this.state.videos}/>
            </div>
    );
    }
    //jsx allows html into javascript. niiice.
    // Webpack and babel shall fix it
    }

    //put the component into the DOM
    //use ReactDOM when rendering to the DOM
    // html tags creates an instance of a component
    ReactDOM.render(<App />, document.querySelector('.container'));