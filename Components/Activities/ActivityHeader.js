import React from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import globalStyle from "../../styles";
import { NavigationActions } from 'react-navigation'

export default class ActivityHeader extends React.Component {

    render(){
        return (
            <View>

            <View style={globalStyle.activityHeaderBorder}>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }}>
                <View style={{height: 20}}>
                        <Icon.Button
                        name="arrow-left"
                        backgroundColor={globalStyle.transparent}
                        color={globalStyle.fontColor}
                        onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
                    </Icon.Button>
                </View>
                <View style={{ flex: 1}}>
                    <Text style={styles.title}> Global {this.props.title}</Text>

                </View>
                <View style={{width: '10%'}}/>
                <View style={styles.imageContainer}>

                </View>
            </View>
            </View>
                <Image
                    style={styles.image}
                    source={require('../..//Resources/Images/HectorPP.png')}/>
            </View>
        )
    }
}

const styles =  StyleSheet.create ({
    title: {
        fontSize: 22,
        color: globalStyle.fontColor,
        textAlign: 'center',
        alignSelf: 'center'
    },
    imageContainer: {
        position: 'absolute',
        top: 60,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        position: 'absolute',
        alignSelf: 'center',
        top: '30%'
}
})