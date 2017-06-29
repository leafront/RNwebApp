import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'


import HotLogo from '../component/city/hotLogo'

import Brand from '../component/city/brand'


import Loading from '../component/widget/loading'


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

  componentWillMount() {

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
       }
     }).catch((error) => {
       console.error(error)
     })

  }
  render() {

    const { navigate } = this.props.navigation

    const loading = this.state.loading

    return (
      <View>
        {
          loading ?

          <Loading/> :
          <View style={styles.container}>
            <ScrollView>

              <HotLogo navigate = {navigate}/>
              <Brand navigate = {navigate} brandList = {this.state.brandList}/>

            </ScrollView>

          </View>
       }
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f8'
  }
})
