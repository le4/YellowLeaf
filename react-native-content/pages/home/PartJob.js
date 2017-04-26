/**
 * 兼职页面
 * Created by shenyiya on 2017/4/25.
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

import GridView from '../../ui/GridView';
import TitleView from '../../ui/TitleView';
import Utils from '../../utils/Utils';
import Constant from '../../utils/Constant';

import Icon from 'react-native-vector-icons/EvilIcons';

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

import SiftListControl from '../../ui/SiftListControl';

export default class PartJob extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = this.ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']);

        this.dataSourceList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSourceList = this.dataSourceList.cloneWithRows(["0", "1", "2", "3"]);

        this.renderItem = this.renderItem.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.state = {}
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

    renderItem(data, selectionId, rowId) {
        let margin = 36;
        let itemWidth = (deviceWidth - margin * 2) / 3;
        return (
            <View style={{
                width: itemWidth,
                backgroundColor: "#fff",
                marginBottom: 20 * k,
                marginTop: 20 * k,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Image style={{width: 80 * k, height: 80 * k}} source={require('../../imgs/icon_pratjob_1.png')}/>
                <Text style={{fontSize: 26 * k, color: "#333", marginTop: 15 * k}}>描述</Text>
            </View>);
    }


    _renderRow(rowData, selectionId, rowId) {
        return (
            <TouchableOpacity onPress={() => this.onButtonClick('第一页')} activeOpacity={0.5}>
                <View style={styles.list_item} key={Utils.getComponentKey()}>
                    <View style={{flexDirection: "column", marginLeft: 36 * k, width: 560 * k,}}>
                        <Text style={{marginTop: 34 * k, fontSize: 30 * k, color: "#333333"}}>名称名称名称名称名称</Text>
                        <Text style={{marginTop: 15 * k, fontSize: 26 * k, color: "#999999"}} numberOfLines={1}>描述描述描述描述描述描述描述描述描述</Text>
                        <View style={{flexDirection: "row"}}>
                            <Icon name="location" size={35 * k} color="#333333"
                                  style={{marginBottom: 35 * k, marginTop: 15 * k,}}/>
                            <Text
                                style={{
                                    fontSize: 26 * k,
                                    color: "#999999",
                                    marginLeft: 8 * k,
                                    marginTop: 13 * k
                                }}>北京市朝阳区姚家园</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: "column", marginLeft: 21 * k, alignItems: "flex-end"}}>
                        <Text style={{marginTop: 30 * k, fontSize: 30 * k, color: "#f35353",}}>1200</Text>
                        <Text style={{marginTop: 65 * k, fontSize: 26 * k, color: "#999999"}}>2月20日</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    onButtonClick(tag) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: JobDetail,
                name: 'JobDetail',
            });
        });

    }

    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#e4dede", height: 1 * k, marginLeft: 36 * k} }/>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TitleView title="校园兼职" {...this.props} isSearch={true} hintText="搜索兼职"/>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <Text style={{fontSize: 28 * k, color: "#333", marginTop: 20 * k, marginLeft: 36 * k}}>热门兼职</Text>
                    <ListView
                        style={{marginTop: 15 * k, backgroundColor: "#fff"}}
                        dataSource={this.dataSource}
                        contentContainerStyle={styles.contentContainerStyle}
                        renderRow={this.renderItem}
                        pageSize={6}
                    />
                    <Text style={{
                        fontSize: 28 * k,
                        color: "#333",
                        marginTop: 20 * k,
                        marginLeft: 36 * k,
                        marginBottom: 15 * k
                    }}>兼职岗位</Text>
                    <SiftListControl />
                    <ListView
                        dataSource={this.dataSourceList}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />
                </ScrollView>
            </View>);

    }
}
const styles = StyleSheet.create({
    contentContainerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
    }, list_item: {
        backgroundColor: "#fff",
        flexDirection: "row"
    }
});