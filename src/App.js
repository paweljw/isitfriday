import React, { Component } from 'react';

import Saturday from './components/Saturday/Saturday'
import Sunday from "./components/Sunday/Sunday";
import Monday from "./components/Monday/Monday";
import Tuesday from "./components/Tuesday/Tuesday";
import Wednesday from "./components/Wednesday/Wednesday";
import Thursday from "./components/Thursday/Thursday";
import Friday from "./components/Friday/Friday";

class App extends Component {
  state = {
    currentDate: new Date()
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick = () => {
    this.setState({ currentDate: new Date() })
  };

  render() {
    const { currentDate } = this.state;
    const dayOfWeek = currentDate.getDay();
    return (
      <div className="App">
        {dayOfWeek === 1 && <Monday date={currentDate} />}
        {dayOfWeek === 2 && <Tuesday date={currentDate} />}
        {dayOfWeek === 3 && <Wednesday date={currentDate} />}
        {dayOfWeek === 4 && <Thursday date={currentDate} />}
        {dayOfWeek === 5 && <Friday />}
        {dayOfWeek === 6 && <Saturday />}
        {dayOfWeek === 0 && <Sunday />}
      </div>
    );
  }
}

export default App;
