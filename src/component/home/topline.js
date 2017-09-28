
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Dimensions
} from 'react-native'

const winWidth = Dimensions.get('window').width

const ratio = PixelRatio.get()

const Topline = () => {

  return (

    <View style={styles.topLine}>
      <Image style = {styles.topLineImg} source={require('../../images/top_line.png')}  />

      <View>
          <Text style = {styles.scrollTxt}>从7月1日起，如果你的车逾期未年审，就要重新考试了！</Text>
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  topLine: {
  	paddingLeft:10,
		paddingRight:10,
    height: 40,
    borderTopWidth: 1/ratio,
    borderColor: '#f1f1f1',
		alignItems:'center',
    flexDirection: 'row',
    backgroundColor:'#fff'
  },
  topLineImg:{
    width:30,
    height:15
  },
  scrollTxt: {
    fontSize:11,
		marginLeft:20
  }
})

export default Topline
