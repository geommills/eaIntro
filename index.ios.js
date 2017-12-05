/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  ListView,
  View,
  Text,
  TouchableHighlight
} from 'react-native'


import PropTypes from 'prop-types';
import ViewContainer from "./app/components/ViewContainer"
import ViewLinkScreen from "./app/components/ViewLinkScreen"
import StatusBarBackground from "./app/components/StatusBarBackground"



export default class eaintro extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ApplicationIndexScreen,
          title: 'GeoEngineers Applications',
        }}
        style={{flex: 1}}
      />
    )
  }
}

const applications = [
  {appName: "Earth Analytics", source: "https://www.earthanalytics.com"},
  {appName: "Spills Management", source: "https://spills.geoengineers.com"},
  {appName: "Safety Conversations", source: "https://safety.geoengineers.com"},
  {appName: "OSC App", source: "https://fishtool.species.idaho.gov"},

]

class ApplicationIndexScreen extends React.Component {
  static propTypes = {
      navigator: PropTypes.object.isRequired,
    }
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
      title: rowData.appName,
      component: ViewLinkScreen,
      passProps: {rowData}
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

AppRegistry.registerComponent('eaintro', () => eaintro)
