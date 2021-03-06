import React from 'react'
import {ImageBackground, Text, StyleSheet, View, TouchableOpacity, Image, TouchableHighlight} from 'react-native'
import globalStyle from '../../styles'
import { LinearGradient } from 'expo';


export default class ProfilePicture extends React.Component {

    showCatName(name = "Hector") {

        if (name.endsWith("s"))
            return (
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={style.imageText}>{name}' Day</Text>
                </TouchableOpacity>
            )
        return <Text style={style.imageText}>{name}'s Day</Text>

    }

    render() {
        return (
            <View style={style.container}>
                <ImageBackground source={require('../..//Resources/Images/HectorPP.png')} style={style.image}>
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', globalStyle.backgroundColor]}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 80,
                        }}
                    />
                    <View style={style.contentContainer}>
                        <TouchableOpacity onPress={this.props.showPopup}>
                            <Text style={style.imageText}>Hector's Day</Text>
                        </TouchableOpacity>
                    <TouchableOpacity onPress={this.props.onPress}>
                        <Image source={require('../../Resources/Icons/geolocalisation.png')} style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>

            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: '#FFF'
    },
    image: {
        height: 170,
        width: '100%',
        flex:1,
        alignItems: 'center',

    },
    imageText: {
        marginBottom: 10,
        fontSize: 22,
        color: '#FFF',
        fontWeight: 'bold',
    },
    contentContainer: {
        width: '100%', position : 'absolute', flexDirection: 'row',
        bottom: 0,  justifyContent: 'center',
        alignItems: 'center'
    },

})