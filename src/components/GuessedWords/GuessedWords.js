import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
  let content;
  const { guessedWords } = props;
  if (guessedWords.length === 0) {
    content = (
      <span data-test="component-guess-instruction">
        Try to guess the secret word
      </span>
    );
  } else {
    const guessWordsRows = guessedWords.map(
      ({ guessedWord, letterMatchCount }, index) => (
        <tr data-test="guessed-word" key={index}>
          <td>{guessedWord}</td>
          <td>{letterMatchCount}</td>
        </tr>
      )
    );
    content = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRows}</tbody>
        </table>
      </div>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;
