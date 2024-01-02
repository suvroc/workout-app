import React, { Component } from 'react';

import Countdown, { CountdownApi } from 'react-countdown';

export default class CountdownApiExample extends Component {
  countdownApi = null;
  state = { date: Date.now() + 10000 };
  

  handleStartClick = () => {
    this.countdownApi && this.countdownApi.start();
  };

  handlePauseClick = () => {
    this.countdownApi && this.countdownApi.pause();
  };

  handleResetClick = () => {
    this.setState({ date: Date.now() + 10000 });
    this.countdownApi && this.countdownApi.stop();
  };

  handleUpdate = () => {
   // this.countdownApi && this.countdownApi.pause();
    this.forceUpdate();
  };

  setRef = (countdown) => {
    if (countdown) {
      this.countdownApi = countdown.getApi();
    }
  };

  isPaused() {
    return !!(this.countdownApi && this.countdownApi.isPaused());
  }

  isCompleted() {
    return !!(this.countdownApi && this.countdownApi.isCompleted());
  }

  isStopped() {
    return !!(this.countdownApi && this.countdownApi.isStopped());
  }

  render() {
    return (
      <>
        <h3>Countdown with Start, Pause and Reset Controls</h3>
        <Countdown
          key={this.state.date}
          ref={this.setRef}
          date={this.state.date}
          onMount={this.handleUpdate}
          onStart={this.handleUpdate}
          onPause={this.handleUpdate}
          onComplete={this.handleUpdate}
          autoStart={false}
        />
        <div>
          <div>a{this.isStopped()}</div>
          <div>a{this.isCompleted()}</div>
          <div>{this.isPaused()}</div>
          <button
            type="button"
            onClick={this.handleStartClick}
            disabled={!this.isPaused() || this.isCompleted() || this.isStopped()}
          >
            Start
          </button>{' '}
          <button
            type="button"
            onClick={this.handlePauseClick}
            disabled={this.isPaused() || this.isCompleted()}
          >
            Pause
          </button>{' '}
          <button type="button" onClick={this.handleResetClick}>
            Reset
          </button>
        </div>
      </>
    );
  }
}