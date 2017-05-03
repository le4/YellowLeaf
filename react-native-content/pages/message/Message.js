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
    ListView,
    TextInput
} from 'react-native';

import Utils from '../../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


import MessageDetail from '../../pages/message/MessageDetail';

export default class Message extends Component {

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    onButtonClick(tag) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: MessageDetail,
                name: 'messageDetail',
            });
        });

    }

    _renderRow(rowData, selectionId, rowId) {
        return (
            <TouchableOpacity onPress={() => this.onButtonClick('messageDetail')} activeOpacity={0.5}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle} numberOfLines={1}>我是标题我是标题我是标题</Text>
                    <Image style={styles.itemImage} source={{
                        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_' +
                        '10000&sec=1493030204829&di=9f612acc68fc687cce7ac1972f8f1aad' +
                        '&imgtype=0&src=http%3A%2F%2Fww1.sinaimg.cn%2Flarge%2Fb07d76b4jw1dwje6sv8eaj.jpg'
                    }}/>
                    <Text style={styles.itemDesc} numberOfLines={2}>我是描述我是描述我是描述我是描述我是描述我是描述述我是描述述我是描述</Text>
                    <View style={styles.dividerLine}/>
                    <Text style={styles.itemDesc}>阅读原文</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{height: 30 * k}}/>
        );
    }

    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <View style={styles.title}>
                    <Text style={{fontSize: 36 * k, color: "#fff"}}>消息</Text>
                </View>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <ListView
                        style={{marginTop: 60 * k,}}
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        renderSeparator={this._renderSeparator}
                    />
                </ScrollView>
            </View>);

    }
}
const styles = StyleSheet.create({
    title: {
        height: 80 * k,
        width: deviceWidth,
        backgroundColor: "#26b484",
        alignItems: "center",
        justifyContent: "center"
    },
    item: {
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: 15 * k,
        borderColor: "#666666",
        borderWidth: 1 * k,
        marginLeft: 30 * k,
        marginRight: 30 * k,
    },
    itemTitle: {
        width: 560 * k,
        fontSize: 30 * k,
        color: "#333333",
        marginLeft: 60 * k,
        marginTop: 30 * k,
        marginBottom: 15 * k,
    }, itemImage: {
        width: 560 * k,
        height: 266 * k,
        marginLeft: 60 * k,
        marginRight: 60 * k,
    },
    itemDesc: {
        width: 560 * k,
        fontSize: 24 * k,
        color: "#999999",
        marginLeft: 60 * k,
        marginTop: 20 * k,
        marginBottom: 20 * k,
        marginRight: 60 * k,
    },
    dividerLine: {
        backgroundColor: "#e4dede",
        height: 1 * k,
        marginLeft: 60 * k,
        marginRight: 60 * k
    },
});