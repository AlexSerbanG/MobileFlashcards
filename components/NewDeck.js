import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NewDeck</Text>
      </View>
    )
  }
}

export default NewDeck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
