import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../../redux/actions/actionCreators/actionCreators";

export class UnconnectedInput extends React.Component {
  render() {
    const {guessWord} = this.props;
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb2 mx-sm-3"
          type="text"
          placeholder="Enter guess"
        />

        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={guessWord}
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
