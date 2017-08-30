import React, { Component } from 'react';


class WorldClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {timeZone: this.props.timeZone, timeZoneName: 'short'},
      currentTime: new Date(),
      clockFace: 'normal',
      digital: false,
      color: 'yellow'
    };
    // this._setTime();
    setInterval(() => {
        this._updateTime(1000)
    }, 1000)
  }

  _setTime = () => {
      console.log('hiiii');
      var options = {timeZone: this.props.timeZone, timeZoneName: 'short'};
      var newZone = this.state.currentTime.toLocaleTimeString('en-US', options);
      this.setState({
          currentTime: newZone
      });
  }

  _updateTime = (timeDifference) => {
    const newTime = new Date(this.state.currentTime.getTime() + timeDifference);
    this.setState({
      currentTime: newTime
    });
  }

  _updateLookAndFeel = (isDigital, newColor) => {
    // isDigital = true;
    // newColor = 'cornflowerblue';
    this.setState({
      digital: isDigital,
      color: newColor
    });
  }
  render() {
      return (
        <div>
            <p>Place: {this.props.place}</p>
            <p>{this.state.currentTime.toLocaleTimeString('en-US', this.state.options)}</p>
        </div>
      );
  }

}

class WorldClockDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var clocks = [];
        this.props.times.forEach((time) => {
            clocks.push(<WorldClock place={time.place} timeZone={time.timeZone} key={time.place} />);
        });
        return (
            <div>
                <h2>World Clocks</h2>
                {clocks}
            </div>
        );
    }
}

export default WorldClockDisplay;