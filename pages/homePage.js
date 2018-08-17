import React,{Component} from "react";
import {View,Image,Text,StyleSheet,TextInput,ScrollView} from "react-native";
import { Kaede } from 'react-native-textinput-effects';


export default class homePage extends Component{
    constructor(){
        super();
        this.State={
            city:'重庆',
            tempreture:'32',
            status:'阴天'
        }
    }

    initWeatherMsg(){

    }

    render(){
        var imgUrl = null;
        if(this.State.status == '晴天'){
           imgUrl = require('../img/weather_sun.png');
        }else if(this.State.status == '雨天'){
            imgUrl = require('../img/weather_rain.png');
        }else if(this.State.status == '多云'){
            imgUrl = require('../img/weather_cloud.png');
        }else if(this.State.status == '阴天') {
            imgUrl = require('../img/weather_yt.png');
        }

        return(
            <View style={{flex: 1,flexDirection:'column',justifyContent:'flex-start'}}>
                <View style={styles.search}>
                    <View style={styles.search_left}>
                        <View>
                            <Image style={styles.search_left_img} source={imgUrl}/>
                        </View>
                        <View  style={{textAlign: 'center',marginTop: 5,marginLeft:10}}>
                            <Text >{this.State.city}</Text>
                            <Text>{this.State.tempreture}℃</Text>
                        </View>
                    </View>
                    <View style={styles.search_right}>
                        <Image style={styles.search_right_img} source={require('../img/search_icon.png')}/>
                        <TextInput  underlineColorAndroid="transparent" style={styles.search_right_input} placeholder={'七夕'}/>
                    </View>
                </View>
                <View>
                    <ScrollView>
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
                        <Text>1</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        search:{height: 45,backgroundColor:'orange',flexDirection: 'row',justifyContent: 'space-between'},
        search_left:{flex:2,flexDirection:'row',justifyContent:'flex-start',marginLeft:15},
        search_left_img:{width:35, height:35},
        search_right:{width:250,marginRight: 30,marginBottom: 4,flexDirection:'row',justifyContent:'flex-start',backgroundColor:'white',borderColor:'gray',borderWidth:1,borderRadius:45,marginTop: 4},
        search_right_img:{height:35,width: 35},
        search_right_input:{width:200,padding: 0},
    }
)