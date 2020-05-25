import mockDecks from "./mockData";
import { AsyncStorage } from "react-native";
import { StorageKeys } from "./helpers";

export const getDecks = () =>
  AsyncStorage.getItem(StorageKeys.Decks).then((result) => {
    if (!result) {
      return AsyncStorage.setItem(
        StorageKeys.Decks,
        JSON.stringify(mockDecks),
        () => mockDecks
      );
    }
    return JSON.parse(result);
  });

export const getDeck = (title) =>
  AsyncStorage.getItem(StorageKeys.Decks)
    .then(JSON.parse)
    .then((data) => data[title]);

export const saveDeckTitle = (title) =>
  AsyncStorage.mergeItem(
    StorageKeys.Decks,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );

export const addCardToDeck = ({ title, card }) =>
  AsyncStorage.mergeItem(
    StorageKeys.Decks,
    JSON.stringify({
      [title]: {
        title,
        questions: [card],
      },
    })
  );

export const removeDeck = (title) =>
  getDecks().then(({ [title]: toRemove, ...rest }) => {
    AsyncStorage.removeItem(StorageKeys.Decks).then(() =>
      AsyncStorage.setItem(StorageKeys.Decks, JSON.stringify(rest))
    );
  });
