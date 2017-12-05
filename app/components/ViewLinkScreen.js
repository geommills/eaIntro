'use strict'
import React, { Component } from 'react';
import {
  WebView
} from 'react-native'


class ViewLinkScreen  extends  Component {
  render(){
    return(
      <WebView source={{uri: this.props.rowData.source}} />
    )
  }
}

module.exports = ViewLinkScreen;
