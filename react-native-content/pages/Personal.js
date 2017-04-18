/**
 * Created by android on 2017/4/18.
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
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';

import Utils from '../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class Personal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <View style={styles.avatarBg}>
                    <Icon name="user" size={170 * k} color="#fff"/>
                    <Text style={{fontSize: 30 * k, color: "#fff", marginTop: 10 * k}}>YiYaShen</Text>
                </View>
                <View style={styles.item}>
                    <Icon name="pencil" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>我的简历</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={styles.item}>
                    <Icon name="star" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>我的收藏</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={styles.item}>
                    <Icon name="share-apple" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>我的投递</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={{height: 30 * k}}/>
                <View style={styles.item}>
                    <Icon name="share-apple" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>我的投递</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={styles.item}>
                    <Icon name="gear" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>系统设置</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>

            </View>);

    }
}
const styles = StyleSheet.create({
    avatarBg: {
        height: 310 * k,
        width: deviceWidth,
        backgroundColor: "#26b484",
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    itemText: {
        fontSize: 30 * k,
        color: "#666666",
        marginLeft: 20 * k,
        marginTop: 30 * k,
        marginBottom: 30 * k,
        flex: 1
    },
    dividerLine: {
        backgroundColor: "#e4dede",
        height: 1 * k,
        marginLeft: 36 * k,
    },
});