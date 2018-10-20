import React from 'react'
import {View, ImageBackground, TouchableOpacity, Text} from 'react-native'
import {NavigationActions} from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

export default class Journal extends React.Component
{
    goBack() {
        console.log("Clicked")
        this.props.navigation.navigate(view,
            {
                navigation: this.props.navigation,
            });
    }

    render()
    {
        return (
                <ImageBackground style={{width: '100%', height: '100%'}} source={require("../../../Resources/Images/Daily_Journal.png")}>
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                        <Text style={{margin: 10, color: '#FFF'}}>BACK</Text>
                    </TouchableOpacity>
                </ImageBackground>
        )
    }

}
