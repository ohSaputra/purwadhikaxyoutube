import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'

import SearchBar from './Components/Presentation/SearchBar'
import VideoList from './Components/Presentation/VideoList'

const API_KEY = `AIzaSyA7w7zxKythBGqlmhf5Ie1st8J5800fd68`

class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    YTSearch({ 
      key: API_KEY, 
      term: 'paramore' 
    }, result => {
      // console.log(result)
      this.setState({data: result})
    })
  }

  render() {
    const {data} = this.state

    return (
      <div>
        <SearchBar />
        { data && <VideoList data={data} /> }
      </div>
    )
  }
}

export default App