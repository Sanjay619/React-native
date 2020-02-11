
import React, { Component } from 'react';
import {
  View
} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    console.log("Hello from Constructor")
  }

  componentDidMount(){
    console.log("Hello From componentDidMount");
  }

  componentWillUnmount(){
    console.log("Hello from componentWillUnmount");
  }
render(){
  debugger
    console.log("Hello from Render");
    return(
      <View></View>
    )
  }

}




