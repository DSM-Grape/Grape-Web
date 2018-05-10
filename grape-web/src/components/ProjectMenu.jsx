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
      expand: false,
      overlay: 'hide',
    }
  }

  onBtnClick() {
    this.state.expand === false ? this.setState({ width: 1000 + 'px', pleft: 10 + 'px', pright: 55 + 'px', expand: true, overlay: 'show' }) : this.setState({ width: 0, pleft: 0, pright: 0, expand: false, overlay: 'hide' });
  }

  render() {
    return (
      <div id="project-menu-wrap">
        <div id="project-overlay" onClick={this.onBtnClick} class={this.state.overlay}></div>
        <div id="project-menu-contents">
          <div id="project-menu-btn" onClick={this.onBtnClick}><img id="project-menu-img" alt="menu icon" src={ico} /></div>
          <div id="project-menu-list-wrap" style={{ maxWidth: this.state.width, paddingLeft: this.state.pleft, paddingRight: this.state.pright }}>
            <div id="project-menu-item-wrap">
              <span className="project-menu-item">ADD API</span>
              <span className="project-menu-item">ADD DOC</span>
              <span className="project-menu-item">PULL REQUEST</span>
              <span className="project-menu-item">EDIT</span>
              <span className="project-menu-item">MANAGE PROJECT</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;