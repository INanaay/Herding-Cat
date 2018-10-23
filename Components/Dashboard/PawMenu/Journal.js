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
                <ImageBackground style={{ flexGrow: 1,
                    alignSelf: 'stretch',
                    width: null,
                    height: null,
                }}
                                 source={require("../../../Resources/Images/Daily_JournalHD.jpg")}>
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                        <Text style={{margin: 10, color: '#FFF'}}>BACK</Text>
                    </TouchableOpacity>
                </ImageBackground>
        )
    }

}
