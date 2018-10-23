import React from 'react'
import {StyleSheet, View, Text, Dimensions, Image, TouchableOpacity} from 'react-native'
import globalStyle from '../../../styles'
import SlidingPanel from 'react-native-sliding-up-down-panels';
import SvgUri from 'react-native-svg-uri';


const { width, height } = Dimensions.get('window');


export default class PawMenu extends React.Component
{
    constructor(props) {
        super(props)
        this.state = {
            rolled: false
        }
    }

    navigateTo(view) {
        console.log("Clicked")
        this.props.navigation.navigate(view,
            {
                navigation: this.props.navigation,
            });
    }

    render()
    {
        return(
            <SlidingPanel
                headerLayoutHeight = {50}
                panelPosition={"top"}
                AnimationSpeed={500}
                onDragStart={this.test}
                headerLayout ={() =>
                    !this.state.rolled &&
                    <View style={styles.headerLayoutStyle}>
                        <Image style={{width: 50, height: 50}} source={require("../../../Resources/Icons/patte_ombre.png")}/>
                    </View>
                }
                slidingPanelLayout = { () =>
                    <View style={styles.slidingPanelLayoutStyle}>
                        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 150}}>
                            <Image style={{flex: 0, width: 20, height: 20}} source={require("../../../Resources/Icons/battery.png")} resizeMode={"contain"}/>
                            <Image style={styles.imageStyle} source={require("../../../Resources/Icons/avatar_01.png")}/>
                            <View style={{flex:1, flexDirection: 'row'}}>
                                <Text style={styles.editTextStyle}>Edit Profile</Text>
                                <Image style={{width: 10, height: 10, marginTop: 15, marginLeft: 5}} source={require("../../../Resources/Icons/modify.png")}/>

                            </View>
                        </View>


                        <TouchableOpacity style={{flex: 1}} onPress={() => this.navigateTo("Journal")}>
                        <View style={styles.cellStyle}>
                            <Image source={require("../../../Resources/Icons/journal.png")} style={styles.cellIconStyle} />
                            <Text style={styles.cellTextStyle}>SEE DAILY JOURNAL</Text>
                        </View>
                        </TouchableOpacity>

                        <View style={styles.cellStyle}>
                            <Image source={require("../../../Resources/Icons/alerts.png")} style={styles.cellIconStyle} />
                            <Text style={styles.cellTextStyle}>ADD ALERT</Text>
                        </View>

                        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', borderTopWidth: 0.2, borderColor: globalStyle.borderColor}}>
                            <Image resizeMode={"contain"} style={styles.backButtonStyle} source={require('../../../Resources/Icons/patte_verte.png')} />
                        </View>
                    </View>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cellIconStyle :{
        marginLeft: 20,
        height: 50,
        width: 50
    },
    backButtonStyle:{
        flex: 0,
        transform: [{ rotate: '90deg'}],
        width: 40, height: 40
    },
    cellTextStyle: {
        fontSize: 15,
        padding: 20,
    },

    cellStyle:{
        flex: 1,
        borderTopWidth: 0.2,
        borderColor: globalStyle.borderColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    editTextStyle: {
        marginTop: 10,
        textDecorationLine: 'underline'
    },
    nameTextStyle:{
        fontSize: 30
    },
    imageStyle:{
        height: 80,
        width: 80
    },
    bodyViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLayoutStyle: {
        width,
        backgroundColor: globalStyle.transparent,
        alignItems: 'center',
    },
    slidingPanelLayoutStyle: {
        width,
        height,
        marginTop: 100,
        backgroundColor: '#f4eff8',
    },
    commonTextStyle: {
        color: 'white',
        fontSize: 18,
    },
});
