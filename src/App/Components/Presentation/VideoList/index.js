import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

import VideoItem from '../VideoItem'

class VideoList extends Component {
  render() {
    return (
      <Grid.Column width={4}>
        <div>
          { this.renderVideo() }
        </div>
      </Grid.Column>
    )
  }

  renderVideo = () => {
    return this.props.data.map(video => (
      <VideoItem 
        key = {video.etag}
        imgUrl = {video.snippet.thumbnails.default.url}
        description = {video.snippet.description}
        video = {video}
        setVideo = {this.props.setVideo}
      />
    ))
  }
}

export default VideoList