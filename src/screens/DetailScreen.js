import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Video from 'react-native-video';

class detailShowScreen extends React.Component {
    constructor(props) {
        super(props)
    this.url = props.navigation.getParam('url')

    }
    onBuffer=()=>{
        console.log("Buffer")
    } 
    videoError=()=>{
        console.log("Buffersdf")
        
    }
    render() {
        return (
            <View>
                <Text>
                    Detail screeen-{this.url}
                </Text>
                <Video source={{ 'uri': this.url }}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}
                    onError={this.videoError}
                    style={styles.backgroundVideo} />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        // top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})
export default detailShowScreen;