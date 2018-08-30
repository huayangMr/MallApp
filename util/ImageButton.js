import React,{Component} from 'react';
import {View,Image, TouchableOpacity,StyleSheet,Text} from 'react-native';

var Dimensions = require('Dimensions');
const{width,height} = Dimensions.get('window');

export default class ImageButton extends Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.method} activeOpacity={0.2} focusedOpacity={0.5}>
                <View style={styles.view}>
                    <View style={this.props.style} >
                        <Image style={styles.img} source={this.props.img}/>
                    </View>
                    <Text style={styles.text}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create(
    {
        view:{marginTop: 15,width:width/5,height:height/8,flexDirection: 'column',justifyContent: 'center'},
        img:{resizeMode:'contain',flex: 1,},
        text:{fontSize:12,marginTop: 10,color:'gray',textAlign: 'center'}
    }
)