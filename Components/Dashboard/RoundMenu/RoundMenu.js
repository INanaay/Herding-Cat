import React from 'react'
import {TouchableWithoutFeedback, StyleSheet, Animated, View, Text, TouchableOpacity, Image, Dimensions} from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Ionicons from '@expo/vector-icons/MaterialIcons'
import {createStackNavigator} from 'react-navigation'
import globalStyle from  '../../../styles'
import Tips from './Tips'
import MenuIcons from './IconsSource'

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
        super(props);
        this.springValue = new Animated.Value(1)
        this.state = {
            width: 50,
            height: 50,
            isOpen: false,
            buttonPositionRight: 0,
            buttonPositionBottom: 0,
            radius:  50 / 2
        }
    }

    spring() {
        if (!this.state.isOpen) {
            this.springValue.setValue(1)
            Animated.spring(
                this.springValue,
                {
                    toValue: 2,
                    friction: 5
                }
            ).start()
            this.setState({
                width: 250,
                height: 250,
                isOpen: true,
                buttonPositionRight: - 100,
                buttonPositionBottom: -20,
                radius: 250 / 2
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


            <Image source={require("../../../Resources/Icons/menu_burger.png")} style={{height: 10, width: 20}}/>

        )
    }


    displayMenuOption(title) {
        return (
            <TouchableOpacity
                onPress={() => this.navigateTo(title)}
                style={{
                    flexDirection: 'row', padding: 8, justifyContent: 'space-between', alignItems: 'center'
                }}>
                <Text style={styles.menuOptionText}>{title}</Text>
                {this.displayIcon(title)}
            </TouchableOpacity>
        )
    }

    closeMenu() {
        console.log("Closing menu")

        //this.springValue.setValue(1)
        Animated.spring(
            this.springValue,
            {
                toValue: 1,
                friction: 100
            }
        ).start()
        this.setState({
            width: 50,
            height: 50,
            isOpen: false,
            buttonPositionRight: 0,
            buttonPositionBottom: 0,
            radius:  50 / 2
        })

    }

    displayIcon(iconType)
    {

        let source;

        console.log("Icont type = " + iconType)

        switch (iconType) {
            case "Social" :
                source = MenuIcons.icons.social;
                break;
            case "Challenges":
                source = MenuIcons.icons.challenges;
                break;
            case "Tips" :
                source = MenuIcons.icons.tips
                break;
            case "Dashboard" :
                source = MenuIcons.icons.dashboard
                break;
            default :
                break;

        }

        if (iconType) {
            return (

                <Image source={source} style={{height: 20, width: 20, marginLeft: 5, resizeMode: 'contain' }}/>
            )
        }
    }

    displayOpen()
    {
        return (
            <View style={{flex: 1, margin: 6, marginRight: 55, paddingLeft: 0, paddingTop: 9, alignItems: 'flex-end', justifyContent: 'space-between'}}>
                {this.displayMenuOption("Social")}
                {this.displayMenuOption("Challenges")}
                {this.displayMenuOption("Tips")}
                {this.displayMenuOption("Dashboard")}
                <TouchableOpacity
                    onPress={() => this.closeMenu()}>
                    <Ionicons style={{margin: 6, marginRight: 10, marginBottom: 200, paddingBottom: 20}} name={"clear"}  size={15} color="#FFF" />
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
            <TouchableWithoutFeedback
                style={[styles.button, {}]}
                onPress={this.spring.bind(this)}
            >
            <Animated.View
                style={[styles.container, {borderRadius: this.state.radius, bottom : this.state.buttonPositionBottom, right: this.state.buttonPositionRight ,width: this.state.width, height: this.state.height, transform: [{scale: this.springValue}]}]}>
                {this.displayMenuContent()}
            </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: globalStyle.secondaryColor,
    },
    button : {
        alignItems:'center',
        justifyContent:'center',
    },
    menuOptionText : {
        textAlign: 'right',
        fontSize: 10,
        color: '#FFF'
    }
})
