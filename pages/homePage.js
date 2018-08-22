import React, {Component} from "react";
import {TouchableHighlight,View, Image, Text, StyleSheet, TextInput, ScrollView,PermissionsAndroid,Button} from "react-native";
import Swiper from 'react-native-swiper';
import ImageButton from '../util/ImageButton';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

var Geolocation = require('Geolocation');
var Dimensions = require('Dimensions');

const {width,height,scale} = Dimensions.get('window');

export default class homePage extends Component {
    getLocation(){
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        var latitude = null;
        var longitude = null;
        Geolocation.getCurrentPosition(
            location=>{
                latitude = location.coords.latitude;
                longitude = location.coords.longitude;
                var reqUrl = "http://api.yytianqi.com/observe?city=" + latitude + "," + longitude + "&key=22g6n6ttv8p86ar4"
                this.getWeather(reqUrl);
            },
            error=>{
                console.error('定位异常')
            }
        )
    }

    constructor() {
        super();
        this.state = {
            city: '重庆',
            tempreture: '27',
            status: '阴天',
            reqUrl:'11'
        }
    }

    getWeather(reqUrl){
        fetch(reqUrl)
            .then(resp => {
                return resp.json();
            })
            .then(respJson => {
                this.setState({
                    city: respJson.data.cityName,
                    tempreture: respJson.data.qw,
                    status: respJson.data.tq
                });
            })
            .catch(error => {
                console.error("获取天气服务异常")
            })
    }

    componentDidMount() {
        this.getLocation();
    }

    alertButton(){
        alert("别点我");
    }

