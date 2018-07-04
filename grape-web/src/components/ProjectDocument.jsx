import React, { Component } from 'react';

import '../css/ProjectDocument.css';
import scheme from '../res/color-scheme.json';

const API = ({ method, methodname, baseURL, url }) => {
  return (
    <div className="document-api" style={{ backgroundColor: method.pcl, border: '0.5px solid ' + method.pcd }}>
      <span id="api-method" style={{ color: method.pcd, fontSize: 15 + 'pt' }}>{methodname.toUpperCase()}</span>
      <span id="api-base-url" style={{ color: method.pcg, fontSize: 15 + 'pt' }}>{baseURL}</span>
      <span id="api-target-url" style={{ color: 'black', fontSize: 15 + 'pt' }}>{url}</span>
    </div>
  )
}

class ProjectDocument extends Component {
  constructor(props) {
    super();
    this.state = {
      document: "",
      baseURL: "http://grape.io/app"
    }
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    this.setState({ document: e.target.files[0] });
  }

  render() {
    return (
      <div id="project-document-wrap">
        {/* <div id="project-document-upload">
          <input type="file" accept="application/json" onChange={this.onFileChange} />
          <input type="button" onClick={() => { this.props.loadDocument(this.state.document) }} />
        </div> */}
        {/* {state.baseurl -> props.baseurl로 변경하기} */}
        <API method={scheme.scheme.get} methodname={'get'} baseURL={this.state.baseURL} url={'/mypage/:groupid'} />
      </div>
    );
  }
}

export default ProjectDocument;

