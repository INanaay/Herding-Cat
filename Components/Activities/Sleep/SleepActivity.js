import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import Header from '../Header'

export default class SleepActivity extends React.Component {

    render()
    {
        return (
            <View>
                <Header title={"sleep"} navigation={this.props.navigation}/>
                <View>
                    <Image
                        style={styles.image}
                        source={require('/home/NANAA/Missions/Herding/Resources/Images/Activities/sleep.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
    }
});
