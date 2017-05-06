/**
 * Created by yangjing on 2017/5/4.
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

import Constant from '../../utils/Constant';

import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';


import Utils from '../../utils/Utils'
import TitleView from '../../ui/TitleView';


var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

export default class UnitDetail extends Component {

    //构造函数
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.dataSourceList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSourceList: this.dataSourceList.cloneWithRows(["0", "1", "2", "3", "4", "5"]),
        }
    }
    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#e4dede", height: 1 * k, marginLeft: 137 * k}}/>
        );
    }
    _renderRow(data, selectionId, RowId){
        return (
            <TouchableOpacity onPress={() => this.onButtonClick('第一页')} activeOpacity={0.5}>
                <View style={styles.list_item} key={Utils.getComponentKey()}>
                    <View style={{flexDirection: "column", marginLeft: 21 * k, width: 460 * k}}>
                        <Text style={{marginTop: 34 * k, fontSize: 30 * k, color: "#333333"}}>家电导购</Text>
                        <Text style={{marginTop: 15 * k, fontSize: 26 * k, color: "#999999"}} numberOfLines={1}>卖海尔洗衣机,冰箱</Text>


                    </View>


                </View>

            )
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

    render() {

        return (
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <TitleView title="单位详情" {...this.props} />

                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{backgroundColor: "#fff"}}>
                        <Text style={styles.title} numberofLines={1}>交大嘉园海归妈妈托管班</Text>
                        <Text style={styles.details}>可兼职, 日结或者月结均可.另根据服务质量发奖金.
                            4月1日起,周一至周五, 每天14点30分--18点30分</Text>
                        <View
                            style={{
                                marginLeft: 36 * k,
                                marginTop: 20 * k,
                                flexDirection: "row",
                                backgroundColor: "#fff",
                                marginBottom: 20 * k
                            }}>
                            <Icon name="telephone" size={30 * k} color="#26B484" style={{marginTop: 2 * k}}/>
                            <Text style={{marginLeft: 5 * k, color: "#666666", fontSize: 24 * k}}>010-50947931</Text>
                            <Icon1 name="location" size={40 * k} color="#26B484"
                                   style={{marginLeft: 60 * k, marginTop: 0 * k}}/>
                            <Text style={{marginLeft: 5 * k, color: "#666666", fontSize: 24 * k}}>西城</Text>
                        </View>
                        <View
                            style={{
                                marginTop: 15 * k,
                                height: 130 * k,
                                backgroundColor: "transparent",
                                width: deviceWidth,
                            }}>
                            <View style={{
                                width: 300 * k,
                                height: 95 * k,
                                backgroundColor: Constant.mainColor,
                                borderRadius: 10 * k,
                                marginLeft: 36 * k,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                                <Icon2 name="ios-paper-plane-outline" size={40 * k} color="#fff"/>
                                <Text style={{color: "#fff", fontSize: 32 * k, marginLeft: 13 * k}}>投递简历</Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: "#F6F6F5",
                            height: 70 * k,
                            width: deviceWidth,
                        }}>
                            <Text style={{marginLeft: 40 * k, marginTop: 15 * k, color: "#333333", fontSize: 30 * k}}>招聘职位</Text>
                        </View>
                        <View>

                        </View>


                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    //页面框架
    container: {
        flex: 1,
        marginBottom: 30 * k
    },
    title: {
        fontSize: 36 * k,
        color: "#333333",
        marginLeft: 36 * k,
        marginTop: 20 * k,
        marginRight: 36 * k,
    },
    details: {
        marginLeft: 36 * k,
        color: "#999999",
        fontSize: 24 * k,
        marginRight: 36 * k,
        marginBottom: 20 * k,
        marginTop: 20 * k,
        lineHeight: 20,
    },

});

