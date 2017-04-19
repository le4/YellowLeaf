/**
 * Created by android on 2017/3/28.
 */
'use strict';
import React, {Component} from 'react';
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    InteractionManager,
    BackAndroid,
    Platform
} from 'react-native';
import {Tabs, WhiteSpace} from 'antd-mobile';
const TabPane = Tabs.TabPane;

import Constant from '../utils/Constant'

import Utils from '../utils/Utils'

import TitleView from '../ui/TitleView';

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

import Icon from 'react-native-vector-icons/Ionicons';

export default class JobDetail extends Component {

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

    callback = (key) => {
        console.log('onChange', key);
    }
    function

    handleTabClick = (key) => {
        console.log('onTabClick', key);
    }

    render() {
        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <TitleView title="职位详情" {...this.props} showShare={true}/>
                <View style={styles.container}>
                    <Tabs defaultActiveKey="1" onChange={this.callback} onTabClick={this.handleTabClick}
                          swipeable={false} animated={true}>
                        <TabPane tab="选项卡一" key="1">
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                height: 500 * k
                            }}>
                                <Text> 选项卡一内容</Text>
                            </View>
                        </TabPane>
                        <TabPane tab="选项卡二" key="2">
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                height: 500 * k
                            }}>
                                <Text>选项卡2222内容</Text>
                            </View>
                        </TabPane>
                        <TabPane tab="选项卡三" key="3">
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                height: 500 * k
                            }}>
                                <Text> 选项卡33333内容</Text>
                            </View>
                        </TabPane>
                    </Tabs>
                    <WhiteSpace />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 1
    },

});