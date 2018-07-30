import {Dimensions} from "react-native";


/* ------- COLORS ------- */

const backgroundColor = '#434343';
const fontColor = '#FFF'
const transparent = 'rgba(52, 52, 52, 0.0)'
const secondaryColor = '#159552'
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
    navigationOptions: navigationOptions,
    screenWidth: screenWidth,
    chartConfig: chartConfig,
    backgroundColor: backgroundColor,
    fontColor: fontColor,
    transparent: transparent,
    secondaryColor: secondaryColor,

    dashboardBorder: {
        borderBottomWidth: 0.4,
        borderColor: '#FFF'
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

