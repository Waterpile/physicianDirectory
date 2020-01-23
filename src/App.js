import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialties: [],
      physicians: []
    }
  }

  componentDidMount() {
    fetch('https://utmc.utoledo.edu/findaphysician/api/specialty')
      .then(response => response.json())
      .then(allSpecialties => this.setState({ specialties: allSpecialties }));

    fetch('https://utmc.utoledo.edu/findaphysician/api/physician')
      .then(response => response.json())
      .then(allPhysicians => this.setState({ physicians: allPhysicians }));
  }

  render() {
    return (
      <>
        <BrowserRouter history={customHistory}>
          <Main specialties={this.state.specialties} physicians={this.state.physicians} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
