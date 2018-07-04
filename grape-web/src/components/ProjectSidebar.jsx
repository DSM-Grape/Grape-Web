import React, { Component } from 'react';

// Render Group & Group Paths
const Group = ({ info, groupname, paths }) => {
  return (
    <div className="project-sidebar-group">
      <p>{groupname}</p>
      <ul>
        {paths.map((val, index) => { return (info.resource[val].group === groupname) ? (<li key={index}><a key={index} href={val.replace(/\//, "#")}>{val}</a></li>) : '' })}
      </ul>
    </div>
  )
}

class ProjectSidebar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="project-sidebar-wrap">
        <div id="project-sidebar-search" className="input">
          <input placeholder="Search"/>
        </div>
        <div id="project-sidebar-group-list">
          {this.props.groups.map((val, index) => { return <Group key={index} info={this.props.info} groupname={val} paths={this.props.paths} /> })}
        </div>
      </div>
    );
  }
}

export default ProjectSidebar;