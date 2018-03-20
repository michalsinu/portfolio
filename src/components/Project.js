import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div className="col-md-4 cursorPointer">
            <a data-toggle="modal" data-target={"." + this.props.name}>
                <img src={require(`../assets/${this.props.thumb}`)} className="thumb" alt="Project" />
            </a>

            <div className={"modal " + this.props.name} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">{this.props.title}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <div className="embed-responsive embed-responsive-21by9">
                <iframe height="1000" title="Link" className="embed-responsive-item" src={this.props.link}></iframe>
                </div>
                <br />
                <p>{this.props.text}</p>
                <a href={this.props.link}>Link</a>
                </div>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Project;