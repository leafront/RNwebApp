
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  PixelRatio,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native'

const winWidth = Dimensions.get('window').width

const ratio = PixelRatio.get()


class Brand extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hotLogo: [{
          name:'奥迪',
          imgUrl:"https://ocpvd5a60.qnssl.com/2e89006f-67a6-4e6d-ab65-a6f8540b0d79.png"
        },{
          name:'大众',
          imgUrl:"https://ocpvd5a60.qnssl.com/b7515315-5565-494b-82ef-362d1ae103e1.png"
        },{
          name:'别克',
          imgUrl: "https://ocpvd5a60.qnssl.com/c9607cae-7c28-44b7-91c3-b2132f4cc9ab.png"
        },{
          name:'斯柯达',
          imgUrl: "https://ocpvd5a60.qnssl.com/ecf658b5-5406-47ea-82c7-fa3c661f4d32.png"
        },{
          name:'丰田',
          imgUrl: "https://ocpvd5a60.qnssl.com/e7a5ea6b-cfcc-4db7-824d-5c2cacf120a0.png"

        },{
          name:'雪佛兰',
          imgUrl: "https://ocpvd5a60.qnssl.com/dac84f53-862e-416c-bc0e-29b0af3fe4eb.png"

        },{
          name:'福特',
          imgUrl:"https://ocpvd5a60.qnssl.com/0011c92b-3425-4991-a022-07252a9e79ae.png"
        },{
          name:'日产',
          imgUrl: "https://ocpvd5a60.qnssl.com/3f1fa15b-b3b5-48c8-8391-cd4051781e6d.png"
        }
      ]
    }
  }
  render() {

    const hotLogo = this.state.hotLogo

    const brandList = this.props.brandList

    const navigate = this.props.navigate

    const listItem = brandList.map((item,index) => {

      return (
        <View key = {index}>
          <View style={styles.title}>
            <Text style={styles.letter}>{item.pinYin}</Text>
          </View>
          <View style={styles.itemWraper}>
            {
              item.results.map((child,index) => {

                return (

                  <View key = {index} style={styles.item}>
                    <Image style={styles.pic} source={{uri: child.imgUrl}}/>
                    <Text style={styles.brandTxt}>{child.brandName}</Text>
                  </View>

                )

              })

            }

          </View>
        </View>


      )

    })




    return (
      <View>

          {listItem}

      </View>
    )
  }
}


var styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
    paddingRight: 10
  },
  letter: {
    lineHeight:20,
    fontSize:12,
    color:'#999'
  },
  itemWraper: {
    paddingLeft:10,
    backgroundColor:'#fff',
  },
  item: {
    flexDirection: 'row',
    alignItems:'center',

    height:50,

    borderBottomWidth:1/ratio,

    borderColor:'#ececec'
  },
  brandTxt: {

    fontSize:14,
    paddingLeft:10
  },
  pic: {
    width:30,
    height:30
  }
})

export default Brand
