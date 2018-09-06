import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

import './video-item.css'

class VideoItem extends Component {
  render() {
    const { imgUrl, description } = this.props

    return (
      <Grid className='c-video-item--hover' onClick={this.setVideo}>
        <Grid.Column width={8}>
          <Image src={imgUrl} centered />
        </Grid.Column>
        <Grid.Column width={8} className='video-item__description'>
          { description }
        </Grid.Column>
      </Grid>
    )
  }

  setVideo = () => this.props.setVideo(this.props.video)
}

export default VideoItem