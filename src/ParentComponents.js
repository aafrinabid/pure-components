import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComponents extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'dady'
      }
     
    }
    componentDidMount(){

        setInterval(()=>{
            this.setState({
                name:'baby'
            })
        },3000)
    }
  render() {
      console.log('********************parentcomponents*************************')
    return (
      <div>
          <div>Parent Components</div>
          {/* <RegComp name={this.state.name} />
          <PureComp name={this.state.name} /> */}
          <MemoComp name={this.state.name} />
          
    </div>
    )
  }
}

export default ParentComponents