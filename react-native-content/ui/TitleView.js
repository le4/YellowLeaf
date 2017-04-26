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
    TextInput
} from 'react-native';

import Constant from '../utils/Constant'

import Utils from '../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/EvilIcons';

export default class TitleView extends Component {

    constructor(props) {
        super(props)
        this.title = this.props.title;
        this.showShare = this.props.showShare;
        this.isSearch = this.props.isSearch;
        this.hintText = this.props.hintText;
    }

    render() {

        if (Utils.isTextEmpty(this.hintText)) {
            this.hintText = "搜索职位/公司";
        }
        if (this.showShare) {
            this.shareIcon = <TouchableOpacity
                onPress={() => this.props.navigator.pop()}>
                <Icon1 name="share-google" size={50 * k} color="#fff"
                       style={{marginRight: 36 * k}}/>
            </TouchableOpacity>;
        } else {
            this.shareIcon = <View />;
        }

        if (!this.isSearch) { //是不是搜索标题栏
            return (<View style={{
                height: Constant.titleHeight,
                width: deviceWidth,
                backgroundColor: Constant.mainColor,
                flexDirection: "row",
                alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => this.props.navigator.pop()}>
                    <Icon name="ios-arrow-back" size={50 * k} color="#fff"
                          style={{marginLeft: 36 * k}}/>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 36 * k,
                    color: "#fff",
                    textAlign: "center",
                    justifyContent: "center",
                    flex: 1
                }}>{this.title}</Text>
                {this.shareIcon}
            </View>);
        } else {
            return (
                <View style={{
                    height: Constant.titleHeight,
                    width: deviceWidth,
                    backgroundColor: Constant.mainColor,
                    flexDirection: "row",
                    alignItems: "center",
                }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigator.pop()}>
                        <Icon name="ios-arrow-back" size={50 * k} color="#fff"
                              style={{marginLeft: 36 * k}}/>
                    </TouchableOpacity>
                    <View style={{
                        width: 550 * k,
                        backgroundColor: "#fff",
                        height: 50 * k,
                        alignItems: "center",
                        borderRadius: 35 * k,
                        marginLeft: 50 * k,
                        flexDirection: "row",
                    }}>
                        <Icon1 name="search" size={50 * k} color="#6f6c6c" style={{marginLeft: 120 * k,}}/>
                        <TextInput
                            style={{
                                width: 500 * k,
                                fontSize: 22 * k,
                                color: "#6f6c6c",
                                height: 70 * k,
                            }}
                            placeholder={this.hintText}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                </View>);
        }
    }

}