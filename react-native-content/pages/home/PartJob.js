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
import Icon from 'react-native-vector-icons/Ionicons';

var deviceWidth = Utils.getScreenWidth();
var k = Utils.getAutoScaleHeight();


export default class PartJob extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = this.ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2', 'row 2']);
        this.renderItem = this.renderItem.bind(this);

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
                borderColor: Constant.mainColor,
                borderWidth: 2 * k
            }}>
                <Text
                    style={{marginTop: 20 * k, fontSize: 26 * k, color: "#666", width: itemWidth, textAlign: "center"}}>教务处{rowId}</Text>
                <Text style={{marginTop: 17 * k, fontSize: 24 * k, color: "#999", marginLeft: 36 * k}}>职位：内容2</Text>
                <Text style={{marginTop: 17 * k, fontSize: 24 * k, color: "#999", marginLeft: 36 * k}}>学期：内容3</Text>
                <Text style={{marginTop: 17 * k, fontSize: 24 * k, color: "#999", marginLeft: 36 * k}}>性质：内容3</Text>
                <View style={{
                    flexDirection: "row",
                    backgroundColor: Constant.mainColor,
                    marginTop: 20 * k,
                    height: 50 * k,
                }}>
                    <Text style={{
                        color: "#fff",
                        textAlignVertical: "center",
                        flex: 1,
                        marginLeft: 40 * k
                    }}>查看详情</Text>
                    <Icon name="ios-arrow-forward" size={30 * k} color="#fff"
                          style={{marginTop: 10 * k, marginRight: 20 * k}}/>
                </View>
            </View>);
    }

    _renderSeparator = (sectionID, rowID) => {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#fff", height: 20 * k}}/>
        );
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <TitleView title="勤工助学" {...this.props} isSearch={true}/>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <ListView
                        style={{margin: 36 * k}}
                        dataSource={this.dataSource}
                        contentContainerStyle={styles.contentContainerStyle}
                        renderRow={this.renderItem}
                        renderSeparator={this._renderSeparator}
                        pageSize={12}
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
    },
});