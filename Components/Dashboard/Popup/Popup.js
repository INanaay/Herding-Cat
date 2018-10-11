import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'
import globalStyle from "../../../styles";
import { LinearGradient } from 'expo';


export default class Popup extends React.Component {

    test() {
        console.log("Yo")

    }

    render() {
        return (
            // dark veil on background when popup is shown

            <View style={styles.veil}>

                {/* background button */}


                <TouchableWithoutFeedback
                    onPress={() => this.test()} >
                <View style={{flex: 1, backgroundColor: 'rgba(0,0, 0,0)'}} />
                </TouchableWithoutFeedback>

                {/* Popup */}
                <View style={styles.container}>

                    {/* Header */}


                    <View style={{height: 60, backgroundColor: 'rgba(0,0,0,0)', borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow:'hidden'}}>
                        <LinearGradient
                            colors={[globalStyle.secondaryColor, '#fff']}
                            style={{
                                height: 60,
                                borderTopLeftRadius: 20,
                                overflow: 'hidden',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                bottom: 0,

                            }}
                        />
                        <View style={{flex: 1, paddingBottom:20, flexDirection: 'row', justifyContent: 'space-between', overflow: 'hidden',
                        }}>
                            <View style={{ flex: 1, paddingLeft: 4 , justifyContent: 'center'}}>
                                <Icon.Button name="arrow-left"
                                             backgroundColor={globalStyle.transparent}
                                             underlayColor={globalStyle.transparent}
                                             color={globalStyle.fontColor}
                                             onPress={() => this.test()}
                                >
                                </Icon.Button>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center'}}>
                                <Text style={{ textAlign:'center', color: globalStyle.fontColor}}>BE CAREFUL !</Text>
                            </View>
                            <View
                                style={{ flex: 1 }}>
                            </View>
                        </View>
                    </View>

                    {/* Body */}

                    {/* Inage */}
                    <View style={[styles.centerContainer, {position: 'absolute', top: '10%', left: 0, right: 0}]}>
                        <Image source={require("../../../Resources/Images/HectorPP.png")}
                               style={styles.image}
                        />
                    </View>

                    {/* Text */}
                    <View style={styles.centerContainer}>
                        <Text style={{paddingTop: 70, color: '#838383'}}>BEHAVIOR ALERT</Text>
                        <Text style={{fontWeight: 'bold', color: '#ff6f74', textAlign: 'center', paddingHorizontal: 40, marginTop: 10}}>Be careful, Hector has abnormal activity there:</Text>
                    </View>

                    {/* Map */}

                    <View style={[styles.centerContainer, {flex:1}]}>
                        <Image style={styles.map} source={require("../../../Resources/Images/popupMap.png")}/>
                    </View>
                </View>

                <View style={{position:'absolute', left: 0, top: '85%', bottom: 0, right: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity>
                        <View style={{backgroundColor: globalStyle.borderColor, width: 50, height:50, borderRadius: 25, alignItems: 'center', justifyContent: 'center'}}>
                            <Icon name="times"
                                  backgroundColor={globalStyle.transparent}
                                  size={30}
                                  color={globalStyle.fontColor}
                            >

                            </Icon>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        )
    }


}

const styles = StyleSheet.create({

    veil:{
        position: 'absolute',
        top: 0,
        backgroundColor:'rgba(52 ,52 ,52 ,0.5)',
        width: '100%',
        height: '100%',

    },
    container: {
        position: 'absolute',
        top: 0,
        width: '90%',
        height: '80%',
        marginLeft: '5%',
        marginRight: '5%' ,
        marginTop: '5%',
        backgroundColor: '#f9f9f9',
        borderRadius: 20,
    },

    centerContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        height: 100,
        width: 100,
        borderRadius: 100 / 2
    },

    map: {
        flex:1,
        borderRadius: 10,
        resizeMode: 'contain',
        margin: 10,
        marginTop: 0,
    }
})