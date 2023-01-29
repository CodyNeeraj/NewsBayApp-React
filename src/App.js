import "./App.css"
import Navbar from "./components/Navbar"
import NewsParent from "./components/NewsParent"

function App() {
    let pageSize = 10
    const api_key = process.env.NEWS_API_KEY
    return (
        <div>
            <Navbar />
            <NewsParent
                apiKey={api_key}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
            />
        </div>
    )
}

export default App
