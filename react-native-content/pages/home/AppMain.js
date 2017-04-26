/**
 * 商城主框架界面
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    BackAndroid,
    Platform,
    ToastAndroid
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Constant from '../../utils/Constant';

import Home from './Home';
import Message from '../message/Message';
import Personal from '../personal/Personal';

export default class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

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
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.LONG);
        return true;
    };

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title="主页"
                    selected={this.state.selectedTab === 'home'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../imgs/ic_tab_home.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_home_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="消息"
                    selected={this.state.selectedTab === 'order'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../imgs/ic_tab_message.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_message_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'order'})}>
                    <Message {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我的"
                    selected={this.state.selectedTab === 'center'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("../../imgs/ic_tab_center.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../../imgs/ic_tab_center_press.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'center'})}>
                    <Personal {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: Constant.mainColor,
    }
});
