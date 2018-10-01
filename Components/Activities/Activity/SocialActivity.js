import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import ComponentHeader from "../ComponentHeader";
import globalStyle from "../../../styles";

class Social extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../../Resources/Icons/pacchu.png')}/>
            <Text style={styles.text}>{this.props.name} spent {this.props.time} with {this.props.cat}</Text>
            <Text > from 8h29 to 11h50</Text>
        </View>
        )
    }
}

export default class SocialActivity extends React.Component {
    render() {
        return (
            <View style={globalStyle.dashboardBorder}>
                <ComponentHeader title={"Social Activities"}/>
                <Social name={"Hector"} time={"12 minutes"} cat={"Paachu"}/>
                <Social name={"Taco"} time={"1 hour"} cat={"Yuna"}/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    text: {
        color: globalStyle.fontColor,
        marginLeft: 8
    },
    icon: {
        width: 30,
        height: 30
    },
    timeText: {
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginLeft: 20,
        flexWrap: 'wrap',
    }
})