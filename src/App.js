import "./App.css"
import Navbar from "./components/Navbar"
import NewsParent from "./components/NewsParent"

function App() {
    let pageSize = 100
    const api_key = process.env.REACT_APP_NEWS_API_KEY
    return (
        <div>
            <Navbar />
            <NewsParent
                apiKey={api_key}
                key="general"
                pageSize={pageSize}
                country="in"
                category="business"
            />
        </div>
    )
}

export default App
