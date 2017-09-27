


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

import Loading from '../component/widget/loading'

import Menu from '../component/home/menu'

import Topline  from '../component/home/topline'

import HotLogo from '../component/home/hotLogo'

import Comment from '../component/home/comment'


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      comment: [],
      page:1,
      loading:true
    }
  }
  componentDidMount() {

    this.getComemntList(this.state.page)

  }

  getComemntList (pageSize) {
    fetch(
      'https://m.lechebang.com/gateway/ord_comment/getOrderHyperCommentList' , {
       method: 'POST',
       headers: {
         'Content-Type':'application/x-www-form-urlencoded'
       },
       body: JSON.stringify({
         "minResultCount":5,
         "page":{
           "currentPage":pageSize,
           "pageSize":5
         },
         "queryType":1,
         "recommended":true,
         "appCode":101,
         "lcb_client_id":"4b1a5e1f-c146-46ca-9189-41cbf0827f26",
         "lcb_request_id":"11dc84af-a7f8-440e-af65-658297aedc5a",
         "lcb_h5_v":"4.0.2"
       })
     })
     .then((response) => {
       if (response.ok) {
           return response.json();
       }
     }).then((json) => {

       if(json && json.msg == "ok"){

        var  comment = this.state.comment

        var commentList = comment.concat(comment,json.result.lists)

        this.setState({
          comment: commentList,
          loading: false
        })
       }
     }).catch((error) => {
       console.error(error)
     })

  }
  static navigationOptions = {
    header: null
  }

  _onScroll (event) {

    const offetsetHeight = event.nativeEvent.contentOffset.y

    const height = event.nativeEvent.layoutMeasurement.height

    const contentHeight = event.nativeEvent.contentSize.height


    if(offetsetHeight + height >= contentHeight - 20 ){

      var pageSize = this.state.page ++

      this.setState({page: pageSize})

      this.getComemntList(pageSize)

    }
  }
  _onRefresh () {
     this.setState({isRefreshing: true});
  }
  render() {

    const { navigate } = this.props.navigation

    const {comment,loading } = this.state

    return (
      <View>
         {
           loading ?

           <Loading/> :

           <View style={styles.container}>
               <StatusBar
                  hidden={false} //是否隐藏状态栏。
                  animated={true} //是否需要动画效果
                  translucent={true} //android平台，是否有半透明效果,如果为true,状态栏会浮在下面的布局上面，
                  backgroundColor="white" // android 平台，设置状态栏配背景颜色
                  barStyle="dark-content"//可以取值 'default', 'light-content', 'dark-content'它的默认是default,
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
                  }
                  onScroll = { this._onScroll.bind(this) }
                  scrollEventThrottle={50}
                >

                  <Banner/>
                  <Menu/>
                  <Topline/>
                  <HotLogo navigate = {navigate}/>
                  <Comment comment = {comment}/>
                </ScrollView>
           </View>
         }

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
