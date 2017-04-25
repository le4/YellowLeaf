import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import SiftListViewNew from './SiftListViewNew';
import Utils from '../utils/Utils'
var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();

export default class SiftListControl extends Component {
    static defaultProps = {
        items: [{
            title: '交易方向',
            tag: 0,
            icon: require('../imgs/icon_down.png'),
            list: ["安徽", "北京", "天津"]
        }, {
            title: '区域大小',
            tag: 0,
            icon: require('../imgs/icon_down.png'),
            list: ["安徽", "北京", "天津"]
        }, {
            title: '薪资高低',
            tag: 0,
            icon: require('../imgs/icon_down.png'),
            list: ["安徽", "北京", "天津"]
        }],
        width: 200
    };

    constructor() {
        super();
        this.state = {};
    }

    _selectedIndex = (index, tag) => {
        const {callBack} = this.props;
        callBack && callBack(index, tag);
    };

    render() {
        const {items, width} = this.props;
        return (
            <View style={[styles.listBar, this.props.style]}>
                {items.map((item, i) => {
                    return (
                        <SiftListViewNew
                            style={{backgroundColor: 'white', width: deviceWidth / items.length}}
                            item={item}
                            key={i}
                            selectedCallBack={this._selectedIndex}/>)
                })}
            </View> );
    }
}
const styles = StyleSheet.create({
    listBar: {
        height: 32,
        flexDirection: 'row',
    }
});

