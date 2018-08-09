import React from 'react'
import {TouchableWithoutFeedback, StyleSheet, Animated, View, Text, TouchableOpacity} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import {createStackNavigator} from 'react-navigation'
import globalStyle from  '../../../styles'
import Tips from './Tips'
import MapActivity from "../../Activities/Map/MapActivity";
import tempView from "../../tempView";
import SleepActivity from "../../Activities/Sleep/SleepActivity";
import ActivityActivity from "../../Activities/Activity/ActivityActivity";
import MeetingsActivity from "../../Activities/Meetings/MeetingsActivity";

/*

const menuSymbols = {
    menuOption: {
        social : require('./profile/profile.png'),
        challenges,
        tips,
        dashboard,
    }
}
*/

export default class RoundMenu extends React.Component {


    constructor(props) {
        super(props)
        this.springValue = new Animated.Value(1)
        this.state = {
            width: 50,
            height: 50,
            isOpen: false
        }
    }

    spring () {
        if (!this.state.isOpen) {
            this.springValue.setValue(1)
            Animated.spring(
                this.springValue,
                {
                    toValue: 4,
                    friction: 5
                }
            ).start()
            this.setState({
                width: 100,
                height: 100,
                isOpen: true
            })
        }
    }


    navigateTo(detailedActivity) {
        console.log(`Actity name  = ${detailedActivity}`)
        this.props.navigation.navigate(detailedActivity,
            {
                navigation: this.props.navigation,
            });
    }

    displayClosed() {
        return (
            <TouchableWithoutFeedback
                style={[styles.button, {width: this.state.width, height: this.state.height}]}
                onPress={this.spring.bind(this)}
            >
                <Icon name={"bars"}  size={20} color="#FFF" />
            </TouchableWithoutFeedback>
        )
    }


    displayMenuOption(title)
    {
        return (
            <TouchableOpacity
                onPress={() => this.navigateTo(title)}>
                <Text style={styles.menuOptionText}>{title}</Text>
            </TouchableOpacity>
        )
    }

    closeMenu()
    {
        console.log("Closing menu")

        this.springValue.setValue(1)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 5
            }
        ).start()
        this.setState({
            width: 50,
            height: 50,
            isOpen: false
        })

    }

    displayOpen()
    {
        return (
            <View style={{backgroundColor: '#ffb471'}}>
                {this.displayMenuOption("Social")}
                {this.displayMenuOption("Challenges")}
                {this.displayMenuOption("Tips")}
                <TouchableOpacity
                    onPress={() => this.closeMenu()}>
                    <Text style={styles.menuOptionText}>quit</Text>
                </TouchableOpacity>


            </View>

        )
    }

    displayMenuContent()
    {
        if (!this.state.isOpen)
            return this.displayClosed()
        return this.displayOpen()
    }

    render() {
        return (
            <Animated.View
                style={[styles.container, {width: this.state.width, height: this.state.height, transform: [{scale: this.springValue}]}]}>
                {this.displayMenuContent()}
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: globalStyle.secondaryColor,
        borderRadius:100,
    },
    button : {
        alignItems:'center',
        justifyContent:'center',
    },
    menuOptionText : {
        fontSize: 5,
        color: '#FFF'
    }
})
