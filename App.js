import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import Deck from './components/Deck';
import NewQuestion from './components/NewQuestion';
import { getDecks } from './utils/api';

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    isReady: false,
    decks: {}
  };

  componentDidMount() {
    getDecks().then(results => {
      this.setState({
        decks: results,
        isReady: true,
      });
    })
  }

  render() {
    const { decks, isReady } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {() => <Home decks={decks} />}
          </Stack.Screen>
          <Stack.Screen name="Deck">
            {({ route: { params }, navigation }) => <Deck navigate={navigation.navigate} {...decks[params.deckId]} />}
          </Stack.Screen>
          <Stack.Screen name="New Question">
            {({ route: { params } }) => <NewQuestion {...decks[params.deckId]} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
