import React, { Component } from 'react';

import '../css/ProjectMenu.css';
import ico from '../res/img/ico_project_menu.svg';

class ProjectMenu extends Component {
  constructor(props) {
    super();
    this.onBtnClick = this.onBtnClick.bind(this);
    this.state = {
      width: 0,
      pleft: 0,
      pright: 0,
    }
  }

  onBtnClick() {
    this.setState({ width: 'auto', pleft: 10 + 'px', pright: 70 + 'px' });
  }

  render() {
    return (
      <div id="project-menu-wrap">
        <div id="project-menu-btn" onClick={this.onBtnClick}><img id="project-menu-img" alt="menu icon" src={ico} /></div>
        <div id="project-menu-list-wrap" style={{ width: this.state.width, paddingLeft: this.state.pleft, paddingRight: this.state.pright }}>
          <ul>
            <li className="project-menu-item">ADD API</li>
            <li className="project-menu-item">ADD DOC</li>
            <li className="project-menu-item">PULL REQUEST</li>
            <li className="project-menu-item">EDIT</li>
            <li className="project-menu-item">MANAGE PROJECT</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;