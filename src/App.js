import React, {Component} from 'react';
import Countdown from 'react-countdown-now';

import './App.css';

class App extends Component {

	
	renderer = ({ days, hours, minutes, seconds}) => {
		return <span>{days} dni {hours} godzin {minutes} minut {seconds} sekund</span>;
	}
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
					
					<h1>Zostało</h1>
					<h2><Countdown date={'Mon, 12 Aug 2019 18:00:00'} renderer={this.renderer} /></h2>
        </header>
      </div>
    );
  }
  
  
}

export default App;
