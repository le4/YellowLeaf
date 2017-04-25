/**
 * Created by android on 2017/4/17.
 */
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Button, Picker, List} from 'antd-mobile';

import {district, provinceLite as province} from 'antd-mobile-demo-data';

export default class HelloWorldApp extends Component {
    render() {

        return (
            <List style={{backgroundColor: 'white'}} className="picker-list">
                <Picker data={district} cols={1} className="forss">
                    <List.Item arrow="horizontal">选择地区（单列）</List.Item>
                </Picker>
            </List>);
    }
}
