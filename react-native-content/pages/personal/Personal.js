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
    TextInput,
    Platform,
    BackAndroid,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import SystemSetting from './SystemSetting';
import MyProfile from './MyProfile';
import MySend from './MySend';

import Utils from '../../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class Personal extends Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this); //注册函数
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
        if (flag == "systemSetting") { //系统设置
            InteractionManager.runAfterInteractions(() => {
                this.props.navigator.push({
                    component: SystemSetting,
                    name: 'systemSetting',
                });
            });
        } else if (flag == "myProfile") { //我的简历
            InteractionManager.runAfterInteractions(() => {
                this.props.navigator.push({
                    component: MyProfile,
                    name: 'MyProfile',
                });
            });
        } else if (flag == "myFav") { //我的收藏

        } else if (flag =="mySend") { //我的投递
            InteractionManager.runAfterInteractions(() => {
                this.props.navigator.push({
                    component: MySend,
                    name: 'MySend',
                });
            });
        }

    }

    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <View style={styles.avatarBg}>
                    <Icon name="user" size={170 * k} color="#fff"/>
                    <Text style={{fontSize: 30 * k, color: "#fff", marginTop: 10 * k}}>YiYaShen</Text>
                </View>
                <TouchableOpacity onPress={() => this.onButtonClick('myProfile')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Icon name="pencil" size={50 * k} color="#6f6c6c"
                              style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                        <Text style={styles.itemText}>我的简历</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>
                <TouchableOpacity onPress={() => this.onButtonClick('myFav')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Icon name="star" size={50 * k} color="#6f6c6c"
                              style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                        <Text style={styles.itemText}>我的收藏</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>
                <TouchableOpacity onPress={() => this.onButtonClick('mySend')} activeOpacity={0.5}>
                <View style={styles.item}>
                    <Icon name="share-apple" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>我的投递</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>
                <View style={{height: 30 * k}}/>
                <View style={styles.item}>
                    <Icon1 name="ios-build-outline" size={50 * k} color="#6f6c6c"
                          style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    <Text style={styles.itemText}>解绑手机</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <TouchableOpacity onPress={() => this.onButtonClick('systemSetting')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Icon name="gear" size={50 * k} color="#6f6c6c"
                              style={{marginLeft: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                        <Text style={styles.itemText}>系统设置</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>

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