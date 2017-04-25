/**
 * 系统设置
 * Created by shenyiya on 2017/4/24.
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
import Utils from '../../utils/Utils'

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();
import TitleView from '../../ui/TitleView';

export default class SystemSetting extends Component {

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
    onButtonClick() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: Center,
                name: 'center',
            });
        });
    }

    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <TitleView title="系统设置" {...this.props} />
                <TouchableOpacity onPress={() => this.onButtonClick('updatePsw')} activeOpacity={0.5}>
                    <View style={styles.item}>
                        <Text style={styles.itemText}>修改密码</Text>
                        <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                               style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.dividerLine}/>
                <View style={styles.item}>
                    <Text style={styles.itemText}>关于我们</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={styles.item}>
                    <Text style={styles.itemText}>清楚缓存</Text>
                    <Icon1 name="ios-arrow-forward" size={40 * k} color="#6f6c6c"
                           style={{marginRight: 36 * k, marginTop: 30 * k, marginBottom: 30 * k,}}/>
                </View>
                <View style={styles.dividerLine}/>
                <View style={{height: 30 * k}}/>
                <View style={styles.item1}>
                    <Text style={styles.itemText1}>退出登录</Text>
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
    item1: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    itemText: {
        fontSize: 30 * k,
        color: "#666666",
        marginLeft: 20 * k,
        marginTop: 30 * k,
        marginBottom: 30 * k,
        flex: 1
    },
    itemText1: {
        fontSize: 30 * k,
        color: "#26b484",
        marginTop: 30 * k,
        marginBottom: 30 * k,
    },
    dividerLine: {
        backgroundColor: "#e4dede",
        height: 1 * k,
        marginLeft: 36 * k,
    },
});