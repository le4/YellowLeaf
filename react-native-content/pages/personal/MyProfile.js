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
    TitleView
} from 'react-native';




import Icon from 'react-native-vector-icons/EvilIcons';

import Utils from '../../utils/Utils'
import Personal from './Personal';

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class MyProfile extends Component {


    constructor(props) {
        super(props);


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

            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <ScrollView>
                <View style={styles.avatarBg}>

                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            onpress={() => this.props.navigator.pop()}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 30 * k,
                                marginLeft: 10 * k,
                            }}>取消</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onpress={() => this.props.navigator.pop()}>
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


                <View style={styles.item}>
                    <Text style={styles.titleText}>基本信息</Text>
                    <Text style={styles.titleText1}>必填</Text>

                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>姓名:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>性别:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>大学:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>专业:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>年级:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>入学时间:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>毕业时间:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>电话:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>学历:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>学号:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>困难等级:</Text>
                    <TextInput
                        style={styles.input}
                    />
                </View>
                <View style={styles.dividerLine}/>

                <View style={styles.item}>
                    <Text style={styles.itemText}>兴趣爱好:</Text>
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