import React, { Component } from 'react'
import { Container, Input } from 'semantic-ui-react'

import './search-bar.css'

class SearchBar extends Component {
  render() {
    return (
      <Container className='search-bar__container'>
        <Input className='search-bar' />
      </Container>
    )
  }
}

export default SearchBar