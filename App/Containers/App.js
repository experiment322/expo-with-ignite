import '../Config'
import DebugConfig from '../Config/DebugConfig'
import { Font } from 'expo'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

// create our store
const store = createStore()

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount () {
    Font.loadAsync({
      'Avenir-Book': require('../../assets/fonts/Lato-Regular.ttf'),
      'Avenir-Black': require('../../assets/fonts/Lato-Black.ttf'),
      'HelveticaNeue-Italic': require('../../assets/fonts/LiberationSans-Italic.ttf')
    }).then(() => {
      this.setState({loading: false})
    })
  }
  render () {
    const { loading } = this.state
    if (loading) return null
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
