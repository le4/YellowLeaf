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

import TitleView from '../ui/TitleView'

export default class MyProfile extends Component {

    //构造函数
    constructor(props) {
        super(props);

    }

    //想要显示的页面一定是在这个函数中写出来
    render() {
        return (
            <View>
                <TitleView title="我的简历"/>
                <View style={{flexDirection: "row"}}>
                    <Text style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "#f35353",
                        color: "#fff",
                        fontSize: 24,
                        borderRadius: 10,
                        marginLeft: 36,
                        marginTop: 36,
                        textAlign: "center",
                        textAlignVertical: "center"
                    }}>布局1</Text>
                    <Text>布局2</Text>
                </View>
            </View>
        );

    }

}
