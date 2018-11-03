import React from 'react'
import {ListView, View, Text, StyleSheet} from 'react-native'
import ActivityHeader from '../ActivityHeader'
import Row from './Row'
import globalStyle from '../../../styles'
import GraphTab from './GraphTab'


const dayliList = [
        {time: '6h04', date: 'Day1'},
        {time: '6h04', date: 'Day2'},
        {time: '6h04', date: 'Day3'},
        {time: '6h04', date: 'Day4'},
        {time: '6h04', date: 'Day5'},
        {time: '6h04', date: 'Day6'},
        {time: '6h04', date: 'Day7'},
        {time: '6h04', date: 'Day8'},
    ]

const weeklyList = [
    {time: '6h04', date: 'week1, 2018'},
    {time: '6h04', date: 'week2, 2018'},
    {time: '6h04', date: 'week3, 2018'},
    {time: '6h04', date: 'week4, 2018'},
    {time: '6h04', date: 'week5, 2018'},
    {time: '6h04', date: 'week5, 2018'},
    {time: '6h04', date: 'week6, 2018'},
    {time: '6h04', date: 'week7, 2018'},
    ]

const monthlyList = [
    {time: '6h04', date: 'December, 2018'},
    {time: '6h04', date: 'January, 2019'},
    {time: '6h04', date: 'February, 2019'},
    {time: '6h04', date: 'March, 2019'},
    {time: '6h04', date: 'April, 2019'},
    {time: '6h04', date: 'June, 2019'},
    {time: '6h04', date: 'July, 2019'},
    {time: '6h04', date: 'August, 2019'},
]

export default class HistoricActivity extends React.Component {


    constructor(props) {
        super(props)
        this.ref = React.createRef()
        this.state = {
            list: dayliList,
        }
        this.setListData = this.setListData.bind(this)
    };




    setListData(list) {

        switch (list) {
            case 1 :
                this.setState({
                    list: dayliList
                })
                break;
            case 2:
                this.setState({
                    list: weeklyList
                })
                break;
            case 3:
                this.setState({
                    list: monthlyList
                })
                break;
            default:
                break;
        }
    }



    render() {

       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <View style={{backgroundColor: globalStyle.backgroundColor, height: '100%'}}>
            <ActivityHeader title={"history"} navigation={this.props.navigation}/>
                <View style={{marginTop: 20}} >
                    <GraphTab ref={this.ref} callback={this.setListData}/>
                </View>
                <View>
                <View style={style.border}>
                    <Text style={style.title}>HISTORIC</Text>
                </View>
                <ListView
                    style={{height:'50%'}}
                    dataSource={ds.cloneWithRows(this.state.list)}
                    renderRow={(row, j, k) => <Row info={row} index={parseInt(k, 10)} />}
                />
                </View>
            </View>

        )

    }
}

const style = StyleSheet.create({
    border: {
        height: 60,
        borderBottomWidth: 0.6,
        borderBottomColor: globalStyle.fontColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        color: globalStyle.fontColor
    }
})