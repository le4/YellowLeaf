/**
 * Created by yangjing on 2017/5/9.
 */

'use strict';
import React, {Component} from 'react';
import {
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

import Icon1 from 'react-native-vector-icons/Ionicons';

import Utils from '../../utils/Utils'
import TitleView from "../../ui/TitleView";
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

export default class MyInformation extends  Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    //下面的三个函数作用是为了解决Android平台下 点击返回按键 返回到上个页面
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const nav = this.props.navigator;
        const routers = nav.getCurrentRoutes();
        if (routers.length > 1) {
            nav.pop();
            return true;
        }
        return false;
    };

    //点击事件
    onButtonClick(flag) {

    }

    render() {
        return (
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <TitleView title="个人资料" {...this.props} />
                <TouchableOpacity onPress={() => this.onButtonClick('avatar')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>修改头像</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>

                <TouchableOpacity onPress={() => this.onButtonClick('nickname')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>修改昵称</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>

                <TouchableOpacity onPress={() => this.onButtonClick('mobile')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>解绑手机</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>

                <TouchableOpacity onPress={() => this.onButtonClick('password')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>修改密码</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>
            </View>);
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    itemText: {
        fontSize: 30 * k,
        color: "#666666",
        marginLeft: 30 * k,
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