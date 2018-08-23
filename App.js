/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {createBottomTabNavigator, StackNavigator} from 'react-navigation';
import homePage from "./pages/homePage";
import myPage from "./pages/myPage";
import aroundPage from "./pages/aroundPage";
import orderPage from "./pages/orderPage";
import {adCodePage} from "./pages/homes/adCodePage";

//这里不能用TabBavigator
const pages = createBottomTabNavigator({
    home:{screen:homePage,
          navigationOptions:{
            tabBarLabel:'首页',
            tabBarIcon:({tintColor})=>(
                <Image style={styles.img} source={require("./img/home.png")} style={styles.img}></Image>
            )
          }
    },
    around:{
      screen:aroundPage,
        navigationOptions:{
        tabBarLabel:'附近',
            tabBarIcon:({tintColor})=>(
             <Image source={require('./img/around.png')} style={styles.img}/>
            )
        }
    },
    order:{
      screen:orderPage,
        navigationOptions:{
        tabBarLabel:'订单',
            tabBarIcon:({tintColor})=>(
                <Image style={styles.img} source={require('./img/order.png')}/>
            )
        }
    },
    my:{
      screen: myPage,
      navigationOptions: {
        tabBarLabel: '我的',
          tabBarIcon:({tintColor})=>(
              <Image style={styles.img} source={require("./img/my.png")}/>
          )
      }
    }
    },
    {
      swipeEnabled:true,
        initialRouteName:'home',
        lazy:true,
        tabBarOptions:{
          showIcon:true,
            showLabel:true,
            activeTintColor:'black',
            activeBackgroundColor:'whitesmoke',
            style:{
              backgroundColor:'white',
                height: 55,
            }
        },
        labelStyle:{
          fontSize:12,
            textAlign:'center',
            marginTop: 0,
            color:'black'
        },
        animationEnabled:true
    }
)



export default pages;

const styles = StyleSheet.create({
  img:{width:30,height: 30}
});
