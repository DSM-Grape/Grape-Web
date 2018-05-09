import React, { Component } from 'react';

const Group = ({ info, groupname, paths }) => {
  return (
    <div className="project-sidebar-group">
      <p>{groupname}</p>
      <ul>
        {paths.map((val, index) => { return (info.resource.get(val).group === groupname) ? (<a href="key">val</a>) : '' })}
      </ul>
    </div>
  )
}

class ProjectSidebar extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <div id="project-sidebar-wrap">
        <div id="project-sidebar-group-list">
          {this.props.groups.map((val, index) => { return <Group info={this.props.info} groupname={val} paths={this.props.paths} /> })}
        </div>
      </div>
    );
  }
}

export default ProjectSidebar;