import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import {NavigationActions} from "react-navigation";

export default class Challenges extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}