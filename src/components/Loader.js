import React, { Component } from "react"


export default class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
    }
}
