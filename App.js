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

  addQuestion = (deckId, question) => {
    this.setState(prevState => ({
      decks: {
        ...prevState.decks,
        [deckId]: {
          ...prevState.decks[deckId],
          questions: [...prevState.decks[deckId].questions, question]
        }
      }
    }))
  }

  deleteDeck = (deckId) => {
    this.setState(({ decks: { [deckId]: toRemove, ...rest } }) => ({ decks: rest }));
  }

  addDeck = (deckId) => {
    this.setState(prevState => ({
      decks: {
        ...prevState.decks,
        [deckId]: {
          title: deckId,
          questions: []
        }
      }
    }));
  }

  render() {
    const { decks, isReady } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {() => <Home decks={decks} addDeck={this.addDeck} />}
          </Stack.Screen>
          <Stack.Screen name="Deck">
            {({ route: { params }, navigation }) =>
              <Deck
                navigate={navigation.navigate}
                deleteDeck={() => {
                  this.deleteDeck(params.deckId);
                  navigation.navigate("Home")
                }}
                {...decks[params.deckId]}
              />}
          </Stack.Screen>
          <Stack.Screen name="New Question">
            {({ route: { params }, navigation }) => <NewQuestion navigate={navigation.navigate} deckId={params.deckId} handleSubmit={(question) => this.addQuestion(params.deckId, question)} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
