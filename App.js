import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./components/Home";
import Deck from "./components/Deck";
import NewQuestion from "./components/NewQuestion";
import {
  getDecks,
  saveDeckTitle,
  removeDeck,
  addCardToDeck,
} from "./utils/api";
import Quiz from "./components/Quiz";
import { setLocalNotification } from "./utils/helpers";

const Stack = createStackNavigator();

class App extends React.Component {
  state = {
    decks: {},
  };

  componentDidMount() {
    setLocalNotification();
    getDecks().then((results) => {
      this.setState({
        decks: results,
      });
    });
  }

  addQuestion = (deckId, question) => {
    addCardToDeck({
      title: deckId,
      card: question,
    }).then(() => {
      this.setState((prevState) => ({
        decks: {
          ...prevState.decks,
          [deckId]: {
            ...prevState.decks[deckId],
            questions: [...prevState.decks[deckId].questions, question],
          },
        },
      }));
    });
  };

  deleteDeck = (deckId) => {
    removeDeck(deckId).then(() => {
      this.setState(({ decks: { [deckId]: toRemove, ...rest } }) => ({
        decks: rest,
      }));
    });
  };

  addDeck = (deckId) => {
    saveDeckTitle(deckId).then(() =>
      this.setState((prevState) => ({
        decks: {
          ...prevState.decks,
          [deckId]: {
            title: deckId,
            questions: [],
          },
        },
      }))
    );
  };

  render() {
    const { decks } = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home">
            {() => <Home decks={decks} addDeck={this.addDeck} />}
          </Stack.Screen>
          <Stack.Screen name="Deck">
            {({ route: { params }, navigation }) => (
              <Deck
                navigate={navigation.navigate}
                deleteDeck={() => {
                  this.deleteDeck(params.deckId);
                  navigation.navigate("Home");
                }}
                {...decks[params.deckId]}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="New Question">
            {({ route: { params }, navigation }) => (
              <NewQuestion
                navigate={navigation.navigate}
                deckId={params.deckId}
                handleSubmit={(question) =>
                  this.addQuestion(params.deckId, question)
                }
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="Quiz">
            {({
              route: {
                params: { deckId },
              },
              navigation,
            }) => (
              <Quiz
                questions={decks[deckId].questions}
                goBack={() => navigation.navigate("Deck", { deckId })}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
