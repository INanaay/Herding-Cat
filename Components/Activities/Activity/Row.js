import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import globalStyle from '../../../styles'

export default class Row extends React.Component{
    render() {

        console.log(this.props)
        return (
        <View style={style.container}>
            <Text style={style.time}>
                {this.props.info.time}
            </Text>
            <Text style={style.date}>
                {this.props.info.date}
            </Text>
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