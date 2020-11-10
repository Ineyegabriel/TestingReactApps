import { storeFactory } from "../test/test.utils";
import { guessWord } from "../redux/actions/actionCreators/actionCreators";
import { createPortal } from "react-dom";

// 3 steps in testing a thunk 
// 1. Create a store with an initialState
// 2. Dispatch an action creator 
// 3. Check if state is updated correctly

describe("guessWord action dispatcher", () => {
  let secretWord = "party";
  let unsuccessfulGuess = "train";
  describe("no words guessed", () => {
    let store;
    let initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulGuess,
            letterMatchCount: 3,
          }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5,
          }
        ],
      };
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some words guessed", () => {
    const guessedWords = [
      {
        guessedWord: "agile",
        letterMatchCount: 1,
      }
    ];
    const initialState = { guessedWords, secretWord };

    let store;
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("updates state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
        ]
      };

      expect(newState).toEqual(expectedState);
    });
    test("updates state correctly for successful guess", () => {
        store.dispatch(guessWord(secretWord));
        const newState = store.getState();
        const expectedState = {
            secretWord,
            success: true,
            guessedWords: [
                ...guessedWords,
                {guessedWord: secretWord, letterMatchCount: 5 }
            ]
        };
        expect(newState).toEqual(expectedState);
    });
  });
});
