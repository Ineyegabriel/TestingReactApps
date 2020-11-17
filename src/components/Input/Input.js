import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../../redux/actions/actionCreators/actionCreators";

export class UnconnectedInput extends React.Component {
  state = {
    currentGuess: null
  }
  inputValueHandler = (event) => {
    event.preventDefault();
    const{currentGuess} = this.state;
    const {guessWord} = this.props;

    const guessedWord = currentGuess;
    if(guessedWord && guessedWord.length > 0){
      guessWord(guessedWord);
      this.setState({currentGuess: ''});
    }
  }
  render() {
    const {currentGuess} = this.state;
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb2 mx-sm-3"
          type="text"
          placeholder="Enter guess"
          value={currentGuess}
          onChange={(event) => this.setState({currentGuess: event.target.value})}
        />

        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={(event) => this.inputValueHandler(event)}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}
const mapStateToProps = ({ success }) => ({
  success,
});

export default connect(mapStateToProps,{guessWord})(UnconnectedInput);