    render() {
        var imgUrl = null;
        if (this.state.status == '晴') {
            imgUrl = require('../img/weather_sun.png');
        } else if (this.state.status == '雨') {
            imgUrl = require('../img/weather_rain.png');
        } else if (this.state.status == '多云') {
            imgUrl = require('../img/weather_cloud.png');
        } else if (this.state.status == '阴') {
            imgUrl = require('../img/weather_yt.png');
        }
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <View style={styles.search}>
                    <View style={styles.search_left}>
                        <View>
                            <Image style={styles.search_left_img} source={imgUrl}/>
                        </View>
                        <View style={styles.search_left_msg}>
                            <Text>{this.state.city}</Text>
                            <Text>{this.state.tempreture}℃</Text>
                        </View>
                    </View>
                    <View style={styles.search_right}>
                        <Image style={styles.search_right_img} source={require('../img/search_icon.png')}/>
                        <TextInput underlineColorAndroid="transparent" style={styles.search_right_input}
                                   placeholder={'七夕'}/>
                    </View>
                </View>
                <View>
                    <ScrollView>
                        <Swiper style={styles.banner}
                                height={height/6}//高度
                                loop={true}//最后一张和第一张循环
                                autoplay={true}//自动轮播
                                autoplayTimeout={5}//间隔时间
                                horizontal={true}//水平方向，false竖直方向
                                showPagination={false}//展示小圆点
                                paginationStyle={{bottom:5}}
                        >
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993575&di=e043de274022833c7cb1a127cf0f8077&imgtype=0&src=http%3A%2F%2Fattach.zhiyoo.com%2Fforum%2F201303%2F30%2F16392363kvt13er39xk1k3.jpg'}}/>
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993561&di=81d4263f021562ec51640e68cadf3962&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2FB9%2F56%2FrBACFFaM_VfRWJE0AAlNClgKv_o422.jpg'}}/>
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993573&di=3aae7f6e4f30f4f31eb1b614a82b93a4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F88%2Fdc98489c7cd843578f414f0f470f9995.png'}}/>
                        </Swiper>
                        <View style={styles.kind_first}>
                            <ImageButton name={"美食"} style={styles.view_img} img={require('../img/kinds/food.png')} method={this.alertButton}/>
                            <ImageButton name={"电影"} style={styles.view_img} img={require('../img/kinds/movie.png')} method={this.alertButton}/>
                            <ImageButton name={"酒店"} style={styles.view_img} img={require('../img/kinds/jiudian.png')} method={this.alertButton}/>
                            <ImageButton name={"休闲"} style={styles.view_img} img={require('../img/kinds/xiuxian.png')} method={this.alertButton}/>
                            <ImageButton name={"外卖"} style={styles.view_img} img={require('../img/kinds/waimai.png')} method={this.alertButton}/>
                        </View>
                        <View style={styles.kind_second}>
                            <ImageButton name={"美发"} style={styles.view_img2} img={require('../img/kinds/meifa.png')} method={this.alertButton}/>
                            <ImageButton name={"闪购"} style={styles.view_img2} img={require('../img/kinds/天天闪购.png')} method={this.alertButton}/>
                            <ImageButton name={"旅游"} style={styles.view_img2} img={require('../img/kinds/旅游主题_沙滩.png')} method={this.alertButton}/>
                            <ImageButton name={"机票"} style={styles.view_img2} img={require('../img/kinds/旅游主题_飞机票.png')} method={this.alertButton}/>
                            <ImageButton name={"教育"} style={styles.view_img2} img={require('../img/kinds/培训.png')} method={this.alertButton}/>
                        </View>
                        <View style={styles.kind_second}>
                            <ImageButton name={"景点"} style={styles.view_img2} img={require('../img/kinds/景点.png')} method={this.alertButton}/>
                            <ImageButton name={"装修"} style={styles.view_img2} img={require('../img/kinds/装修.png')} method={this.alertButton}/>
                            <ImageButton name={"跑腿"} style={styles.view_img2} img={require('../img/kinds/跑步.png')} method={this.alertButton}/>
                            <ImageButton name={"信用卡"} style={styles.view_img2} img={require('../img/kinds/信用卡.png')} method={this.alertButton}/>
                            <ImageButton name={"全部分类"} style={styles.view_img2} img={require('../img/kinds/分类管理.png')} method={this.alertButton}/>
                        </View>
                        <View style={{width:width,marginTop:10,marginBottom: 10}}>
                            <Text style={{fontSize:13,textAlign: 'center',color:'gray'}}>—— 猜 你 喜 欢 ——</Text>
                        </View>
                        <View style={styles.ads}>
                            <View style={styles.ads_child}>
                                <Image style={{resizeMode:'contain',flex:1}} source={{uri:'http://imgsrc.baidu.com/image/c0%3Dpixel_huitu%2C0%2C0%2C294%2C40/sign=c0bb42321430e924dba9947125700b6a/4e4a20a4462309f757e1f228790e0cf3d7cad67a.jpg'}}/>
                            </View>
                            <View style={styles.ads_child}>
                                <Image style={{resizeMode:'contain',flex:1}} source={{uri:'http://img.zyoulun.com/uploads/images/2014/06/10/9002d839a747f3869cd0ad74bee69a74.jpg'}}/>
                            </View>
                        </View>
                        <View style={styles.ads}>
                            <View style={styles.ads_child}>
                                <Image style={{resizeMode:'contain',flex:1}} source={{uri:'http://www.haohead.com/z/uploads/attachment/9e/e9/a951be018db87156.jpg'}}/>
                            </View>
                            <View style={styles.ads_child}>
                                <Image style={{resizeMode:'contain',flex:1}} source={{uri:'http://img.79.com/TJW/201705/1493973898_785542.jpg'}}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <ActionButton position='right' verticalOrientation='up' buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item size={66} buttonColor='#9b59b6' title="搜索" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-search" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item size={66} buttonColor='#3498db' title="扫一扫" onPress={() => {}}>
                        <Icon name="md-qr-scanner" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item size={66} buttonColor='#1abc9c' title="二维码" onPress={() => {}}>
                        <Icon name="md-barcode" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        search: {height: 45, backgroundColor: '#FF8503', flexDirection: 'row', justifyContent: 'space-between'},
        search_left: {flex: 2, flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 15},
        search_left_img: {width: 35, height: 35},
        search_left_msg:{marginTop: 5, marginLeft: 10},
        search_right: {
            width: 250,
            marginRight: 30,
            marginBottom: 4,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            backgroundColor: 'white',
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 45,
            marginTop: 4
        },
        scrow_view:{backgroundColor:'white'},
        banner:{marginTop:1,backgroundColor:'orange'},
        banner_img:{height:height/6,width:width},
        search_right_img: {height: 35, width: 35},
        search_right_input: {width: 200, padding: 0},
        kind_first:{flex:1,flexDirection:'row',justifyContent:'space-between',width:width,height:height/6,backgroundColor:'white',borderBottomWidth:1},
        kind_second:{flex:1,flexDirection:'row',justifyContent:'space-between',width:width,height:height/7,backgroundColor:'white'},
        button_around:{height:height/8,width:width/5,borderRadius: 50,borderWidth: 1},
        view_img:{marginLeft:19,width:width/10,height:height/15,backgroundColor: 'orange',borderRadius:60,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'},
        view_img2:{marginLeft:23,width:width/12,height:height/17,borderRadius:60,flexDirection: 'column',justifyContent: 'center',alignItems: 'center'},
        ads:{width:width,height:height/4,flexDirection:'row',justifyContent:'center'},
        ads_child:{margin:2,width:width/1.8,height:height/4,backgroundColor:'white'},
        actionButtonIcon: {
            fontSize: 30,
            width:30,
            height: 30,
            color: 'white',
        },
    }
)