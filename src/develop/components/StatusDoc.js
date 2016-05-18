var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Status = require('grommet/components/icons/Status');

var inline =
      "<Status value=\"...\" />";

var StatusDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Status" colorIndex="neutral-3">

        <p>A status icon.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle  {"{title}"}</code></dt>
            <dd>Accessibility Title. If not set uses the default title of the status icon.</dd>
            <dt><code>large       true|false</code></dt>
            <dd>Larger sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Status icon. Defaults to <code>medium</code>.</dd>
            <dt><code>small       true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>value       error|warning|ok|disabled|unknown</code></dt>
            <dd>Which status to indicate.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>OK</h3>
          <div className="example">
            <Status value="ok"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Status value=\"ok\">"}
          </code></pre>

          <h3>Error</h3>
          <div className="example">
            <Status value="critical" a11yTitle="critical"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Status value=\"critical\" a11yTitle=\"critical\">"}
          </code></pre>

          <h3>Warning</h3>
          <div className="example">
            <Status value="warning"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Status value=\"warning\">"}
          </code></pre>

          <h3>Disabled</h3>
          <div className="example">
            <Status value="disabled"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Status value=\"disabled\">"}
          </code></pre>

          <h3>Unknown</h3>
          <div className="example">
            <Status value="unknown"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Status value=\"unknown\">"}
          </code></pre>

          <h3>Small</h3>
          <div className="example">
            <Status value="ok" size="small"/>
          </div>
          <pre><code className="html">
            {"<Status value=\"ok\" size=\"small\">"}
          </code></pre>

          <h3>Large</h3>
          <div className="example">
            <Status value="ok" size="large"/>
          </div>
          <pre><code className="html">
            {"<Status value=\"ok\" size=\"large\">"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = StatusDoc;
