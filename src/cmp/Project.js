import React, { Component } from 'react';
import List from './List'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import './Project.css';

class Project extends Component {
  styles = {
    column: {
      width: 300
    }
  }
  render() {
    return <div className={this.props.openDock ? "openDock": "closeDock"}>
      <Table style={{width:this.props.project.lists.length*this.styles.column.width}}>
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}>
          <TableRow>
            {
              this.props.project.lists.map((list) => {
                return <TableHeaderColumn style={this.styles.column} key={"header"+list.id}>{list.name}</TableHeaderColumn>
              })
            }
          </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={false}>
          <TableRow>
          {
            this.props.project.lists.map((list) => {
              return <TableRowColumn style={this.styles.column} key={"tColumn"+list.id}><List key={list.id} list={list} /></TableRowColumn>
            })
          }
          </TableRow>
        </TableBody>
      </Table>
    </div>
  }
}

export default Project;