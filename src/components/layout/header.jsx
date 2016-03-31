var React = require('react');
var Actions = require('../../stores/Actions');

module.exports = React.createClass({
  getInitialState: function() {
    return {}
  },
  componentWillMount: function() {
  },
  render: function() {
    return <div className="page-header navbar-fixed-top">

      <div className="clearfix">

        <div className="burger-trigger">
          <button className="menu-trigger">
            <img src="/assets/layouts/layout7/img/m_toggler.png" alt=""/>
          </button>
          <div className="menu-overlay menu-overlay-bg-transparent">
            <div className="menu-overlay-content">
              <ul className="menu-overlay-nav text-uppercase">
                <li>
                  <a href="#">Dashboard</a>
                </li>

              </ul>
            </div>
          </div>
          <div className="menu-bg-overlay">
            <button className="menu-close">&times;</button>
          </div>

        </div>

        <div className="page-logo" id="wgpage-logo">
          <a href="/">
            <img src="/wgassets/images/wg-logo-light.png" alt="logo" className="logo-default"/>
          </a>
        </div>

        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">

            <li className="dropdown dropdown-user">
              <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                <div className="dropdown-user-inner">
                  <span className="username">Admin</span>

                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-default">
                <li>
                  {/*<a href="extra_profile.html">
                    <i className="icon-user"></i>
                    My Profile
                  </a>*/}
                </li>
                <li>
                  <a href="/logout">
                    <i className="icon-lock"></i>
                    Log Out
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>

      </div>

    </div>

  }
});
