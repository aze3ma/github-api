import React from 'react'

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Results from './components/Results'

const App = () => (
    <div className="container">
        <Header />
        <SearchBar />
        <Results />
    </div>
)

export default App
