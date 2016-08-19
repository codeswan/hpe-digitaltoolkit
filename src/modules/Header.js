// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';

const CLASS_ROOT = 'stack';

export default class Header extends Component {

  render () {
    const {
      ...props
    } = props;

    return (
      <Box {...props}>
        Header
      </Box>
    );
  }
};

Header.propTypes = {
};

Header.defaultProps = {
};

