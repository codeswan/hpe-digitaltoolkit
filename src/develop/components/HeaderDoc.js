// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Header from '../../modules/Header';

Header.displayName = 'Header';

export default class HeaderDoc extends Component {
  render () {
    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <p>A toolkit header component.</p>
        <pre><code className="html hljs xml">
          {`<Header />`}
        </code></pre>

        <section>
          <h2>Header Options</h2>
          <dl>
            <dt><code>size                 small|medium|large|xlarge</code></dt>
            <dd>Size of content within Stack. Defaults to <code>medium</code>.</dd>
            <dt><code>label                string</code></dt>
            <dd>Label content.</dd>
            <dt><code>headline             string</code></dt>
            <dd>Headline content.</dd>
            <dt><code>headlineStrong       true|false</code></dt>
            <dd>If the Headline should be bold. Defaults to <code>true</code>.</dd>
            <dt><code>paragraph            string|[string, ...]</code></dt>
            <dd>Paragraph content. Array of strings will render multiple
              paragraphs.</dd>
            <dt><code>print                string|[string, ...]</code></dt>
            <dd>Small print content. Array of strings will render multiple print
              paragraphs.</dd>
            <dt><code>link                 string</code></dt>
            <dd>Call to action hyperlink reference.</dd>
            <dt><code>linkText             string</code></dt>
            <dd>Call to action text.</dd>
            <dt><code>onClick              func</code></dt>
            <dd>Click handler for the "Learn More" link.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="XLarge" code={
            <Header>
              <Menu direction="row" responsive={false}>
                <Box pad={{ horizontal: "medium" }}>
                  <Anchor href="#" className="active">
                    First
                  </Anchor>
                </Box>
                <Box pad={{ horizontal: "medium" }}>
                  <Anchor href="#">
                    Second
                  </Anchor>
                </Box>
                <Box pad={{ horizontal: "medium" }}>
                  <Anchor href="#">
                    Third
                  </Anchor>
                </Box>
              </Menu>
            </Header>
          } />

        </section>
      </DocsArticle>
    );
  }
};

HeaderDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

