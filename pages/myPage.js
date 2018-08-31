import React,{Component} from "react";
import {View,Image,Text,StyleSheet,Button,TouchableOpacity,ScrollView} from "react-native";
import {StackNavigator} from 'react-navigation';
import login from "./mys/login";
import AwesomeAlert from "react-native-awesome-alerts";

var Dimensions = require('Dimensions');

const {width,height} = Dimensions.get('window');

class myPage extends Component{
    constructor() {
        super();
        this.state = {isShow: false,message: '开发人员忘记填写内容了'}
    }
    showAlert(msg){
        this.setState({isShow:true,message:msg})
    }
    hideAlert(){
        this.setState({isShow:false})
    }
    showAlert(msg){
        this.setState({isShow:true,message:msg})
    }

    myMsg(){
        this.showAlert("开发中...");
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.up}>
                    <View style={styles.headImg}>
                        <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/人物-取消.png')}/>
                    </View>
                    <Button style={{width:width/4, fontSize:35}}  title={' 登陆 / 注册 '} onPress={()=>this.props.navigation.navigate('loginPage')}></Button>
                </View>
                <ScrollView style={styles.down}>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/个人信息.png')}/>
                            </View>
                            <Text style={styles.listMsg}>个人信息</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/好友.png')}/>
                            </View>
                            <Text style={styles.listMsg}>我的好友</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/VIP.png')}/>
                            </View>
                            <Text style={styles.listMsg}>我的VIP特权</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/收藏.png')}/>
                            </View>
                            <Text style={styles.listMsg}>我的收藏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/评价.png')}/>
                            </View>
                            <Text style={styles.listMsg}>我的评价</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/积分.png')}/>
                            </View>
                            <Text style={styles.listMsg}>我的积分</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/品牌广告.png')}/>
                            </View>
                            <Text style={styles.listMsg}>广告合作</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.myMsg.bind(this)} activeOpacity={0.4} focusedOpacity={0.5}>
                        <View style={styles.list}>
                            <View style={styles.titleImg}>
                                <Image style={{resizeMode:'center',flex:1}} source={require('../img/my/emi关于我们.png')}/>
                            </View>
                            <Text style={styles.listMsg}>关于我们</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
                <AwesomeAlert
                    show={this.state.isShow}//是否展示
                    title="Sorry.."//标题
                    message={this.state.message}//弹窗内容
                    closeOnTouchOutside={true}//见名知意
                    closeOnHardwareBackPress={true}//
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText="确定"
                    cancelText="取消"
                    confirmButtonColor="orange"
                    cancelButtonColor="gray"
                    onConfirmPressed={()=>{this.hideAlert()}}
                    onCancelPressed={()=>{this.hideAlert()}}
                    contentContainerStyle={{width:width/1.5, height:width/2.5}}//弹出框样式
                    messageStyle={{fontSize:18}}//消息样式
                    cancelButtonStyle={{margin:15}}//取消按钮样式
                    confirmButtonStyle={{margin:15}}//确认按钮样式
                />
            </View>
        );
    }
}

const mypages = StackNavigator({
    myPage:{screen:myPage,
    navigationOptions:{
        header:null
    }},
    loginPage:{screen: login,
    navigationOptions: {
        header: null
    }}
})

const styles = StyleSheet.create({
    container:{flex: 1},
    up:{flex: 1,flexDirection: 'column',justifyContent:'space-around',alignItems: 'center',backgroundColor:'orange'},
    down:{flex:1,flexDirection: 'column'},
    headImg:{width:width/4,height:width/4,borderWidth:0.5,borderRadius:60,backgroundColor: 'white',justifyContent:'center',alignItems: 'center'},
    titleImg:{marginTop: 20,marginLeft: 40,width:width/15,height:width/15,justifyContent:'center',alignItems: 'center'},
    list:{borderWidth: 0.2,flexDirection:'row',justifyContent:'flex-start',width:width,height:height/15,backgroundColor:'white'},
    listMsg:{flex:8,paddingTop:height/45 ,marginLeft: 60,textAlign: 'left',fontSize:20,letterSpacing: 5}
});

export default mypages;