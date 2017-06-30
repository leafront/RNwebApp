
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

const Menu =  () => {

    const menuImg = [
      {
        "name":"4S店保养",
        "imgUrl":'https://ocpvgmewj.qnssl.com/5adbeef9-0b5b-4bb9-b99c-dc7ac05ec9b0.png'
      },
      {
        "name":'钣金喷漆',
        "imgUrl":'https://ocpvgmewj.qnssl.com/43487882-0add-4dbe-a0c6-6db80a905653.png',
      },{
        "name":'清洗养护',
        "imgUrl": 'https://ocpvgmewj.qnssl.com/8c5a2d5e-e613-4483-b00f-e672a3378bdc.png',
      },{
        "name":'原厂维修',
        "imgUrl": 'https://ocpvgmewj.qnssl.com/99f8dd2d-6890-4ea9-b513-5737058dac98.png',
      },{
        "name":'加油',
        "imgUrl": 'https://ocpvgmewj.qnssl.com/d2e91ea8-8180-485a-a23f-96e7e6cbd589.png',
      },

        {
          "name":'洗车',
          "imgUrl": 'https://ocpvgmewj.qnssl.com/4a3bfbc2-e230-483f-b5e9-81d92c50f5cb.png',
        },
        {
          "name":'更换电瓶',
          "imgUrl": 'https://ocpvgmewj.qnssl.com/3de6399f-b084-41b7-a93a-1c973df273c5.png',
        },{
          "name":'违章查询',
          "imgUrl": 'https://ocpvgmewj.qnssl.com/6025351c-f12c-41e6-929b-9408e828faa0.png',
        },{
          "name":'智慧停车',
          "imgUrl": 'https://dn-lcbresource.qbox.me/cac526e8-9f97-4617-a546-9420c127826b.png',
        },{
          "name":'热门活动',
          "imgUrl":'https://ocpvgmewj.qnssl.com/721a24eb-a108-47f1-99dd-5fca5b26154e.png'
        }

    ]

    const menuList = menuImg.map((item,index) => {

      return (
          <View style={styles.menuList} key = {index}>
           <Image source={{url:item.imgUrl}} style={styles.menuImg}/>
           <Text style={styles.meunTxt}>
             {item.name}
           </Text>
          </View>
      )

    })

    return (
      <View>
        <View style={styles.menuWraper}>

         {menuList}
        </View>

      </View>

    )
}


var styles = StyleSheet.create({
  menuWraper:{

    flexDirection: 'row',

    flexWrap: 'wrap',

    backgroundColor:'#fff',

    width: winWidth,

    paddingLeft:10,

    paddingRight:10,

    paddingBottom:20,
  },
  menuList: {

    width: (winWidth - 20) * 0.2,

    paddingTop:20,

    alignItems:'center',

    justifyContent:'center'

  },
  meunTxt:{
    flexDirection: 'column',
    textAlign: 'center',
    marginTop:10,
    fontSize:12
  },

  menuImg: {

    flexDirection: 'column',
    width: winWidth * 0.14,

    height: winWidth * 0.14
  }
})


export default Menu
