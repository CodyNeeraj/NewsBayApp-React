import React, { Component } from "react"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            NewsBay
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavAltMarkup"
                        >
                            <div className="navbar-nav">
                                <a
                                    className="nav-link"
                                    aria-current="page"
                                    href="/"
                                >
                                    General
                                </a>
                                <a className="nav-link" href="/">
                                    Business
                                </a>
                                <a className="nav-link" href="/">
                                    Entertainment
                                </a>
                                <a className="nav-link" href="/">
                                    Health
                                </a>
                                <a className="nav-link" href="/">
                                    Science
                                </a>
                                <a className="nav-link" href="/">
                                    Sports
                                </a>
                                <a className="nav-link" href="/">
                                    Technology
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
