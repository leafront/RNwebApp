


import React, { Component , PropTypes } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  RefreshControl
} from 'react-native'

import Swiper from 'react-native-swiper'


import Banner from '../component/home/banner'

import Menu from '../component/home/menu'

import Topline  from '../component/home/topline'

import HotLogo from '../component/home/hotLogo'

import Comment from '../component/home/comment'


exports.framework = 'React';
exports.title = '<StatusBar>';
exports.description = 'Component for controlling the status bar';

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
        <View style={styles.container}>
          <StatusBar
             hidden={false} //是否隐藏状态栏。
             animated={true} //是否需要动画效果
             translucent={true} //android平台，是否有半透明效果,如果为true,状态栏会浮在下面的布局上面，
             backgroundColor='blue' // android 平台，设置状态栏配背景颜色
             barStyle="default"//可以取值 'default', 'light-content', 'dark-content'它的默认是default,
         />
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

          <Banner/>
          <Menu/>
          <Topline/>
          <HotLogo navigate = {navigate}/>
         <Comment/>
        </ScrollView>
      </View>

    )
  }
}

export default Home

var styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f8',
    marginTop:20
  }
})
