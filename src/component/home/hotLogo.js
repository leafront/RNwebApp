
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native'

const winWidth = Dimensions.get('window').width

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
          <Text>
            {item.name}
          </Text>
        </View>

        

      )

    })

    const navigate = this.props.navigate

    return (

      <View style={styles.hotLogo}>
        <View style={styles.title}>
          <Text>热门保养</Text>
          <TouchableOpacity
            onPress={ () => navigate('City') }>
              <Text style={styles.hotBtn}>添加爱车</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.pic}>
          {hotLogoList}
        </View>
      </View>

    )

  }

}


var styles = StyleSheet.create({
  hotLogo: {
      backgroundColor:'#fff',
      marginTop: 10

  },
  title:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingLeft:10,
    paddingRight:10,

    height:40

  },
  pic: {

    justifyContent:'space-between',

    flexDirection:'row',

    flexWrap: 'wrap',

    width: winWidth

  },

  hotImg: {

    width: winWidth * 0.15,
    height: winWidth * 0.15

  },
  hotBtn: {
    color:'#ffa028',
    fontSize: 14
  },
  item: {

    alignItems:'center',

    justifyContent:'center',

    width: winWidth * 0.25,

    marginBottom: 10

  }
})

export default HotLogo
