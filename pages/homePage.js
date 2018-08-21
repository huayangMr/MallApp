import React, {Component} from "react";
import {View, Image, Text, StyleSheet, TextInput, ScrollView,PermissionsAndroid} from "react-native";
import Swiper from 'react-native-swiper';

var Geolocation = require('Geolocation');
export default class homePage extends Component {
    getLocation(){
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        var latitude = null;
        var longitude = null;
        /*  Geolocation.getCurrentPosition()
              .then(data=>{
                  latitude = data.latitude,
                      longitude =data.longitude
                  console.error(latitude);
              })
              .catch(e=>{
                  console.error(e,"位置获取异常")
              })*/
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
        //return "http://api.yytianqi.com/observe?city=" + latitude + "," + longitude + "&key=22g6n6ttv8p86ar4";
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
                                height={200}//高度
                                loop={true}//最后一张和第一张循环
                                autoplay={true}//自动轮播
                                autoplayTimeout={5}//间隔时间
                                horizontal={true}//水平方向，false竖直方向
                                showPagination={false}//展示小圆点
                        >
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993575&di=e043de274022833c7cb1a127cf0f8077&imgtype=0&src=http%3A%2F%2Fattach.zhiyoo.com%2Fforum%2F201303%2F30%2F16392363kvt13er39xk1k3.jpg'}}/>
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993561&di=81d4263f021562ec51640e68cadf3962&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2FG1%2FM00%2FB9%2F56%2FrBACFFaM_VfRWJE0AAlNClgKv_o422.jpg'}}/>
                            <Image style={styles.banner_img} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534849993573&di=3aae7f6e4f30f4f31eb1b614a82b93a4&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F88%2Fdc98489c7cd843578f414f0f470f9995.png'}}/>
                        </Swiper>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                        <Text>1</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        search: {height: 45, backgroundColor: 'orange', flexDirection: 'row', justifyContent: 'space-between'},
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
        banner:{marginTop:1,backgroundColor:'orange'},
        banner_img:{height:200,width:420},
        search_right_img: {height: 35, width: 35},
        search_right_input: {width: 200, padding: 0},
    }
)