import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import globalStyle from '../../../styles'

export default class Row extends React.Component{

    render() {


        const index = this.props.index;
        let color = globalStyle.fontColor;
        if (index === 0 || index === 1)
            color = globalStyle.secondaryColor


        return (
        <View style={style.container}>
            <Text style={style.time}>
                {this.props.info.time}
            </Text>
            <TouchableOpacity onPress={this.props.callback}>
            <Text style={[style.date, {color: color}]}>
                {this.props.info.date}
            </Text>
            </TouchableOpacity>
        </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 0.3,
        borderBottomColor: globalStyle.fontColor
    },
    time: {
        fontSize: 14,
        color: globalStyle.fontColor
    },
    date: {
        fontSize: 18,
        color: globalStyle.fontColor
    }

})