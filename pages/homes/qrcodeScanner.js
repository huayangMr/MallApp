import React,{Component} from 'React';
import {View,Text,Linking,StyleSheet,Dimensions} from 'react-native';
import{QRScannerView} from 'ac-qrcode';
import ImageButton from '../../util/ImageButton';

const {width,height} = Dimensions.get('window');

export default class qrcodeScanner extends Component {

    topBar() {
        return (
            <View style={{flex: 1}}>
                <Text> </Text>
            </View>
        )
    }
    openPower(){
        alert("打开手电筒")
    }

    openPhotos(){
        alert("打开相册")
    }

    bottomBar() {
        return (
            <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
                <ImageButton name={"手电筒"} style={styles.imgBtn} method={this.openPower} img={require('../../img/qrcode/灯泡.png')}/>
                <ImageButton name={"相册"} style={styles.imgBtn} method={this.openPhotos} img={require('../../img/qrcode/相册.png')}/>
            </View>
        )
    }



    notify(msg) {
        Linking.openURL(msg).catch(alert("二维码无效！"))
    }

    render() {
        return (
            <QRScannerView
                renderTopBarView={this.topBar}
                renderBottomMenuView={this.bottomBar.bind(this)}
                onScanResultReceived={this.notify.bind(this)}
                scanBarColor={'#FFA500'}
                rectWidth={width/1.5}
                rectHeight={width/1.5}
                borderColor={'#DCDCDC'}
                cornerColor={'#FFA500'}
            />
        )
    }
}
    const styles = StyleSheet.create({
        imgBtn: {
            marginLeft: 23,
            width: width / 12,
            height: height / 17,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
    })


