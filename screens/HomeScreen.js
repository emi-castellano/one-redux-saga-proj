import React from 'react';
import { StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';
import { REQUEST_FORECAST_DATA } from '../actions/types'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.onFetchForecast()
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchForecast: async () => dispatch({ type: REQUEST_FORECAST_DATA }),
  }
}

const mapStateToProps = ({ dataForecast }) => {
  return { dataForecast }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
