import React,{Component} from 'react';
import {View,TextInput,StyleSheet,Text} from 'react-native';
import AwesomeAlert from "react-native-awesome-alerts";

var Dimensions = require('Dimensions');
const {width,height} = Dimensions.get('window');

export default class login extends Component{
    constructor() {
        super();
        this.state = {isShow: false,message: '开发人员忘记填写内容了'}
    }

    showAlert(msg){
        this.setState({isShow:true,message:msg})
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.nameInput}>
                    <Text>用户名：</Text>
                    <TextInput placeholder={'admin'}></TextInput>
                </View>
                <View style={styles.pwdInput}>
                    <Text>密码：</Text>
                    <TextInput placeholder={'6位密码'}></TextInput>
                </View>
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
        )
    }
}

const styles = StyleSheet.create({
    container:{flex:1},
    nameInput:{flexDirection: 'row',justifyContent: 'space-around',borderWidth:1},
    pwdInput:{flexDirection: 'row',justifyContent: 'space-around',borderWidth: 1},
})