import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import globalStyle from '../../styles'

class InfoCell extends React.Component {

    render() {
        let isBorder = this.props.border === true ? {borderRightWidth: 0.5} : {borderRightWidth: 0}

        return (
            <View style={[style.cellContainer, isBorder]}>
                <Text style={style.valueText}>{this.props.value}</Text>
                <Text style={style.informatonText}>{this.props.info}</Text>
            </View>
        )
    }
}

export default class BasicInfo extends React.Component {

    render() {
        return (
            <View style={[globalStyle.dashboardBorder, {flex: 1, flexDirection: 'column'}]}>
                <View style={[style.rowContainer, globalStyle.dashboardBorder]}>
                    <InfoCell value={4.37} info={"KM TRAVELED"} border={true}/>
                    <InfoCell value={3} info={"MATES MET"}/>
                </View>
                <View style={style.rowContainer}>
                    <InfoCell value={"12h45"} info={"SLEPT"} border={true}/>
                    <InfoCell value={8.92} info={"KM/H SPEED"}/>
                </View>
            </View>
        )
    }

}

const style = StyleSheet.create({
    cellContainer: {
        width: '50%',
        height: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: '#FFF',
        justifyContent: 'flex-end'
    },
    rowContainer: {
        flex:1,
        flexDirection: 'row',
    },
    valueText: {
        fontSize: 30,
        color: '#FFF',
    },
    informatonText: {
        fontSize: 15,
        color: '#FFF',
        marginBottom: 10,

    }
})

