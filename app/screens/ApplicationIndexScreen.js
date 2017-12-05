/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import PropTypes from 'prop-types';

const applications = [
  {appName: "Earth Analytics", url: "https://www.earthanalytics.com"},
  {appName: "Spills Management", url: "https://spills.geoengineers.com"},
  {appName: "Safety Conversations", url: "https://safety.geoengineers.com"},

]

import ViewContainer from "../components/ViewContainer"
import StatusBarBackground from "../components/StatusBarBackground"

class ApplicationIndexScreen extends React.Component {
  
  constructor(props)
  {
    super(props)
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    this.state = {
      ds:applications,
      dataSource:ds
    }
  }

  componentDidMount(){
    this.setState({
      dataSource:this.state.dataSource.cloneWithRows(this.state.ds),
    })

  }
  pressRow(rowData){
    this.props.navigator.push({
      title: 'Scene ' + rowData.appName,
    });
  }

  renderRow(rowData){
    return (
      <TouchableHighlight
        onPress={()=> this.pressRow(rowData)}
        underlayColor = '#ddd'>
        <View style ={styles.row}>
          <Text style={{fontSize:18}}>{rowData.appName}</Text>
          <View style={{flex:1}}/>

        </View>
      </TouchableHighlight>
    )
  }
  render(){
    return (
      <ViewContainer>
      <StatusBarBackground></StatusBarBackground>
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow.bind(this)}>
      </ListView>
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  row:{
    flex:1,
    flexDirection:'row',
    padding:18,
    borderBottomWidth: 1,
    borderColor: '#d7d7d7',
  },
  selectionText:{
    fontSize:15,
    paddingTop:3,
    color:'#b5b5b5',
    textAlign:'right'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  applcationMoreIcon:
  {
    color: "green",
    height: 10,
    width: 10,
    marginRight: 25
  }
})

module.exports = ApplicationIndexScreen
