import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import YTSearch from 'youtube-api-search'

import SearchBar from './Components/Presentation/SearchBar'
import VideoList from './Components/Presentation/VideoList'
import VideoPlayer from './Components/Presentation/VideoPlayer'

const API_KEY = `AIzaSyA7w7zxKythBGqlmhf5Ie1st8J5800fd68`

class App extends Component {

  state = {
    data: null,
    video: null
  }

  componentDidMount() {
    this.doSearch('asian games 2018')
  }

  render() {
    const {data, video} = this.state

    return (
      <Container>
        <Grid>
          <SearchBar doSearch={this.doSearch} />
          { video && <VideoPlayer video={video} />}
          { data && <VideoList data={data} setVideo={this.setVideoPlayer} /> }
        </Grid>
      </Container>
    )
  }

  doSearch = (keywords) =>
    YTSearch({ 
      key: API_KEY, 
      term: keywords 
    }, result => {
      this.setState({
        data: result,
        video: result[0]
      })
    })

  setVideoPlayer = video => this.setState({ video })
}

export default App