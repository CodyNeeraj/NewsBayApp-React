import "./App.css"
import Navbar from "./components/Navbar"
import NewsParent from "./components/NewsParent"
import LoadingBar from "react-top-loading-bar"

import React, { Component } from "react"

export default class App extends Component {
    pageSize = 100
    api_key = process.env.REACT_APP_NEWS_API_KEY
    state = {
        progress: 0,
    }

    setProgress = (progress) => {
        this.setState({ progress: progress })
    }
    render() {
        return (
            <div>
                <Navbar />
                {/* <LoadingBar
                    height={3}
                    color="#f11946"
                    progress={this.state.progress}
                /> */}

                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.api_key}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                />

                {/* <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="business"
                    pageSize={this.pageSize}
                    country="in"
                    category="Business"
                />
                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                />
                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                />
                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="Science"
                    pageSize={this.pageSize}
                    country="in"
                    category="Science"
                />
                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                />
                <NewsParent
                    // setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                /> */}
            </div>
        )
    }
}
