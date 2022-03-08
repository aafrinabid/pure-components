import React, { Component,PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComponents extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'dady'
      }
     
    }
    componentDidMount(){

        setInterval(()=>{
            this.setState({
                name:'dady'
            })
        },3000)
    }
  render() {
      console.log('********************parentcomponents*************************')
    return (
      <div>
          <div>Parent Components</div>
          <RegComp name={this.state.name} />
          <PureComp name={this.state.name} />
          
    </div>
    )
  }
}

export default ParentComponents