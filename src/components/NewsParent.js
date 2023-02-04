import React, { Component } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
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
    async componentDidMount() {
        await this.updateNews()
    }
    async updateNews() {
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: await parsedData.articles,
            totalResults: await parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100)
    }

    async fetchMoreData() {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1
                        className="text-center"
                        style={{ marginTop: "75px", marginBottom: "20px" }}
                    >
                        NewsBay Top{" "}
                        {this.capitalizeFirstLetter(this.props.category)}{" "}
                        HeadLines
                    </h1>
                    {this.state.loading && <Loader />}
                    <InfiniteScroll
                        dataLength={40}
                        next={this.fetchMoreData}
                        hasMore={
                            this.state.articles.length !==
                            this.state.totalResults
                        }
                        loader={<Loader />}
                    />
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
                    {/* <InfiniteScroll /> */}
                </div>
            </div>
        )
    }
}
