import React, { Component } from 'react';
import { ProjectDocument, ProjectSidebar } from '../components/Index';

import '../css/Project.css';

class Project extends Component {
  constructor(props) {
    super();
    this.state = {
      info: {},
      groups: [],
      paths: [],
    }
    this.loadDocument = this.loadDocument.bind(this);
  }

  loadDocument(doc) {
    let reader = new FileReader();
    reader.onload = (e) => {
      let contents = JSON.parse(e.target.result);
      this.setState({ info: contents, groups: Object.keys(contents.groups), paths: Object.keys(contents.resource) });
    }
    reader.readAsText(doc);
  }

  render() {
    return (
      <div id="project-wrap">
        <ProjectSidebar info={this.state.info} groups={this.state.groups} paths={this.state.paths} />
        <ProjectDocument info={this.state.info} loadDocument={this.loadDocument} />
      </div>
    );
  }

}

export default Project;