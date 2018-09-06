import React, { Component } from 'react'
import { Grid, Header } from 'semantic-ui-react'

import './video-player.css'

class VideoPlayer extends Component {
  render() {
    const { video } = this.props
    return (
      <Grid.Column width={12}>
        <div className='iframe-container'>
          <iframe 
            className='c-video-player__iframe' 
            src={`https://www.youtube.com/embed/${video.id.videoId}`} 
            frameBorder='0'
            allowFullScreen />
        </div>
        <div>
          <Header as='h3'>{video.snippet.title}</Header>
          <div>{video.snippet.description}</div>
        </div>
      </Grid.Column>
    )
  }
}

export default VideoPlayer