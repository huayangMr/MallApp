import React, {Component} from 'react'
import {View,Text,Image,} from 'react-native'
import QRCode from 'react-native-qrcode';
import PropTypes from 'prop-types';
const Dimensions = require('Dimensions');


export default class adCodePage extends Component {
    //给props赋予默认值
    static defaultProps={
        qrcode:"https://my.oschina.net/huayangchen"
    }
    //约束props类型
    static propTypes={
        qrcode:PropTypes.string.isRequired
    }

    constructor(){
        super();
    }

    render() {
        return (
            <View style={{flex:1,flexDirection: 'column',justifyContent: 'center'}}>
                <Text style={{textAlign: 'center',marginTop:70}}>{this.props.qrcode}</Text>
                <View style={{flex:1,marginLeft:Dimensions.get('window').width/4,marginTop:10}}>
                <QRCode
                    value={this.props.qrcode}
                    size={Dimensions.get('window').width/2}
                    bgColor={'black'}
                    fgColor={'white'}
                />
                </View>
            </View>
        )
    }
}