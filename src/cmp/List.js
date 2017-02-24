import MenuItem from 'material-ui/MenuItem';
import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class List extends Component {
  constructor(props) {
    super(props);
    if (!props.list.tasks) {
      props.list.tasks = [];
    }
  }
  styles = {
    root: {
      position: "absolute",
      top: "10em",
    },
    gridList: {
      top: 0,
      width: 300,
      // height: 450,
      // overflowY: 'auto',
    },
    gridTile: {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "rgba(0, 0, 0, 0.2)",
      marginBottom: "20px"
    },
    toggle: {
      marginBottom: 0,
    },
    taskdesc: {
      textAlign: "left",
      margin: 20
    }
  };

  archive(task) {
    //task.archived = true;
  }
  taskMenu(task) {
    return (
      <IconMenu
        iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Archive" onTouchTap={this.archive(task)}/>
      </IconMenu>
    );
  }
  render() {
    return (
      <div style={this.styles.root} >
        <GridList
          cols={1}
          cellHeight={200}
          padding={1}
          style={this.styles.gridList}
        >
          {this.props.list.tasks.map((task) => (
            <GridTile
              style={this.styles.gridTile}
              key={task.id}
              title={task.name}
              subtitle={task.desc}
              actionIcon={this.taskMenu(task)}
              onClick={(e) => { e.stopPropagation(); this.handleSelectTaskEvent(task) }}
              cols={1}
            >
                {
                  task.img ? <img src={task.img} alt={task.name} /> : <div style={this.styles.taskdesc}>task.desc</div>
                }
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}

export default List;