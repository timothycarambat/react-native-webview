import React, {Component} from 'react'
import { ToastAndroid, WebView, BackHandler } from 'react-native'



export default class WebViewer extends Component {
  webView = {
    canGoBack: false,
    ref: null,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      BackHandler.addEventListener('hardwareBackPress', this.backHandler);
  }

  componentWillUnmount(){
      BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
  }

  backHandler = () => {
    if(this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack()
      return true
    }
    return false
  }

  _onload() {
    ToastAndroid.showWithGravityAndOffset(
      'Welcome Back',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  }

  _onNavigationStateChange(view) {
    this.webView.canGoBack = view.canGoBack;
    console.log(view.url)
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.url}}
        style={this.props.style}
        ref={(webView) => { this.webView.ref = webView; }}
        scalesPageToFit
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState={true}
        mixedContentMode="always"
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
        onLoad={this._onload()}
      />

    )
  }
}
