import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Input from './components/Input/Input';
import { getSecretWord } from './redux/actions/actionCreators/actionCreators';

export class UnconnectedApp extends Component {
    componentDidMount(){
        //getSecretWord is being called as a props because in the test file we passed it
        //as a props for the Unconnected App to recieve
        this.props.getSecretWord();
    }
    render(){
        const {success,guessedWords,secretWord} = this.props;
        return(
            <div className="container">
                <h1>Jotto</h1>
                <div>The secret word is {secretWord}</div> 
                <Congrats success={success}/>
                <Input />
                <GuessedWords guessedWords={guessedWords}/>
            </div>
        )
    }
}  

const mapStateToProps = (state) => {
    const { success,guessedWords,secretWord} = state;
    return { success,guessedWords,secretWord}
}
export default connect(mapStateToProps, {getSecretWord})(UnconnectedApp);
