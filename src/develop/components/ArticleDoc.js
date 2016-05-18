// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Article = require('grommet/components/Article');
var Header = require('grommet/components/Header');
var Section = require('grommet/components/Section');

var ArticleDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  render: function() {
    var inline = [
      "<Article>",
      "  <Header>",
      "    <h1>{title}</h1>",
      "  </Header>",
      "  <Section>",
      "    <h2>{header}</h2>",
      "    <p>{content}</p>",
      "  </Section>",
      "</Article>"
    ].join('\n');

    return (
      <DocsArticle title="Article" colorIndex="neutral-3">

        <p>Styles standard HTML5 markup for use in articles.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>onSelect      {"function (selected) {...}"}</code></dt>
            <dd>Function that will be called when the article
              changes the currently selected chapter.</dd>
            <dt><code>selected      number</code></dt>
            <dd>The currently selected chapter using a zero based index.
              Defaults to 0.</dd>
            <dt><code>scrollStep   true|false</code></dt>
            <dd>Whether to allow keyboard control of stepped scrolling through
            children. When true, directional keys will step through the
            children, depending on the direction they are laid out.
            If the spacebar is pressed, the children will automatically
            be stepped through at an interval of ten seconds per child.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Article>
              <Header>
                <h1>Title</h1>
              </Header>
              <Section>
                <h2>Heading</h2>
                <p>Lorem ipsum ...</p>
              </Section>
            </Article>
          </div>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = ArticleDoc;
