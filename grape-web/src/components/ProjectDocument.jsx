import React, { Component } from 'react';

class ProjectDocument extends Component {
  constructor(props) {
    super();
    this.state = {
      document: ""
    }
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    this.setState({ document: e.target.files[0] });
  }

  render() {
    return (
      <div id="project-document-wrap">
        <div id="project-document-upload">
          <input type="file" accept="application/json" onChange={this.onFileChange} />
          <input type="button" onClick={() => { this.props.loadDocument(this.state.document) }} />
        </div>
      </div>
    );
  }
}

export default ProjectDocument;

