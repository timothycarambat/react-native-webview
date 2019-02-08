import React from 'react';
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import WebViewer from './components/WebViewer'

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  video: {
    marginTop: 0,
    maxHeight: height,
    width: width,
    flex: 1
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleUpdate = (field, value) => {
    this.setState({[field]: value})
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <WebViewer
          url={'https://reddit.com'}
          height={height}
          width={width}
          style={styles.video}
          sendToParent={this.handleUpdate}
        />
      </View>
    );
  }
}
