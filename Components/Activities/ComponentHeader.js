import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import globalStyle from "../../styles";
import Icon from '@expo/vector-icons/Entypo'


export default class ComponentHeader extends React.PureComponent {

    navigateTo() {
        console.log("Yo")
        console.log(this.props.detailedActivity)
        this.props.navigation.navigate(this.props.detailedActivity,
            {
                navigation: this.props.navigation,
            });
    }

    render() {


        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.rightText}>View history</Text>
                    <Icon.Button name="chevron-thin-right"
                             backgroundColor={globalStyle.transparent}
                             color={globalStyle.secondaryColor}
                             onPress={() => this.navigateTo()}>
                    </Icon.Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rightText:{
        color:globalStyle.secondaryColor
    },
    text : {
        marginLeft: 10,
        fontSize: 18,
        color: globalStyle.fontColor,
        fontWeight: 'bold'
    },
    container: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})