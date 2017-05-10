/**
 * Created by wtl on 2017/4/23.
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
    BackAndroid
} from 'react-native';

import TitleView from '../../ui/TitleView';
import Utils from '../../utils/Utils';
import JobDetail from './JobDetail';
import Icon from 'react-native-vector-icons/EvilIcons';
var deviceWidth = Utils.getScreenWidth();

var k = Utils.getAutoScaleHeight();

export default class MySend extends Component {

    //构造函数
    constructor(props) {
        super(props);
        this._renderRow=this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.dataSourceList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSourceList: this.dataSourceList.cloneWithRows(["0", "1", "2", "3","4","5","6"]),
        }
    }
onButtonClick(flag){
         if(flag == "JobDetail"){
             InteractionManager.runAfterInteractions(() => {
                             this.props.navigator.push({
                                  component: JobDetail,
                                  name: 'JobDetail',
                             });
                           });
         }
    }

    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#e4dede", height: 1 * k, marginLeft: 30 * k} }/>
        );
    }
    _renderRow(data,selectionId,RowId){
        return(
            <TouchableOpacity onPress={() => this.onButtonClick('JobDetail')} activeOpacity={0.5}>
                <View style={styles.list_item} key={Utils.getComponentKey()}>
                    <View style={{flexDirection: "column", marginLeft: 35 * k, width: 460 * k,}}>
                        <Text style={{marginTop: 34 * k, fontSize: 30 * k, color: "#333333"}}>小学生托管带班老师</Text>
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
                    <View style={{flexDirection: "column", marginLeft: 100 * k, alignItems: "flex-end"}}>
                        <Text style={{marginTop: 30 * k, fontSize: 30 * k, color: "#f35353",}}>1200/月</Text>
                        <Text style={{marginTop: 65 * k, fontSize: 26 * k, color: "#999999"}}>2月20日</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    //想要显示的页面一定是在这个函数中写出来
    render() {
        return (
            <View style={{backgroundColor: "#fff", flex: 1}}>
                <TitleView title="兼职岗位" {...this.props} />
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <ListView
                        dataSource={this.state.dataSourceList}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />
                </ScrollView>
        </View>
        );

    }
}
const styles = StyleSheet.create({
    viewPagerItem: {
        width: deviceWidth,
        height: 280 * k,
    },
    image_item: {
        width: 180 * k,
        height: 200 * k,
    },
    center_item_wrap: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 3 * k,
    },
    center_item_tv: {
        fontSize: 14,
        marginBottom: 8,
        backgroundColor: '#00000000'
    },
    list_item: {
        backgroundColor: "#fff",
        flexDirection: "row"
    }
});
