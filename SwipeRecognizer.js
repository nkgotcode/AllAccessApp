'use strict';

import React, {Component, ImageBackground} from 'react';
import {View, Text} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class SwipeRecognizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: 'none',
      //   backgroundColor: '#fff',
    };
  }

  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
    console.log(this.state);
  }

  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
    console.log(this.state);
  }

  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
    console.log(this.state);
  }

  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
    console.log(this.state);
  }

  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    // switch (gestureName) {
    //   case SWIPE_UP:
    //     this.setState({backgroundColor: 'red'});
    //     break;
    //   case SWIPE_DOWN:
    //     // this.setState({backgroundColor: 'green'});
    //     break;
    //   case SWIPE_LEFT:
    //     // this.setState({backgroundColor: 'blue'});
    //     break;
    //   case SWIPE_RIGHT:
    //     // this.setState({backgroundColor: 'yellow'});
    //     break;
    // }
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={state => this.onSwipeUp(state)}
        onSwipeDown={state => this.onSwipeDown(state)}
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          //   backgroundColor: this.state.backgroundColor,
        }}></GestureRecognizer>
    );
  }
}

export default SwipeRecognizer;
