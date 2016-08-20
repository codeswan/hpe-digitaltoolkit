// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development L.P.

import React, { Component, PropTypes } from 'react';
import Responsive from 'grommet/utils/Responsive';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Button from 'grommet/components/Button';
import SearchIcon from 'grommet/components/icons/base/Search';
import Menu from 'grommet/components/Menu';
import Logo from './Header/Logo';

const CLASS_ROOT = 'header';

export default class HPEHeader extends Component {

  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onClickTitle = this._onClickTitle.bind(this);
    this.state = {
      responsive: false
    };
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount () {
    this._responsive.stop();
  }

  _onResponsive (responsive) {
    this.setState({ responsive: responsive });
  }

  _onClickTitle () {
    if (this.props.onClickLogo) {
      this.props.onClickLogo();
    } else {
      window.location = this.props.logoLink;
    }
  }

  render () {
    let reverseLogo = false;
    let classes = [CLASS_ROOT];
    let colorIndex = null;
    let headerAlign = 'center';

    if (this.props.className) {
      classes.push(this.props.className);
    }

    let menuItems;
    if (this.props.children) {
      menuItems = (
        <Menu direction="row">
          {this.props.children}
        </Menu>
      );
    }

    return (
      <div>
        <Box className={classes.join(' ')} full="horizontal">
          <Header appCentered={this.props.centered}
            justify="between" align={headerAlign} size="large"
            colorIndex={colorIndex}
            pad={{
              horizontal: 'none',
              vertical: 'none',
              between: 'small'
            }} wrap={true}
            external={this.props.external}>
            <Box>
              <Title onClick={this._onClickTitle}>
                <Logo reverse={reverseLogo} />
              </Title>
            </Box>
            {menuItems}
            <Button icon={<SearchIcon />} onClick={() => console.log('hi')} />
          </Header>
        </Box>
      </div>
    );
  }
};

HPEHeader.propTypes = {
  centered: PropTypes.bool,
  colorIndex: PropTypes.string,
  logoLink: PropTypes.string,
  onClickLogo: PropTypes.func
};

HPEHeader.defaultProps = {
  logoLink: '/',
  links: []
};
