import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import model from '../model'
import ProjectList from './ProjectList'
import Project from './Project'

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeProject: model.catalog.firstProject().id,
      open: false,
      catalog: model.catalog
    };
  }

  currentProject() {
    return this.state.catalog.projects[this.state.activeProject];
  }

  setDrawerState(open) {
    var state = this.state;
    state.open = open;
    this.setState(state);
  }
  setActiveProject(projectListEvent) {
    this.setState({activeProject: projectListEvent.project.id});
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title={this.currentProject().name}
            onLeftIconButtonTouchTap={() => this.setDrawerState(!this.state.open)}
          />
          <Drawer open={this.state.open} docked={false}
            onRequestChange={(open) => this.setDrawerState(open)}>
            <ProjectList activeProject={this.state.activeProject} projects={this.state.catalog.allProjects()} onChange={e => this.setActiveProject(e)} />
          </Drawer>

          <Project openDock={this.state.open} project={this.currentProject()} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
