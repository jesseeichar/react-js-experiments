import React, { Component } from 'react';
import Badge from 'material-ui/Badge';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class ProjectListEvent {
  constructor(isCreate, project) {
    this.isCreate = isCreate;
    this.project = project;
  }
}
class ProjectList extends Component {
  styles={
    action: {
      bottom: 0,
      position: "absolute",
      right: 0,
      margin: 10
    }
  };
  calculateNumberOfTasks(project) {
    var i = 0;
    project.lists.forEach((list) => {
      if (list.tasks) list.tasks.forEach((t) => i++)
    });
    return i;
  }
  handleSelectProjectEvent(project) {
    this.props.onChange(new ProjectListEvent(false, project))
  }
  createProject() {

  }
  render() {
    return <div>
      <h2>Projects </h2>
      {
        this.props.projects.map((p) => {
          return (
            <MenuItem
              key={p.id}
              insetChildren={this.props.activeProject !== p.id}
              checked={this.props.activeProject === p.id}
              onTouchTap={() => this.handleSelectProjectEvent(p)}>
              {p.name}
              <Badge
                badgeContent={this.calculateNumberOfTasks(p)}
                primary={true} />
            </MenuItem>
          );
        })
      }
      <FloatingActionButton style={this.styles.action} onClick={() => this.createProject()}>
      <ContentAdd />
    </FloatingActionButton>
    </div>
  }
}

export default ProjectList;