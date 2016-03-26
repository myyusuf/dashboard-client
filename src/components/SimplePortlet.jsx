var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  getDefaultProps: function() {
    return {
      title: 'Title',
    }
  },
  componentWillMount: function() {},
  render: function() {
    return (
      <div className="portlet light bordered">
        <div className="portlet-title">
          <div className="caption font-green">
            <span className="caption-subject bold uppercase">{this.props.title}</span>

          </div>
          <div className="actions">
            <a className="btn btn-circle btn-icon-only btn-default fullscreen" href="#"></a>
          </div>
        </div>
        <div className="portlet-body">
          {this.props.children}
        </div>
      </div>
    );

  }
});
