import React from 'react'
import {ImageBackground, Text, StyleSheet, Dimensions, View} from 'react-native'
import globalStyle from '../../styles'
import { LinearGradient } from 'expo';


export default class ProfilePicture extends React.Component {

    showCatName(name = "Hector") {

        if (name.endsWith("s"))
            return <Text style={style.imageText}>{name}' Day</Text>
        return <Text style={style.imageText}>{name}'s Day</Text>

    }

    render() {

        const win = Dimensions.get('window')

        return (
            <View style={[style.container, globalStyle.dashboardBorder]}>
                <ImageBackground source={require('../..//Resources/Images/HectorPP.png')} style={style.image}>
                    <LinearGradient
                        colors={[ 'rgba(0,0,0,0)', globalStyle.backgroundColor]}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: 80,
                        }}
                    />
                    {this.showCatName()}
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
        position : 'absolute',
        bottom: 0

    },
    contentContainer: {
        flex : 1,
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingVertical: 20,
        overflow:'visible',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
})