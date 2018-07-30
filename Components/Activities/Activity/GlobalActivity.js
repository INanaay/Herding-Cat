import React from 'react'
import {StyleSheet, View} from 'react-native'
import ComponentHeader from "../ComponentHeader";
import globalStyle from '../../../styles'

export default class GlobalActivity extends React.Component {
    render() {
        return (
            <View style={globalStyle.dashboardBorder}>
                <ComponentHeader title={"Global Activity"}
                                 detailedActivity={this.props.detailedActivity}
                                 navigation={this.props.navigation}
                />
            <View style={styles.container}>
                <View style={styles.graphContainer}>
                </View>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    graphContainer: {
        height: 200,
        width: '90%',
        backgroundColor: '#949494',
        borderRadius: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    }
})