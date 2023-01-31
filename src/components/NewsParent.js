import React, { Component } from "react"
import Loader from "./Loader"
import NewsItem from "./NewsItem"

export default class NewsParent extends Component {
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(
            this.props.category
        )} - NewsBay`
    }

    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        console.log(url)
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100)
    }
    async componentDidMount() {
        console.log("component mounted")
        await this.updateNews()
        console.log("here i am " + this.articles)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center" style={{ marginTop: "75px" }}>
                        NewsBay Top{" "}
                        {this.capitalizeFirstLetter(this.props.category)}{" "}
                        HeadLines
                    </h1>
                    <Loader />
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return (
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem
                                        title={
                                            element.title ? element.title : ""
                                        }
                                        description={
                                            element.description
                                                ? element.description
                                                : ""
                                        }
                                        imageUrl={element.urlToImage}
                                        newsUrl={element.url}
                                        author={element.author}
                                        date={element.publishedAt}
                                        source={element.source.name}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}
