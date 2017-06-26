import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions
} from 'react-native'


import Swiper from 'react-native-swiper'


const winWidth = Dimensions.get('window').width

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }
  static navigationOptions = {
    header: null
  }
  componentWillMount(){

    this.getBanner()
  }
  getBanner() {
     fetch(
       'https://m.lechebang.com/gateway/mkt/getShowcaseModules' , {
        method: 'POST',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({
            "positionId":[15,19,20,37,38],
            "cityId":10201,
            "appCode":101,
            "lcb_client_id":"3ae73b81-1d13-40b8-b0d1-d7aa3d9df7ee",
            "lcb_request_id":"7eb21e24-9ed3-43ca-afe0-bb048617d142",
            "lcb_h5_v":"4.0.2"
        })
      })
      .then((response) => {
        if (response.ok) {
            return response.json();
        }
      }).then((json) => {
        if(json && json.msg == "ok"){

         this.setState({
           dataSource: json.result[19].content
         })
        }
      }).catch((error) => {
        console.error(error)
      })
  }
  render() {

    const bannerList = this.state.dataSource
    const banner = bannerList.map((item,index) => {
      return (
        <View style={styles.slide} key={index}>
         <Image source={{uri: item.iphoneImgUrl}} style={styles.thumbnail}/>
        </View>
      )
    })

    return (
        <View>
          <Swiper
          style={styles.wrapper}
          showsButtons={false}
          height={130}
          paginationStyle = {styles.pagination}
          >
            {banner}
         </Swiper>
        </View>
    )
  }
}

export default Banner

var styles = StyleSheet.create({
  pagination: {
    top:120
  },
  wrapper: {
    height: 130,
    backgroundColor:'#ccc'
  },
  thumbnail: {
    width:winWidth,
    height: 130
  },
  slide: {
    flexDirection: 'row',
    height:130,

  }
})
