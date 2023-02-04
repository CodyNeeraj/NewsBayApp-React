import "./App.css"
import Navbar from "./components/Navbar"
import NewsParent from "./components/NewsParent"
import LoadingBar from "react-top-loading-bar"
import { Route, Routes } from "react-router-dom"

import React, { Component } from "react"

export default class App extends Component {
    pageSize = 100
    api_key = process.env.REACT_APP_NEWS_API_KEY
    state = {
        progress: 100,
    }

    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    render() {
        return (
            <div>
                <Navbar />
                <LoadingBar
                    height={2}
                    color="#2696f0"
                    progress={this.state.progress}
                />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="general"
                            pageSize={this.pageSize}
                            country="in"
                            category="general"
                        />
                    />
                    <Route
                        exact
                        path="/business"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="business"
                            pageSize={this.pageSize}
                            country="in"
                            category="business"
                        />
                    />
                    <Route
                        exact
                        path="/entertainment"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="entertainment"
                            pageSize={this.pageSize}
                            country="in"
                            category="entertainment"
                        />
                    />
                    <Route
                        exact
                        path="/health"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="health"
                            pageSize={this.pageSize}
                            country="in"
                            category="health"
                        />
                    />
                    <Route
                        exact
                        path="/science"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="science"
                            pageSize={this.pageSize}
                            country="in"
                            category="science"
                        />
                    />
                    <Route
                        exact
                        path="/sports"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="sports"
                            pageSize={this.pageSize}
                            country="in"
                            category="sports"
                        />
                    />
                    <Route
                        exact
                        path="/technology"
                        element=<NewsParent
                            setProgress={this.setProgress}
                            apiKey={this.api_key}
                            key="technology"
                            pageSize={this.pageSize}
                            country="in"
                            category="technology"
                        />
                    />
                </Routes>
            </div>
        )
    }
}
