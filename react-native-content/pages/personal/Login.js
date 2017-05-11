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

import Icon1 from 'react-native-vector-icons/EvilIcons';

import {SegmentedControl, WingBlank} from 'antd-mobile';
import Constant from '../../utils/Constant';
import Utils from '../../utils/Utils'
import GridView from "../../ui/GridView";

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

const WECHAT_IMG = [
    require('../../imgs/wechat.jpg')
]

export default class Login extends Component {
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

    //分段器页面改变
    onChange = (key) => {
        console.log('onChange', key);
    }
    //分段器值发生改变
    onValueChange = (value) => {
        console.log(value);
    }

    render() {
        return (
            <ScrollView>
                <View style={{backgroundColor: "#fff", flex: 1}}>
                    <View style={styles.titleBg}>
                        <Text style={{fontSize: 50 * k}}>hi~</Text>
                    </View>
                    <WingBlank style={styles.seg}>
                        <SegmentedControl
                            values={['密码登录', '验证码登录']}
                            tintColor="#26b484"
                            style={{margin: 10, height: 60 * k, width: 400 * k, alignSelf: 'center'}}
                        />
                    </WingBlank>
                    <View style={styles.inputView}>
                        <Icon1 name="user"
                              size={80 * k}
                              color="#6f6c6c"
                              style={{marginLeft: 20 * k, marginTop: 10 * k}}/>
                        <View style={styles.dividerLine2}/>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入手机号码"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Icon1 name="unlock"
                               size={80 * k}
                               color="#6f6c6c"
                               style={{marginLeft: 20 * k, marginTop: 10 * k}} />
                        <View style={styles.dividerLine2}/>
                        <TextInput
                            style={styles.input}
                            placeholder="请输入密码"
                        />
                    </View>
                    <View style={{
                        marginTop: 10 * k,
                        marginLeft: 550 * k,
                        width: 120 * k,
                        height: 30 * k,
                    }}>
                        <Text>忘记密码</Text>
                    </View>
                    <View style={{
                        width: 500 * k,
                        height: 95 * k,
                        backgroundColor: Constant.mainColor,
                        borderRadius: 100 * k,
                        marginTop: 50 * k,
                        marginLeft: 120 * k,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Text style={{color: "#fff", fontSize: 36 * k, marginLeft: 13 * k}}>登  录</Text>
                    </View>
                    <View style={{
                        marginTop: 50 * k,
                        marginLeft: 70 * k,
                        width: 600 * k,
                        height: 60 * k,
                        flexDirection: "row"
                    }}>
                        <View style={styles.dividerLine}/>
                        <View style={{
                            alignItems: "center",
                            width: 150 * k,
                            height: 30 * k,
                        }}>
                            <Text>第三方登录</Text>
                        </View>
                        <View style={styles.dividerLine}/>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: 10 * k,
                        alignItems: "center",
                        justifyContent: "center"}}>
                        <TouchableOpacity onPress={() => {
                            this.centerItemAction(0)
                        }} activeOpacity={0.5}>
                            <Image source={WECHAT_IMG[0]} style={styles.image_item}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: "row",
                        marginTop: 50 * k,
                        marginBottom: 10 * k,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text style={styles.text_bottom}>立即注册</Text>
                        <View style={styles.dividerLine1}/>
                        <Text style={styles.text_bottom}>随便看看</Text>

                    </View>
                </View>
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    titleBg: {
        height: 300 * k,
        width: deviceWidth,
        backgroundColor: "#26b484",
        alignItems: "center",
        justifyContent: "center"
    },
    seg: {
        width: 500 * k,
        height: 100 * k,
        paddingBottom: 0.26 * k,
        marginLeft: 125 * k,
        marginTop: 20 * k,
        alignItems: "center",
        justifyContent: "center",
    },
    inputView: {
        width: 550 * k,
        height: 100 * k,
        marginLeft: 100 * k,
        marginTop: 20 * k,
        borderWidth: 2 * k,
        borderColor: "#C9C9C9",
        borderRadius: 10 * k,
        flexDirection: "row",
    },
    dividerLine: {
        backgroundColor: "#e4dede",
        justifyContent: "center",
        marginTop: 20 * k,
        height: 1 * k,
        width: 220 * k,
    },
    dividerLine1: {
        backgroundColor: "#26b484",
        justifyContent: "center",
        marginLeft: 30 * k,
        marginRight: 30 * k,
        width: 1 * k,
        height: 30 * k,
    },
    dividerLine2: {
        backgroundColor: "#6f6c6c",
        justifyContent: "center",
        marginLeft: 20 * k,
        marginRight: 30 * k,
        marginTop: 30 * k,
        width: 1 * k,
        height: 35 * k,
    },

    image_item: {
        width: 80 * k,
        height: 80 * k,
    },
    text_bottom: {
        fontSize: 30 * k,
        color: "#26b484",
    },
    input: {
        backgroundColor: "#fff",
        width: 375 * k,
        marginLeft: 5 * k,

    },

});