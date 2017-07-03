
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Dimensions,
  ListView
} from 'react-native'

const winWidth = Dimensions.get('window').width

const ratio = PixelRatio.get()


const PicItem = ({item}) => {


  const listInfo = item.map((child,index) => {
    return (
      <View style={styles.imgWraper} key = {index}>
        <Image style = {styles.listImg} source = {{uri:child.thumbnailPath}}/>
      </View>
    )
  })

  return (

    <View style={styles.picList}>
      {listInfo}
    </View>

  )

}

class Comment extends Component {

  constructor(props) {

    super(props)

  }
  render () {

    const comment = this.props.comment

    const commentItem = comment.map((item,index) => {

      return (
        <View key = {index} style= {styles.picInfoWraper}>
          <View style={styles.picInfo}>
            <Image source = {{uri:item.portrait}} style = {styles.userPic}/>
            <View style = {styles.userInfo}>

              <Text style={styles.userName}>{item.nickname}</Text>

              <Text style={styles.times}>{item.commentDate}</Text>

            </View>
          </View>
          <View style={styles.infoTxt}>
            <Text style={styles.carText}>车型：{item.firstLevelCarType + ' ' + item.thirdLevelCarType}</Text>
            <Text style={styles.carText}>花费：¥{item.actualPrice} </Text>
            <Text style={styles.redText}>（省¥{item.savePrice}）</Text>
          </View>

          <Text style={styles.infoDes}>{item.content}</Text>
          <PicItem item = {item.pictures}/>
        </View>
      )
    })


    return (
      <View style={styles.commentWraper}>
        <View style={styles.title}>
          <Text style={styles.titTxt}>车主评价</Text>
        </View>
        <View style={styles.infoWraper}>
          {commentItem}
        </View>

      </View>

    )
  }
}



var styles = StyleSheet.create({

  commentWraper: {

    marginTop: 10,
    backgroundColor:'#fff',
  },
  title: {
    height:50,

    flexDirection: 'row',

    alignItems:'center',

    paddingLeft:20,

    borderColor:'#f7f7f7',
    backgroundColor:'#fff',
    borderBottomWidth: 1/ratio,
  },
  titTxt: {

    fontSize: 15,
    color:'#333',
  },
  picInfoWraper: {
    marginBottom:10,
    backgroundColor:'#fff'
  },
  picInfo: {

    flexDirection: 'row',

    paddingTop:10
  },
  userPic: {

    width: 40,
    height:40,
  },
  userInfo: {

    paddingLeft: 10
  },
  userName: {

    fontSize:14,
    color:'#333',

    marginTop:3
  },
  infoTxt: {
    flexDirection: 'row',

    marginTop:10,

    marginBottom: 10
  },
  carText: {

    color:'#999',
    fontSize:12
  },
  redText:{
    color:'#fa5a4b',
    fontSize:12
  },
  times: {

    fontSize:12,
    marginTop: 8,
    color:'#999'
  },
  infoWraper: {
    paddingLeft: 10,
    paddingRight: 10
  },
  picList: {
    flexDirection:'row',

    flexWrap: 'wrap',

    marginTop:15,

    marginBottom:15


  },

  imgWraper: {
    width: (winWidth - 20) / 3,
    height: (winWidth - 20) / 3,
    alignItems:'center'

  },
  listImg: {
    width: (winWidth - 20) / 3 - 5,
    height: (winWidth - 20) / 3 - 5,
    borderRadius:5
  },
  infoDes: {
    fontSize:15,
    lineHeight:22,
    color:'#333'
  }

})

export default Comment
