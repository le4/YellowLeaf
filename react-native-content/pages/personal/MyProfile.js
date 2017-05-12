/**
 * Created by yangjing on 2017/4/25.
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



import { DatePicker } from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Picker, List, WhiteSpace } from 'antd-mobile';
import Icon from 'react-native-vector-icons/EvilIcons';

import Utils from '../../utils/Utils';

//可以选择的最早/最晚日期
const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-30 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('1987-01-01 +0800', 'YYYY-MM-DD Z').utcOffset(8);


var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

//如果不是使用List.Item 作为children, 自定义picker格式


//性别选择框数据
const sex = [
    {
        label: '男',
        value: '男',
    },
    {
        label: '女',
        value: '女',
    },
];


export default class MyProfile extends React.Component {
    state = {
        data: [],
        cols: 1,
        pickerValue: [],
        asyncValue: [],
        sValue: [],
        date: zhNow,
        rxValue: null,
        byValue: null,
        visible: false,
    };


    //选择框数据变化
    onChange = (data) => {
        console.log('onChange', data);
        this.setState({
            data,
        });
    }


    constructor(props) {
        super(props);
    }


    render() {


        return (

            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <ScrollView>
                    <View style={styles.avatarBg}>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                onpress={() => this.onButtonClick('取消')} activeOpacity={0.5}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 30 * k,
                                    marginLeft: 10 * k,
                                }}>取消</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onpress={() => this.onButtonClick('保存')} activeOpacity={0.5}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 30 * k,

                                    marginLeft: 550 * k,
                                }}>保存</Text>
                            </TouchableOpacity>
                        </View>

                        <Icon name="user" size={170 * k} color="#fff"/>
                        <Text style={{fontSize: 30 * k, color: "#fff", marginTop: 10 * k}}>编辑头像</Text>
                    </View>


                    {/*<View style={styles.item}>*/}
                    {/*<Text style={styles.titleText}>基本信息</Text>*/}
                    {/*<Text style={styles.titleText1}>必填</Text>*/}

                    {/*</View>*/}
                    {/*<View style={styles.dividerLine}/>*/}

                    <View style={styles.item}>
                        <Text style={styles.itemText}>姓名</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>


                    <List style={{backgroundColor: 'white'}} className="picker-list">
                        <Picker
                            data={sex}
                            cols={1}
                            title="选择性别"
                            extra=""
                            value={this.state.sValue}
                            onChange={v => this.setState({ sValue: v})}
                        >
                            <List.Item arrow="horizontal">性别</List.Item>
                        </Picker>
                    </List>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>大学</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>专业</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>年级</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <List
                        className="date-picker-list"
                        style={{backgroundColor: 'white'}}
                    >
                        <DatePicker
                            mode="date"
                            title="入学时间"
                            extra=""
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={v => this.setState({ rxValue: v})}
                            value={this.state.rxValue}
                        >
                            <List.Item arrow="horizontal" >入学时间</List.Item>
                        </DatePicker>
                    </List>
                    <View style={styles.dividerLine}/>

                    <List
                        className="date-picker-list"
                        style={{backgroundColor: 'white'}}
                    >
                        <DatePicker
                            mode="date"
                            title="毕业时间"
                            extra=""
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={v => this.setState({ byValue: v})}
                            value={this.state.byValue}
                        >
                            <List.Item arrow="horizontal">毕业时间</List.Item>
                        </DatePicker>
                    </List>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>电话</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>学历</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>学号</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>困难等级</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>

                    <View style={styles.item}>
                        <Text style={styles.itemText}>兴趣爱好</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.dividerLine}/>
                </ScrollView>

            </View>);
    }
}


const styles = StyleSheet.create({
    avatarBg: {
        height: 280 * k,
        width: deviceWidth,
        backgroundColor: "#26b484",
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    titleText: {
        fontSize: 40 * k,
        color: "#666666",
        marginLeft: 30 * k,
        marginTop: 70 * k,
        marginBottom: 15 * k,

    },
    titleText1: {
        fontSize: 24 * k,
        color: "#FE0707",
        width: 68 * k,
        height: 36 * k,
        borderWidth: 2 * k,
        borderColor: "#FE0707",
        borderRadius: 20 * k,
        textAlign: "center",
        textAlignVertical: "center",
        marginLeft: 50 * k,
        marginTop: 80 * k,
        marginBottom: 30 * k,

    },
    itemText: {
        fontSize: 30 * k,
        color: "#666666",
        marginLeft: 36 * k,
        marginTop: 30 * k,
        marginBottom: 30 * k,
        flex: 1
    },

    dividerLine: {
        backgroundColor: "#e4dede",
        height: 1 * k,

        marginLeft: 36 * k,
        flex: 1
    },

    input: {
        backgroundColor: "#fff",
        width: 550 * k,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 20 * k,

    },


});

