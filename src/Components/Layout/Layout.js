import React from "react";
import Container from '@material-ui/core/Container';
import Title from '../Title/Title'
import Creator from '../Creator/Creator'

import Code from '../Code/Code'

import "./Layout.css";

const Layout = () => {
  return (
    <Container className='container' fixed>
      <Title />
      <Creator />
      <Code />
    </Container >
  );
};

export default Layout;
