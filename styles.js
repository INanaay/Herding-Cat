import {Dimensions} from "react-native";


/* ------- COLORS ------- */

const borderColor = '#4A4A4A'
const backgroundColor = '#2C2C2C';
const fontColor = '#FFF'
const transparent = 'rgba(52, 52, 52, 0.0)'
const secondaryColor = '#35C5A5'
const graphBackgroundColor = '#717171'

/* ----- STUFF ----- */

const chartConfig = {
    backgroundColor: '#57b1e2',
    backgroundGradientFrom: backgroundColor,
    backgroundGradientTo: backgroundColor,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
}
const screenWidth = Dimensions.get('window').width



const navigationOptions = {
    header: null
}


/* ----- STYLES ----- */


export default {
    borderColor: borderColor,
    navigationOptions: navigationOptions,
    screenWidth: screenWidth,
    chartConfig: chartConfig,
    backgroundColor: backgroundColor,
    fontColor: fontColor,
    transparent: transparent,
    secondaryColor: secondaryColor,
    borderWidth: 1,

    dashboardBorder: {
        borderBottomWidth: 0.4,
        borderColor: borderColor
    },
    graphContainer: {
        height:200,
        flexDirection:'row',
        width:'90%',
        padding:15,
        backgroundColor: graphBackgroundColor,
        marginBottom: 20,
        borderRadius: 10
    },
    activityHeaderBorder: {
        height: 150,
        backgroundColor: backgroundColor,
        borderBottomWidth: 1,
        borderColor: secondaryColor,
    }
}

