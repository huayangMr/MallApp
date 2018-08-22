import React,{Component} from "react";
import {View,Image,Text,StyleSheet} from "react-native";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";

var Dimensions = require('Dimensions');

export default class myPage extends Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                <Text>测试</Text>
                {/* Rest of the app comes ABOVE the action button component !*/}
                <View style={{borderWidth: 1,width: 500,height: 500}}>
                    <View style={{borderWidth: 1,width: 450,height: 400,backgroundColor:'blue'}}></View>
                </View>
                <ActionButton  offsetX={150} offsetY={150} buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

                <Text style={{textAlign: 'right'}}>22222</Text>
             {/*   <View  style={{zIndex:1,width:  Dimensions.get('window').width,height: 1000,backgroundColor:'blue'}}>

                </View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});