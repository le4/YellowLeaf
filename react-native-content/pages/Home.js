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

import Search from './Search';

import Icon from 'react-native-vector-icons/EvilIcons';

import ViewPager from 'react-native-viewpager';

import Utils from '../utils/Utils'

var deviceWidth = Utils.getScreenWidth();

var k = Utils.getAutoScaleHeight();

var IMGS = [
    'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=1024',
    'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
    'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
    'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
    'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
    'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
    'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
];

const CENTER_IMGS = [
    require('../imgs/home/img_1.png'),
    require('../imgs/home/img_2.png'),
    require('../imgs/home/img_3.png'),
    require('../imgs/home/img_4.png'),
    require('../imgs/home/img_5.png'),
    require('../imgs/home/img_6.png'),
    require('../imgs/home/img_7.png'),
    require('../imgs/home/img_8.png')
];

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
        this._renderPage = this._renderPage.bind(this);
        this._renderRow = this._renderRow.bind(this);
        this._renderSeparator = this._renderSeparator.bind(this);
        this.dataSource = new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2});
        this.dataSourceList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.dataSource.cloneWithPages(IMGS),
            dataSourceList: this.dataSourceList.cloneWithRows(["0", "1", "2", "3"]),
        }
    }

    _renderPage(data) {
        return (<Image source={{uri: data}}
                       style={styles.viewPagerItem}/>);
    }

    _renderRow(rowData, selectionId, rowId) {
        return (
            <TouchableOpacity onPress={() => this.onButtonClick('第一页')}>
                <View style={styles.list_item} key={Utils.getComponentKey()}>
                    <Text style={{
                        width: 96 * k,
                        height: 96 * k,
                        backgroundColor: "#009944",
                        color: "#fff",
                        borderRadius: 48 * k,
                        fontSize: 30 * k,
                        textAlign: "center",
                        textAlignVertical: "center",
                        marginLeft: 21 * k,
                        marginTop: 45 * k,
                        marginBottom: 45 * k,
                    }}>兼职</Text>
                    <View style={{flexDirection: "column", marginLeft: 21 * k, width: 460 * k,}}>
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
                component: Search,
                name: 'Search',
            });
        });

    }

    _renderSeparator(sectionID, rowID) {
        return (
            <View key={Utils.getComponentKey()}
                  style={{backgroundColor: "#e4dede", height: 1 * k, marginLeft: 137 * k} }/>
        );
    }

    render() {

        return (
            <View style={{backgroundColor: "#f0f5f1", flex: 1}}>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: deviceWidth,
                        backgroundColor: "#26b484",
                        height: 80 * k,
                    }}>
                        <View style={{
                            width: 600 * k,
                            backgroundColor: "#fff",
                            height: 70 * k,
                            alignItems: "center",
                            borderRadius: 35 * k,
                            marginLeft: 80 * k,
                            flexDirection: "row",
                            marginBottom: 10 * k
                        }}>
                            <Icon name="search" size={50 * k} color="#6f6c6c" style={{marginLeft: 100 * k,}}/>
                            <TextInput
                                style={{width: 500 * k, fontSize: 26 * k, color: "#6f6c6c", marginBottom: -5 * k}}
                                placeholder={'搜索职位/公司'}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{height: 260 * k}}>
                        <ViewPager
                            style={this.props.style}
                            dataSource={this.state.dataSource}
                            renderPage={this._renderPage}
                            isLoop={true}
                            autoPlay={true}
                        />
                    </View>
                    <View style={{marginTop: 0}}>
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                paddingTop: 20 * k,
                                paddingBottom: 20 * k,
                                height: 240 * k,
                                marginBottom: 20 * k,
                            }}>
                            <View style={{flex: 1, marginLeft: 50 * k}}>
                                <TouchableOpacity onPress={() => {
                                    this.centerItemAction(0)
                                }}>
                                    <Image source={CENTER_IMGS[0]} style={styles.image_item}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>勤工助学</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress={() => {
                                    this.centerItemAction(1)
                                }}>
                                    <Image source={CENTER_IMGS[1]} style={styles.image_item}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>校园兼职</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1}}>
                                <TouchableOpacity onPress={() => {
                                    this.centerItemAction(2)
                                }}>
                                    <Image source={CENTER_IMGS[2]} style={styles.image_item}>
                                        <View style={styles.center_item_wrap}>
                                            <Text style={styles.center_item_tv}>实习就业</Text>
                                        </View>
                                    </Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
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
        height: 242 * k,
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