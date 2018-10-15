import React from 'react'
import {TouchableWithoutFeedback, StyleSheet, Animated, View, Text, TouchableOpacity, Image} from 'react-native'
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
            isOpen: false
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
                width: 150,
                height: 150,
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

                <FontAwesome name={"bars"} size={20} color="#FFF"/>

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
            isOpen: false
        })

    }

    displayIcon(iconType)
    {
        if (iconType) {
            return (
                <Image source={MenuIcons.icons.social} style={{height: 10, width: 10, marginLeft: 10 }}/>
            )
        }
    }

    displayOpen()
    {
        return (
            <View style={{flex: 1, margin: 6, paddingRight: 5, paddingTop: 5, alignItems: 'flex-end', justifyContent: 'space-between'}}>
                {this.displayMenuOption("Social")}
                {this.displayMenuOption("Challenges")}
                {this.displayMenuOption("Tips")}
                <TouchableOpacity
                    onPress={() => this.closeMenu()}>
                    <Ionicons style={{margin: 6, marginBottom: '40%'}} name={"clear"}  size={10} color="#FFF" />
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
                style={[styles.button, {width: this.state.width, height: this.state.height}]}
                onPress={this.spring.bind(this)}
            >
            <Animated.View
                style={[styles.container, {width: this.state.width, height: this.state.height, transform: [{scale: this.springValue}]}]}>
                {this.displayMenuContent()}
            </Animated.View>
            </TouchableWithoutFeedback>
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
        textAlign: 'right',
        fontSize: 10,
        color: '#FFF'
    }
})
