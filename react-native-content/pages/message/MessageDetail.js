/**
 * Created by shenyiya on 2017/5/3.
 */
'use strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const url = "http://www.58.com";

import TitleView from '../../ui/TitleView';


export default class MessageDetail extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <TitleView title="标题标题标题标题标题标题标题标题标题标题" {...this.props} showShare={true}/>
                <WebView
                    style={{width: width, height: height - 20, backgroundColor: 'gray'}}
                    source={{uri: url, method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
});