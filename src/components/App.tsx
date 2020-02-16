import React, { Component } from 'react'
import { Button } from '@blueprintjs/core'

class App extends Component {
  render() {
    return (
      <Button intent='success' onClick={() => console.log('Hey!')}>Hey!</Button>
    )
  }
}

export default App