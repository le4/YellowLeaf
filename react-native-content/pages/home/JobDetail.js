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
    Platform,
    ListView
} from 'react-native';
import {Tabs, WhiteSpace} from 'antd-mobile';
const TabPane = Tabs.TabPane;

import Constant from '../../utils/Constant';

import Utils from '../../utils/Utils';

import TitleView from '../../ui/TitleView';

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

import Icon from 'react-native-vector-icons/EvilIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default class JobDetail extends Component {

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2']),
        };

    }

    _renderRow() {
        return (
            <View>
                <View style={{flexDirection: "row", marginLeft: 36 * k, marginRight: 36 * k}}>
                    <Icon name="user" size={50 * k} color={Constant.mainColor} style={{marginTop: 20 * k}}/>
                    <Text style={{
                        marginTop: 20 * k,
                        flex: 1,
                        color: "#999",
                        fontSize: 24 * k,
                        marginLeft: 15 * k
                    }}>用户1</Text>
                    <Text style={{marginTop: 20 * k, color: "#999", fontSize: 24 * k}}>7月1日</Text>
                </View>
                <Text style={{
                    marginTop: 15 * k,
                    color: "#999",
                    fontSize: 26 * k,
                    marginBottom: 20 * k,
                    marginLeft: 36 * k,
                    marginRight: 36 * k
                }}>今天是个好日子，天天都是好日子,今天是个好日子，天天都是好日子</Text>
            </View>
        );
    }

    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#e4dede", height: 1 * k, marginLeft: 36 * k} }/>
        );
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
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <TitleView title="职位详情" {...this.props} showShare={true}/>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor: "#fff"}}>
                        <Text style={styles.title} numberOfLines={1}>我是标题我是标题我是标题我是标题我是标题abcdeeffg</Text>
                        <View
                            style={{
                                marginLeft: 36 * k,
                                marginTop: 20 * k,
                                flexDirection: "row",
                                backgroundColor: "#fff",
                                marginBottom: 20 * k
                            }}>
                            <Icon1 name="rmb" size={30 * k} color="#26B484" style={{marginTop: 2 * k}}/>
                            <Text style={{marginLeft: 5 * k, color: "#666666", fontSize: 24 * k}}>200/天</Text>
                            <Icon name="location" size={40 * k} color="#26B484"
                                  style={{marginLeft: 60 * k, marginTop: 0 * k}}/>
                            <Text style={{marginLeft: 5 * k, color: "#666666", fontSize: 24 * k}}>天安门</Text>
                            <Icon name="calendar" size={40 * k} color="#26B484"
                                  style={{marginLeft: 60 * k, marginTop: 2 * k}}/>
                            <Text style={{marginLeft: 5 * k, color: "#666666", fontSize: 24 * k}}>周五</Text>
                        </View>
                    </View>
                    <View style={{height: 25 * k, backgroundColor: "#f0f5f1", width: deviceWidth}}/>
                    <View style={{backgroundColor: "#fff", marginTop: 25 * k, marginBottom: 25 * k}}>
                        <Text style={styles.title} numberOfLines={1}>公司名公司名公司名公司名公司名公司名</Text>
                        <Text style={{
                            marginLeft: 36 * k,
                            color: "#999999",
                            fontSize: 26 * k,
                            marginRight: 36 * k,
                            marginBottom: 20 * k,
                            marginTop: 20 * k,
                            lineHeight: 20,
                        }}>可以看到iphone
                            6的宽度为 375pt，
                            对应了上边的375，由此可见react的单位为pt。 那如何获取实际的像素尺寸呢？ 这对图片的高清化很重要，
                            如果我的图片大小为100*100 px. 设置宽度为100 * 100</Text>
                    </View>
                    <View style={{height: 25 * k, backgroundColor: "#f0f5f1", width: deviceWidth}}/>
                    <View style={styles.container}>
                        <Tabs defaultActiveKey="1" onChange={this.callback} onTabClick={this.handleTabClick}
                              swipeable={false} animated={true}
                              underlineColor="#999"
                              activeUnderlineColor="#26B484"
                              textColor="#333333"
                              activeTextColor="#26B484"
                        >
                            <TabPane tab="描述" key="1" style={{backgroundColor: "#fff"}}>
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#fff',
                                }}>
                                    <Text style={{marginLeft: 36 * k, marginRight: 36 * k}}>{Constant.jobDetail}</Text>
                                </View>
                            </TabPane>
                            <TabPane tab="评价" key="2">
                                <View style={{
                                    backgroundColor: '#fff',
                                }}>
                                    <ListView
                                        dataSource={this.state.dataSource}
                                        renderRow={this._renderRow}
                                        renderSeparator={this._renderSeparator}
                                    />
                                </View>
                            </TabPane>
                        </Tabs>
                        <WhiteSpace />
                    </View>
                </ScrollView>
                <View
                    style={{
                        height: 130 * k, backgroundColor: "transparent", width: deviceWidth, alignItems: "center",
                        flexDirection: "row"
                    }}>
                    <View style={{
                        width: 300 * k,
                        height: 95 * k,
                        backgroundColor: Constant.mainColor,
                        borderRadius: 10 * k,
                        marginLeft: 55 * k,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Icon2 name="ios-paper-plane-outline" size={40 * k} color="#fff"/>
                        <Text style={{color: "#fff", fontSize: 32 * k, marginLeft: 13 * k}}>按钮1</Text>
                    </View>
                    <View style={{
                        width: 300 * k,
                        height: 95 * k,
                        backgroundColor: "#1BABE0",
                        borderRadius: 10 * k,
                        marginLeft: 40 * k,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Icon name="star" size={45 * k} color="#fff"/>
                        <Text style={{color: "#fff", fontSize: 32 * k, marginLeft: 10 * k}}>按钮2</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 1,
        marginBottom: 30 * k
    },
    title: {
        fontSize: 32 * k,
        color: "#333333",
        marginLeft: 36 * k,
        marginTop: 30 * k,
        marginRight: 36 * k,
    }

});