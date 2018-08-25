import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import DashboardComponentHeader from "./DashboardComponentHeader";
import globalStyle from '../../styles'


class Friend extends React.Component {
    render() {
        return (
            <View style={style.friendLine}>
                <Text style={style.friendText}>{this.props.name}</Text>
                <Text style={style.friendText}>{this.props.time}</Text>
            </View>
        )
    }
}

export default class BasicActivity extends React.Component {
    constructor(props) {
        super(props)
        this.state ={

        }
    }

    navigateToDetailedActivity() {
        this.props.navigation.navigate(this.props.detailedActivity);
    }

    render() {
        return (
            <View style={globalStyle.dashboardBorder}>
                <DashboardComponentHeader name={this.props.name} text={this.props.header} navigation={this.props.navigation} detailedActivity={this.props.detailedActivity}/>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity style={style.friendButton}
                                      onPress={() => this.navigateToDetailedActivity()}>
                    <Text style={style.buttonText}>{this.props.name} made a new friend !</Text>
                </TouchableOpacity>
                </View>
                <View style={{marginVertical: 10}}>
                    <Friend name={"Test"} time={"4h30"}/>
                    <Friend name={"GrosPD"} time={"16h69"} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({

    friendLine: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    friendButton: {
        width: '80%',
        height: 30  ,
        borderRadius: 5,
        backgroundColor:  '#585858',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign:'center',
        color: globalStyle.fontColor,
        fontWeight: 'bold'

    },
    friendText: {
        fontSize: 15,
        color: globalStyle.fontColor,
    }
})