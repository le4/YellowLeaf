/**
 * Created by android on 2017/3/28.
 */
//根据页面
'use strict'; // 启用严格模式

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Navigator
} from 'react-native';

import FirstPage from  './pages/First';
import AppMain from  './pages/AppMain';

// 主模块
export default class App extends Component {


    constructor(props) {
        super(props);
        this.renderScene = this.renderScene.bind(this);
        this.configureScene = this.configureScene.bind(this);
    }

    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    configureScene(route, routeStack) {
        if (route.type == 'Modal') {
            return Navigator.SceneConfigs.FloatFromBottom;
        }
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: AppMain}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}

// 导航栏的Mapper
var NavigationBarRouteMapper = {
    // 左键
    LeftButton(route, navigator, index, navState) {
        if (index > 0) {
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        underlayColor='transparent'
                        onPress={() => {
                            if (index > 0) {
                                navigator.pop()
                            }
                        }}>
                        <Text style={styles.leftNavButtonText}>
                            后退
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return null;
        }
    },
    // 右键
    RightButton(route, navigator, index, navState) {
        if (route.onPress)
            return (
                <View style={styles.navContainer}>
                    <TouchableOpacity
                        onPress={() => route.onPress()}>
                        <Text style={styles.rightNavButtonText}>
                            {route.rightText || '右键'}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
    },
    // 标题
    Title(route, navigator, index, navState) {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>
                    应用标题
                </Text>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    // 页面框架
    container: {
        flex: 4,
        marginTop: 100,
        flexDirection: 'column'
    },
    // 导航栏
    navContainer: {
        backgroundColor: '#81c04d',
        paddingTop: 12,
        paddingBottom: 10,
    },
    // 导航栏文字
    headText: {
        color: '#ffffff',
        fontSize: 22
    },
    // 按钮
    button: {
        height: 60,
        marginTop: 10,
        justifyContent: 'center', // 内容居中显示
        backgroundColor: '#ff1049',
        alignItems: 'center'
    },
    // 按钮文字
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    // 左面导航按钮
    leftNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginLeft: 13
    },
    // 右面导航按钮
    rightNavButtonText: {
        color: '#ffffff',
        fontSize: 18,
        marginRight: 13
    },
    // 标题
    title: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        flex: 1                //Step 3
    }
});


