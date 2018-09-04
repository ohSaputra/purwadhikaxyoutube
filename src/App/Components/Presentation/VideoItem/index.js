import React, { Component } from 'react'
import { List, Image, Grid } from 'semantic-ui-react'

import './video-item.css'

class VideoItem extends Component {
  render() {
    const { imgUrl, description } = this.props

    return (
      <List.Item>
        <Grid>
          <Grid.Column width={2}>
            <Image src={imgUrl} centered />
          </Grid.Column>
          <Grid.Column width={4}>
            { description }
          </Grid.Column>
        </Grid>
      </List.Item>
    )
  }
}

export default VideoItem