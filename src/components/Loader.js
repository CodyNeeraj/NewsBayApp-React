import React, { Component } from "react"
import loading from "./loadingAnimation.gif"

export default class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
    }
}
