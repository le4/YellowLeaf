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

import Utils from '../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class Personal extends Component {

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(['row 1', 'row 2']),
        };
    }


    _renderRow(rowData, selectionId, rowId) {
        return (
            <View style={styles.item}>
                <Text style={styles.itemTitle} numberOfLines={1}>我是标题我是标题我是标题</Text>
                <Image style={styles.itemImage} source={{
                    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=' +
                    'b9999_10000&sec=1492506028916&di=c6972126499867a665787987275a6c08&imgtype=0&src=http%3A%2F%2Fimgbdb3.bendibao.com%' +
                    '2Fguangzhou%2F201510%2F29%2F20151029155043552.jpg'
                }}/>
                <Text style={styles.itemDesc} numberOfLines={2}>我是描述我是描述我是描述我是描述我是描述我是描述述我是描述述我是描述</Text>
                <View style={styles.dividerLine}/>
                <Text style={styles.itemDesc}>阅读原文</Text>
            </View>
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