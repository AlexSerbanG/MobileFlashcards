import mockDecks from './mockData';
import { AsyncStorage } from 'react-native';

const StorageKeys = {
  Decks: 'Decks',
}

export const getDecks = () => AsyncStorage.getItem(StorageKeys.Decks)
  .then(result => {
    if (!result) {
      return mockDecks;
    }
    return JSON.parse(result);
  });

export const getDeck = (id) => null;
export const saveDeckTitle = (title) => null;
export const addCardToDeck = ({ title, card }) => null;
