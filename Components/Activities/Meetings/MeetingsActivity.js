import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import ActivityHeader from '../ActivityHeader'

export default class MeetingsActivity extends React.Component {

    render()
    {
        return (
            <View>
                <ActivityHeader title={"meetings"} navigation={this.props.navigation}/>
                <View>
                <Image
                    style={styles.image}
                    source={require('/home/NANAA/Missions/Herding/Resources/Images/Activities/meetings.png')}/>
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
