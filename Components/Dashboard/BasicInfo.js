import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import globalStyle from '../../styles'

class InfoCell extends React.Component {

    navigateTo() {
        console.log("Yo")
        this.props.navigation.navigate(this.props.detailedActivity,
            {
                navigation: this.props.navigation,
            });
    }



    render() {
        let isBorder = this.props.border === true ? {borderRightWidth: globalStyle.borderWidth} : {borderRightWidth: 0}

        return (
            <View style={[style.cellContainer, isBorder]}>
            <TouchableOpacity
                onPress={() => this.navigateTo(this.props.detailedActivity)}
                >
                <View style={style.touchableContainer}>
                <Text style={style.valueText}>{this.props.value}</Text>
                <Text style={style.informatonText}>{this.props.info}</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }
}



export default class BasicInfo extends React.Component {

    render() {

        function calculateDistance(isInfoLoaded, distance)
        {
            console.log(isInfoLoaded)
            if (!isInfoLoaded)
                return 0;

            const oneMeter = 0.6
            let distanceInKilometers = distance * oneMeter * 0.001
            let finalDistance =  Math.round(distanceInKilometers * 100) / 100
            return (finalDistance)
        }

        // FAIRE UN TRUC BIEN AVEC LES STATES, CECI EST TEMPORAIRE
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={[style.rowContainer, globalStyle.dashboardBorder]}>
                    <InfoCell value={calculateDistance(this.props.loaded, this.props.distance)} info={"KM TRAVELED"} border={true} detailedActivity={"MapActivity"} navigation={this.props.navigation}/>
                    <InfoCell value={3} info={"MATES MET"} detailedActivity={"MeetingsActivity"} navigation={this.props.navigation}/>
                </View>
                <View style={style.rowContainer}>
                    <InfoCell value={"12h45"} info={"SLEPT"} border={true} detailedActivity={"SleepActivity"} navigation={this.props.navigation}/>
                    <InfoCell value={8.92} info={"KM/H SPEED"} detailedActivity={"MapActivity"} navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }

}

const style = StyleSheet.create({
    touchableContainer: {
        width: '100%',
        height: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    cellContainer: {
        height: 100,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: globalStyle.borderColor,
        justifyContent: 'flex-end',
        width: '50%',
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

