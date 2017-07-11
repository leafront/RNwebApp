import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity,
  View
} from 'react-native'

import Loading from '../widget/loading'

const {height: winHeight, width: winWidth } = Dimensions.get('window')


export default class CarType extends Component {

  constructor (props) {

    super(props)
    this.spinValue = new Animated.Value(0)
    this.state = {

      carTypeList: []
    }

  }

  productCarItem(item) {

    const productCarItem = item.brandProduceCar.map((child,cIndex) => {
        return (
            <Text key = {cIndex} style={styles.txt}>{child.carName}</Text>
        )

    })

    return productCarItem

  }
  componentDidMount () {
     //this.spin()
  }
  spin () {
      this.spinValue.setValue(winWidth)
      Animated.timing(
          this.spinValue,
          {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear
          }
      ).start()
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: [winWidth, winWidth/2]
    })


    const { loading } = this.state

    const carTypeList = this.props.carTypeList

    return (

        <View style={styles.container}>
          {
            carTypeList.map((item,index) => {
              return (
                <View key = {index}>
                  <View style={styles.title}>
                    <Text style={styles.letter}>{item.producerName}</Text>
                  </View>
                  <View style={styles.content}>{ this.productCarItem(item) }</View>
                </View>
              )
            })
          }
        </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f4f4f8',
    width:winWidth/2
  },
  title: {
    paddingLeft: 15,
    paddingRight: 10
  },
  letter: {
    lineHeight:20,
    fontSize:12,
    color:'#999',
    fontSize:12
  },
  content: {
    paddingLeft:15,
    backgroundColor:'#fff'
  },
  txt: {
    lineHeight:40,
    fontSize:16,
    color:'#333'
  }
})
