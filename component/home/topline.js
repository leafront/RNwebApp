
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
      <Image style = {styles.topLineImg} source={{uri:'https://img06.lechebangstatic.com/webapp/homemiddle2b2191952c.png'}} />

      <View>
          <Text style = {styles.scrollTxt}>从7月1日起，如果你的车逾期未年审，就要重新考试了！</Text>
      </View>
    </View>
  )
}

var styles = StyleSheet.create({
  topLine: {
    marginTop:20,
    height: 40,
    borderTopWidth: 1/ratio,
    borderColor: '#f1f1f1',
    flexDirection: 'row',
  },
  topLineImg:{
    width:35,
    height:25

  },
  scrollTxt: {
    textAlign: 'center',
    lineHeight:40,
    fontSize:12,
    paddingLeft:20,
    paddingRight:20
  }
})

export default Topline
