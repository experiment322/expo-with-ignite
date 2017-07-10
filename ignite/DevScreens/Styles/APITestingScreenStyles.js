import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin
  }
})
