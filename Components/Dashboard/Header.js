import React from 'react'
import {Text, StyleSheet, View, Button} from 'react-native'
import globalStyle from '../../styles'
import tempView from '../tempView'
import Icon from '@expo/vector-icons/Entypo'

export default class Header extends React.Component {

    navigateTo() {
        console.log("Yo")
        this.props.navigation.navigate(this.props.detailedActivity,
            {
                navigation: this.props.navigation,
            });
    }

    render() {


        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name.toUpperCase()} 'S {this.props.text.toUpperCase()}</Text>
                <Icon.Button name="chevron-thin-right"
                             backgroundColor={globalStyle.transparent}
                             color={globalStyle.secondaryColor}
                             onPress={() => this.navigateTo()}>
                </Icon.Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text : {
        marginLeft: '10%',
        fontSize: 18,
        color: globalStyle.fontColor,
        fontWeight: 'bold'
    },
    container: {
        height: 45,
        marginTop: 15,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        marginRight: 8,
    }
})