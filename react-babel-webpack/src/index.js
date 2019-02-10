import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FunctionalComponent as Introduction } from './components/FunctionalComponent';
import './app.css';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            introComplete: false,
            greetText: "You do not know me yet."
        }
        this.loadIntroComponent = this.loadIntroComponent.bind(this);
    }
    loadIntroComponent() {
        console.log("im here");
        this.setState(
            {
                introComplete: true,
                greetText: "You know me now :)"
            }
        );
    }
    render() {
        return (
            <div>
                <div className="header"> Welcome to MyApp! </div>
                <div className="mainComp">
                    Hello! {this.state.greetText}
                </div>
                <div className="mainComp">
                    Introduction Status: <strong>{JSON.stringify(this.state.introComplete)}</strong>
                </div>
                <div className="mainComp blueBold" onClick={this.loadIntroComponent}>Click anywhere on this line to know about
                    the creator of this page through a Functional Component!</div>
                {this.state.introComplete === true ?
                    (<div>
                        <Introduction name={'Pushkar'} job={'Developer'} />
                        <div className="mainComp">
                            <div><span className="boldUnderline">WHAT EXACTLY HAPPENED?</span> Click event triggered a change in state with a new value set for introComplete.
                            Once "Introduction Status" (introComplete) was changed to true (as seen above), it resulted in a state change causing re-render of this component. As I have a condition
                    where I'm checking for introComplete status from state in order to display Intro component, the intro component got displayed.</div>
                        </div>
                    </div>)
                    : ""}

            </div>
        );
    }
}




ReactDOM.render(<MyApp />, document.getElementById('root'));
