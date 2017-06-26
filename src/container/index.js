
import React, { Component , PropTypes } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl
} from 'react-native'

import Swiper from 'react-native-swiper'


import Banner from '../component/home/banner'

import Menu from '../component/home/menu'

import Topline  from '../component/home/topline'

import HotLogo from '../component/home/hotLogo'

import Comment from '../component/home/comment'



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false
    }
  }
  static navigationOptions = {
    header: null
  }

  _onScroll () {

  }
  _onRefresh () {
     this.setState({isRefreshing: true});
  }
  render() {

    const { navigate } = this.props.navigation

    return (
      <ScrollView
      refreshControl = {
        <RefreshControl
          refreshing={ this.state.isRefreshing }
          onRefresh={ () => {this._onRefresh}}
          title="加载中..."
         colors={['#ff0000', '#00ff00', '#0000ff']}
         progressBackgroundColor="#ffffff"
        />
      }>
      <View style={styles.container}>
        <Banner/>
        <Menu/>
        <Topline/>
        <HotLogo navigate = {navigate}/>
       <Comment/>
      </View>
   </ScrollView>
    )
  }
}

export default Home

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f8'
  }
})
