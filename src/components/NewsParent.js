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

    // articles = {
    //     status: "ok",
    //     totalResults: 59360,
    //     articles: [
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: null,
    //             title: "How drones could be the future of Indian farming",
    //             description:
    //                 "Companies in India are encouraging farmers to switch to drones - but is that working?",
    //             url: "https://www.bbc.co.uk/news/av/world-asia-india-64248510",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/17B0D/production/_128273079_p0dvtkk5.jpg",
    //             publishedAt: "2023-01-15T02:50:40Z",
    //             content:
    //                 "Indias agricultural sector has usually not kept pace with new technology, relying largely on traditional methods. \r\nBut start-ups specialising in drone technology are trying to change that - one farm… [+481 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "Himachal Pradesh: Thousands despair as India Adani plants shut down",
    //             description:
    //                 "Many locals in India's Himachal Pradesh state say that they have lost their only source of income.",
    //             url: "https://www.bbc.co.uk/news/world-asia-india-64174225",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/3932/production/_128224641_darlaghatcementplant.jpg",
    //             publishedAt: "2023-01-08T22:37:52Z",
    //             content:
    //                 "\"I don't know what our fault is. What have we done to deserve this?\" says a distraught Kanta Sharma, pointing to a shuttered cement plant in the northern Indian state of Himachal Pradesh.\r\nIt's one o… [+4115 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: null,
    //             title: "Man saved from being pulled under moving train in India",
    //             description:
    //                 "A soldier from India's Railway Protection Force rescued a man who fell from a train in eastern India.",
    //             url: "https://www.bbc.co.uk/news/av/world-asia-india-64168391",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/160BC/production/_128200309_p0dt3hw2.jpg",
    //             publishedAt: "2023-01-04T17:16:26Z",
    //             content:
    //                 "A man was saved from being pulled under a moving train at a station in Purnea District, eastern India.\r\nThe man was rescued by a soldier from India's Railway Protection Force (RPF) after he tripped a… [+196 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "India and Pakistan came close to nuclear war: Pompeo",
    //             description:
    //                 'US officials helped avert a "nuclear conflagration" in 2019, former Secretary of State Mike Pompeo says.',
    //             url: "https://www.bbc.co.uk/news/world-asia-india-64396138",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/8BB0/production/_128406753_9c7d7360-1fd5-4d56-b02b-38441ca3eb17.jpg",
    //             publishedAt: "2023-01-25T06:15:58Z",
    //             content:
    //                 'India and Pakistan came "close" to a "nuclear conflagration" in February 2019, former US Secretary of State Mike Pompeo has said in his new memoir.\r\nThis happened after Delhi launched strikes against… [+3090 chars]',
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "Jharkhand: India bans tourism at holy Jain site after protests",
    //             description:
    //                 "Sammed Shikharji is an important pilgrimage site for the Jain community and falls in an eco-sensitive zone.",
    //             url: "https://www.bbc.co.uk/news/world-asia-india-64183215",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/A943/production/_128213334_gettyimages-1246011967-594x594-1.jpg",
    //             publishedAt: "2023-01-06T05:40:12Z",
    //             content:
    //                 "The Indian government has banned tourism activities at an important pilgrimage site for the Jain community.\r\nSammed Shikharji is located in an environmentally sensitive area atop Jharkhand state's hi… [+1504 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "Pele: When India fell in and out of love with the 'wizard of football'",
    //             description:
    //                 "Mass hysteria gripped the city of Kolkata when Pele arrived in 1977 to play his first match in India.",
    //             url: "https://www.bbc.co.uk/news/world-asia-india-63869476",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/1D0D/production/_127973470_picture-1.jpg",
    //             publishedAt: "2022-12-30T01:10:55Z",
    //             content:
    //                 "Do you like to be addressed as Your Excellency, Mr Pele? a reporter in the eastern Indian city of Kolkata (then Calcutta) asked the football legend during his three-day-trip to play an exhibition gam… [+6956 chars]",
    //         },
    //         {
    //             source: { id: "reuters", name: "Reuters" },
    //             author: null,
    //             title: "INDIA RUPEE Rupee searches for direction around familiar ... - Reuters India",
    //             description:
    //                 "The Indian rupee briefly rose against the dollar above a level that's being closely watched by traders, but was unable to pierce it convincingly.",
    //             url: "https://www.reuters.com/world/india/india-rupee-rupee-searches-direction-around-familiar-resistance-level-2023-01-20/",
    //             urlToImage:
    //                 "https://www.reuters.com/resizer/eQsj3ASBfvbyK49DGQtuhVWa1tc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WAAW5TV62RLNHNIKJLQPCTMEYU.jpg",
    //             publishedAt: "2023-01-20T05:31:00Z",
    //             content:
    //                 "MUMBAI, Jan 20 (Reuters) - The Indian rupee briefly rose against the dollar above a level that's being closely watched by traders, but was unable to pierce it convincingly.\r\nThe rupee was trading at … [+1555 chars]",
    //         },
    //         {
    //             source: { id: "reuters", name: "Reuters" },
    //             author: null,
    //             title: "India investigates Food Corporation officials for possible corruption ... - Reuters India",
    //             description:
    //                 "India's federal police are investigating officials of the state-run Food Corporation of India (FCI) for possible corruption in the purchase and distribution of grains, a government source told Reuters on Wednesday.",
    //             url: "https://www.reuters.com/world/india/india-investigates-food-corporation-officials-possible-corruption-source-2023-01-11/",
    //             urlToImage:
    //                 "https://www.reuters.com/resizer/RQ9BTqJBO5QE4qP_1IEv5IbQlYc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZCZ3NLVKD5MUTLCEN66GNXFDOI.jpg",
    //             publishedAt: "2023-01-11T08:29:00Z",
    //             content:
    //                 "NEW DELHI, Jan 11 (Reuters) - India's federal police are investigating officials of the state-run Food Corporation of India (FCI) for possible corruption in the purchase and distribution of grains, a… [+555 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "Surendran Pattel: The US judge who once made cigarettes in India",
    //             description:
    //                 "Surendran K Pattel's inspiring rise from a life of grinding poverty has made headlines in India.",
    //             url: "https://www.bbc.co.uk/news/world-asia-india-64232516",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/168E1/production/_128258329_267394947_1820655514748044_8217048808796807729_n.png",
    //             publishedAt: "2023-01-12T04:55:02Z",
    //             content:
    //                 "Last week, when Indian-origin lawyer Surendran K Pattel took oath as a district judge in a US court, he made headlines back home because of his inspiring journey. BBC Hindi's Imran Qureshi tells the … [+4856 chars]",
    //         },
    //         {
    //             source: { id: "bbc-news", name: "BBC News" },
    //             author: "https://www.facebook.com/bbcnews",
    //             title: "Marion Biotech: Uzbekistan links child deaths to India cough syrup",
    //             description:
    //                 "The latest allegation comes weeks after The Gambia blamed Indian syrups for child deaths.",
    //             url: "https://www.bbc.co.uk/news/world-asia-india-64114240",
    //             urlToImage:
    //                 "https://ichef.bbci.co.uk/news/1024/branded_news/156CA/production/_128145778_coughsyrup.jpg",
    //             publishedAt: "2022-12-29T06:31:35Z",
    //             content:
    //                 "Uzbekistan's health ministry has said that 18 children have died after drinking a cough syrup manufactured by Indian drug maker Marion Biotech.\r\nThe ministry said that preliminary tests showed a batc… [+3301 chars]",
    //         },
    //     ],
    // }

    async updateNews() {
        // this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        console.log(url)
        this.setState({ loading: true })
        let data = await fetch(url)
        // this.props.setProgress(30)
        let parsedData = await data.json()
        // this.props.setProgress(70)
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
