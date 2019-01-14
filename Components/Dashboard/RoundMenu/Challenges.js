import React from 'react'
import {View, ImageBackground, TouchableOpacity, Text, Image} from 'react-native'
import {NavigationActions} from "react-navigation";

export default class Journal extends React.Component {
    goBack() {
        console.log("Clicked")
        this.props.navigation.navigate(view,
            {
                navigation: this.props.navigation,
            });
    }

    render() {
        return (
            <ImageBackground style={{
                flexGrow: 1,
                alignSelf: 'stretch',
                width: null,
                height: null,
            }}
                             source={require("../../../Resources/Images/Activities/Challenges.png")}>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                    <Image source={require("../../../Resources/Icons/patte_verte.png")} style={{width: 35, height: 35, resizeMode: 'contain', margin: 20}}/>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}
