/**
 * Created by yangjing on 2017/4/25.
 */

'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    InteractionManager,
    ListView,
    TextInput,
    Platform,
    BackAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';


import Utils from '../../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class MyProfile extends Component {

    constructor(props) {
        super(props);
    }



    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <View style={styles.avatarBg}>
                    <Icon name="user" size={170 * k} color="#fff"/>
                    <Text style={{fontSize: 30 * k, color: "#fff", marginTop: 10 * k}}>编辑头像</Text>
                </View>

            </View>);

    }
}
const styles = StyleSheet.create({
    avatarBg: {
        height: 280 * k,
        width: deviceWidth,
        backgroundColor: "#26b484",
        alignItems: "center",
        justifyContent: "center"
    },

});