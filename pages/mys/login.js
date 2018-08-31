import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet, Text, Image, Button, ImageBackground} from 'react-native';
import AwesomeAlert from "react-native-awesome-alerts";
import ImageButton from "../../util/ImageButton";

var Dimensions = require('Dimensions');
const {width, height} = Dimensions.get('window');

export default class login extends Component {
    constructor() {
        super();
        this.state = {isShow: false, message: '开发人员忘记填写内容了'}
    }

    showAlert(msg) {
        this.setState({isShow: true, message: msg})
    }

    hideAlert() {
        this.setState({isShow: false})
    }

    toLogin() {
        this.showAlert("登录ing");
    }

    render() {
        var date = new Date();
        var imgUrl = null;
        if (date.getHours() < 18 && date.getHours() > 6) {
            imgUrl = require('../../img/my/sun.png');
        } else {
            imgUrl = require('../../img/my/night.png');
        }
        return (
            <ImageBackground style={{flex: 1}} source={imgUrl}>
                <View style={styles.container}>
                    <View style={styles.top}>
                        <Text style={{marginTop:width/17,textAlign:'center',fontSize:40,letterSpacing:20,color:'white'}}>Welcome</Text>
                    </View>
                    <View style={styles.mid}>
                        <View style={styles.inputBorder}>
                            <TextInput underlineColorAndroid="transparent" style={styles.inputText}
                                       placeholder={'手机号 / 邮箱'}></TextInput>
                        </View>
                        <View style={styles.inputBorder}>
                            <TextInput underlineColorAndroid="transparent" style={styles.inputText}
                                       placeholder={'密码'}></TextInput>
                        </View>
                        <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5} onPress={this.toLogin.bind(this)}>
                            <Text style={{
                                color: 'white',
                                fontSize: 30,
                                textAlign: 'center',
                                letterSpacing: 10,
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                borderRadius:15
                            }}>登录</Text>
                        </TouchableOpacity>
                        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5}
                                              onPress={this.toLogin.bind(this)}>
                                <Text style={{color:'white'}}>忘记密码?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.2} focusedOpacity={0.5}
                                              onPress={this.toLogin.bind(this)}>
                                <Text style={{color:'white'}}>注册新用户</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{textAlign: 'center', fontSize: 15,color:'white'}}>-----其他账号登录-----</Text>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <ImageButton style={styles.button_img} method={this.toLogin.bind(this)} name={"微信"}
                                         img={require('../../img/my/微信.png')}/>
                            <ImageButton style={styles.button_img} method={this.toLogin.bind(this)} name={"微博"}
                                         img={require('../../img/my/微博.png')}/>
                            <ImageButton style={styles.button_img} method={this.toLogin.bind(this)} name={"QQ"}
                                         img={require('../../img/my/qq.png')}/>
                        </View>
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
                        onConfirmPressed={() => {
                            this.hideAlert()
                        }}
                        onCancelPressed={() => {
                            this.hideAlert()
                        }}
                        contentContainerStyle={{width: width / 1.5, height: width / 2.5}}//弹出框样式
                        messageStyle={{fontSize: 18}}//消息样式
                        cancelButtonStyle={{margin: 15}}//取消按钮样式
                        confirmButtonStyle={{margin: 15}}//确认按钮样式
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, flexDirection: "column", justifyContent: 'space-around'},
    top: {flex: 3, justifyContent: 'center', alignItems: 'center'},
    mid: {flex: 4, flexDirection: 'column', margin: 10},
    bottom: {flex: 2, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'},
    inputBorder: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 20
    },
    inputText: {flex: 1, margin: 10},
    button_img: {
        marginLeft: 23,
        width: width / 9,
        height: height / 17,
        borderRadius: 60,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
})