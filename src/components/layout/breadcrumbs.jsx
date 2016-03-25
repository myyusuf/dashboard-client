var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="breadcrumbs">
            <div className="container-fluid">
                <h2 className="breadcrumbs-title"></h2>
                <ol className="breadcrumbs-list">
                    <li>
                        <a className="breadcrumbs-item-link" href="#">Home</a>
                    </li>
                </ol>
            </div>
        </div>
  }
});
