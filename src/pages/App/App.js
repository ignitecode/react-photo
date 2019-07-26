import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Favorites from "../Favorites/Favorites";
import {API_URL} from "../../constants";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            images: [],
        };
    }

    /**
     * Retrieves unplash photo information
     */
    componentDidMount() {
        fetch(`${API_URL}?query=ocean&per_page=9`, {
            headers: {
                Authorization: `Client-ID 51d4e3876e7e846aefdc9c0db737f7ab3dc5034b59fda2cbd5d07e2deeac1e3b`
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({ images: res.results });
            console.log(res.results);
        })
    }


    /**
     * Adds a users favorite to an array of favorite images
     * @param image
     */
    addFavorite(image) {
        const { favorites } = this.state;
        this.setState({ favorites: [...favorites, image] });
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Home onFavorite={(image) => this.addFavorite(image)} images={this.state.images} favorites={this.state.favorites} />} />
                    <Route path="/favorites" render={() => <Favorites />} />
                </Switch>
            </Router>
        )
    }
}
