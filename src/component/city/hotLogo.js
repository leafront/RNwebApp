
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  PixelRatio,
  TouchableOpacity,
  Alert
} from 'react-native'

const winWidth = Dimensions.get('window').width

const ratio = PixelRatio.get()

class HotLogo extends Component {
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


    const hotLogoList = hotLogo.map((item,index) => {

      return (

        <View style={styles.item} key = {index}>
          <Image source = {{uri:item.imgUrl}} style={styles.hotImg}/>
          <Text style={styles.nameTxt}>
            {item.name}
          </Text>
        </View>

      )

    })

    const navigate = this.props.navigate

    return (
      <View>
        <View style={styles.title}>
          <Text style={styles.brandTxt}>热门品牌</Text>
        </View>
        <View style={styles.pic}>
          {hotLogoList}
        </View>
      </View>

    )

  }

}


var styles = StyleSheet.create({
  title: {
    paddingLeft: 10,
    paddingRight: 10
  },
  brandTxt: {
    lineHeight:20,
    fontSize:12,
    color:'#999'
  },
  pic: {


    flexDirection:'row',

    flexWrap: 'wrap',

    backgroundColor:'#fff',

    width: winWidth,


    paddingLeft:10/ratio,

    paddingRight:10/ratio

  },

  hotImg: {
    width: winWidth * 0.15,


    height: winWidth * 0.15

  },
  nameTxt: {
    height:20,
    color:'#333'
  },
  item: {
    width: (winWidth - 20) * 0.25,

    alignItems:'center',

    justifyContent:'center',

    marginBottom: 10

  }
})

export default HotLogo
