import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

import VideoItem from '../VideoItem'

class VideoList extends Component {
  render() {
    return (
      <List>
        { this.renderVideo() }
      </List>
    )
  }

  renderVideo = () => {
    return this.props.data.map(video => (
      <VideoItem 
        key = {video.etag}
        imgUrl = {video.snippet.thumbnails.default.url}
        description = {video.snippet.description}
      />
    ))
  }
}

export default VideoList