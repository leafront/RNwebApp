import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  PanResponder,
  View
} from 'react-native'



import HotLogo from '../component/city/hotLogo'

import Brand from '../component/city/brand'


import Loading from '../component/widget/loading'

const {height: winHeight, width: winWidth } = Dimensions.get('window')

export default class City extends Component {

  constructor (props) {

    super(props)

    this.state = {

      brandList: [],
      loading: true
    }

  }

  static navigationOptions = ({navigation})=>({
    title: '选品牌',
    headerLeft: <TouchableOpacity onPress={ () => { navigation.goBack() } } ><Image source={require('../images/back.png')} style = {{height: 25,width:25,marginLeft:10}}/></TouchableOpacity>,
    headerTitleStyle: {
      color: '#333',
      fontSize: 16
    },
    headerStyle: {
      backgroundColor:'#fff',
      height:54
    }
  })
  componentWillMount(){
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: ()=> true,
      onPanResponderMove: (evt,gs)=>{

        this.scollIntoView(gs.moveY)

      },
      onPanResponderRelease: (evt,gs) =>{

        this.scollIntoView(gs.moveY)

      }
    })
  }

  scollIntoView(pageY) {

    const pointTop = parseInt(pageY)  - 94

    const { brandList, scrollHeight } = this.state

    const eleLen = brandList.length

    const index = Math.floor(pointTop / ((winHeight - 140) / eleLen) )




    let position = parseInt(winWidth * 0.3) + 80

    for (let i = 0;i < index; i++ ){

        position += scrollHeight[i]

    }

    this._scrollView.scrollTo({
        y: position
    })
  }
  getScrollHeight(brandList) {

    let height = []

    brandList.forEach((item) => {

      var eachHeight = 20 + item.results.length * 50

      height.push(eachHeight)

    })

    this.setState({scrollHeight: height })
  }
  componentDidMount() {

    this.getBrandList()

  }



  getBrandList () {
    fetch(
      'https://m.lechebang.com/gateway/car/getFirstLevelBrandType' , {
       method: 'POST',
       headers: {
         'Content-Type':'application/x-www-form-urlencoded'
       },
       body: JSON.stringify({
         "cityId":10201,
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

        this.setState({
          brandList: json.result,
          loading: false
        })

        this.getScrollHeight(json.result)

       }
     }).catch((error) => {
       console.error(error)
     })

  }
  render() {

    const { navigate } = this.props.navigation

    const { loading, brandList } = this.state

    const letterNav = brandList.map((item,index) => {
      return (
        <View key = {index } style ={styles.letterNav}><Text onPress = {(event) => {this.scollIntoView(event.nativeEvent.pageY)} } style={styles.txt}>{item.pinYin}</Text></View>
      )
    })
    return (
      <View>
        {
          loading ?

          <Loading/> :
          <View style={styles.container}>
            <ScrollView

              ref = { (scrollView) => { this._scrollView = scrollView } }

            >

              <HotLogo navigate = {navigate}/>



              <Brand navigate = {navigate} brandList = {brandList}/>

            </ScrollView>
            <View style={styles.letterWraper} {...this._panResponder.panHandlers} >


              { letterNav }


            </View>
          </View>
       }
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f8'
  },
  letterWraper: {
    position:'absolute',
    right:0,
    top: 40,
    width:30,
    bottom:100,
    height: winHeight - 140
  },
  letterNav: {

      flexDirection:'column',

      backgroundColor: 'transparent',

      alignItems:'center',

      justifyContent:'center',
      flex:1
  },
  txt: {
    fontSize:14,

    color:'#333'
  }
})
