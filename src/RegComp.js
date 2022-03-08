import React, { Component } from 'react'

 class RegComp extends Component {
  render() {
      console.log('Regular aane')
    return (
      <div>{this.props.name} from regular component</div>
    )
  }
}

export default RegComp