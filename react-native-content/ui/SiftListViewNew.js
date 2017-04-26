'use strict'

import React, {Component, PropTypes} from 'react';

import {
    NativeModules,
    StyleSheet,
    Dimensions,
    View,
    Text,
    ListView,
    TouchableWithoutFeedback,
    TouchableWithNativeFeedback,
    TouchableOpacity,
    TouchableHighlight,
    Modal,
    ActivityIndicator,
    Image
} from 'react-native';


export default class SiftListViewNew extends Component {

    static defaultProps = {
        item: {
            title: '交易方向',
            tag: 0,
            type: 0,
            list: ["安徽", "北京", "天津"],
        }
    };

    ///重置的方法
    reset = () => {
        this.setState({
            selectedIndex: 0,
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,///是否展开下拉列表
            selectedIndex: this._judgemenntTitleIndex(),
            btnTitle: props.item.title,
        };

        this._button = null;
        this._buttonFrame = null;
    }

    _judgemenntTitleIndex = () => {
        const {item} = this.props;
        var index = 0;
        item.list.map((sub, i) => {
            if (item.title == sub) {
                index = i;
            }
        });
        return index;
    };

    _updatePosition = (callback) => {
        if (this._button && this._button.measure) {
            this._button.measure((fx, fy, width, height, px, py) => {
                this._buttonFrame = {x: px, y: py, w: width, h: height};
                callback && callback();
            });
        }
    };

    _onModalPress = () => {
        this.hide();
    };

    show = () => {
        this._updatePosition(() => {
            this.setState({
                showDropdown: true,
            });
        });
    };


    hide = () => {
        this.setState({
            showDropdown: false,
        });
    };

    select = (idx) => {
        const {item, selectedCallBack, type} = this.props;
        const {selectedIndex, btnTitle} = this.state;

        if (idx == null || item.list == null || idx >= item.list.length) {
            idx = selectedIndex;
        }
        this.setState({
            selectedIndex: idx,
            btnTitle: type == 1 ? item.list[idx] : btnTitle,
        });
        selectedCallBack && selectedCallBack(idx, item.tag);
        this.hide();
    };

    _renderButton = () => {
        const {textStyle, style} = this.props;
        const {showDropdown, btnTitle} = this.state;
        let icon = showDropdown ? require('../imgs/icon_up.png') : require('../imgs/icon_down.png');
        return (
            <TouchableOpacity ref={button => this._button = button}
                              onPress={this._onButtonPress}>
                <View style={[styles.button, style]}>
                    <Text style={[styles.buttonText, textStyle]}
                          numberOfLines={1}>
                        {btnTitle}
                    </Text>
                    <Image
                        style={{marginLeft: 8, width: 15, height: 8}}
                        source={icon}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    _onButtonPress = () => {
        this.show();
    };

    _renderModal = () => {
        const {showDropdown, selectedIndex} = this.state;
        const {style, item, type} = this.props;
        if (showDropdown && this._buttonFrame) {
            let frameStyle = this._calcPosition();
            return (
                <Modal animationType='fade'
                       transparent={true}
                >
                    <TouchableWithoutFeedback onPress={this._onModalPress}>
                        <View style={[styles.modal]}>
                            <View
                                style={[frameStyle, styles.dropdown, {height: item.list ? 30 * item.list.length : 0}, {width: style.width}]}>
                                {
                                    item.list ? item.list.map((sublist, i) => {
                                        return (
                                            <TouchableOpacity
                                                onPress={() => this.select(i)}
                                                key={i}
                                            >
                                                <View
                                                    style={[styles.listCellStyle, {width: style.width - 1}, selectedIndex === i && styles.listCellS]}
                                                >
                                                    <Text
                                                        style={[styles.rowText, selectedIndex === i && {color: "#26b484"}]}>
                                                        {sublist}
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    }) : (<View></View>)}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            );
        }
    };

    _calcPosition = () => {
        let dimensions = Dimensions.get('window');
        let windowWidth = dimensions.width;
        let windowHeight = dimensions.height;

        let dropdownHeight = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle).height) ||
            StyleSheet.flatten(styles.dropdown).height;

        let bottomSpace = windowHeight - this._buttonFrame.y - this._buttonFrame.h;
        let rightSpace = windowWidth - this._buttonFrame.x;
        let showInBottom = bottomSpace >= dropdownHeight || bottomSpace >= this._buttonFrame.y;
        let showInLeft = rightSpace >= this._buttonFrame.x;

        var style = {
            height: dropdownHeight,
            top: (showInBottom ? this._buttonFrame.y + this._buttonFrame.h : Math.max(0, this._buttonFrame.y - dropdownHeight)) - 0.5,
        }

        if (showInLeft) {
            style.left = this._buttonFrame.x;
        } else {
            let dropdownWidth = (this.props.dropdownStyle && StyleSheet.flatten(this.props.dropdownStyle).width) ||
                (this.props.style && StyleSheet.flatten(this.props.style).width) || -1;
            if (dropdownWidth !== -1) {
                style.width = dropdownWidth;
            }
            style.right = rightSpace - this._buttonFrame.w;
        }

        if (this.props.adjustFrame) {
            style = this.props.adjustFrame(style) || style;
        }

        return style;
    };

    render() {
        return (
            <View {...this.props}>
                {this._renderButton()}
                {this._renderModal()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 32,
        borderRightColor: "#999",
        borderRightWidth: 0.5,
        borderBottomColor: "#999",
        borderBottomWidth: 0.5,
        borderTopColor: "#999",
        borderTopWidth: 0.5,
    },
    buttonText: {
        fontSize: 13,
    },
    modal: {
        flex: 1,
    },
    dropdown: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderBottomColor: "#999",
        borderBottomWidth: 0.5,
        borderRightColor: "#999",
        borderRightWidth: 0.5,
        borderLeftColor: "#999",
        borderTopColor: "#999",
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
    },
    loading: {
        alignSelf: 'center',
    },
    list: {
        flex: 1,
    },
    rowText: {
        fontSize: 14,
        color: "#666",
        textAlignVertical: 'center',
    },
    highlightedRowText: {
        color: 'black',
    },
    separator: {
        height: 2,
        backgroundColor: 'lightgray',
    },
    listCellStyle: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listCellS: {
        backgroundColor: "#f0f0f0"
    },
});