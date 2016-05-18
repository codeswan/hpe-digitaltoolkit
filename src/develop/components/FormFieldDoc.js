// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var FormField = require('grommet/components/FormField');
var CheckBox = require('grommet/components/CheckBox');
var RadioButton = require('grommet/components/RadioButton');
var NumberInput = require('grommet/components/NumberInput');

var FormFieldDoc = React.createClass({

  render: function() {
    var inline = [
      "<FormField label=\"Item 1\" htmlFor=\"item1\">",
      "  <input id=\"item1\" />",
      "</FormField>"].join("\n");
    return (
      <DocsArticle title="FormField" colorIndex="neutral-3">

        <p>A field in a web form.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>error     {"{text|node}"}</code></dt>
          <dd>Validation errors.</dd>
          <dt><code>help      {"{text|node}"}</code></dt>
          <dd>Helpful text.</dd>
          <dt><code>htmlFor   {"{id}"}</code></dt>
          <dd>Id of the input element that the label should be associated with.</dd>
          <dt><code>label     {"{text|node}"}</code></dt>
          <dd>Label for the field.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Text input</h3>
          <div className="example">
            <FormField label="Item 1" htmlFor="item1">
              <input id="item1" type="text" />
            </FormField>
          </div>
          <pre><code className="html hljs xml">{"<FormField label=\"Item 1\" htmlFor=\"item1\">\n  <input id=\"\{id\}\" type=\"text\"/>\n</FormField>"}</code></pre>

          <h3>Text input with errors</h3>
          <div className="example">
            <FormField label="Item 1" htmlFor="item1" error="error text">
              <input id="item1" type="text" />
            </FormField>
          </div>
          <pre><code className="html hljs xml">{"<FormField label=\"Item 1\" htmlFor=\"item1\" error=\"error text\">\n  <input id=\"\{id\}\" type=\"text\"/>\n</FormField>"}</code></pre>


          <h3>Checkbox</h3>
          <div className="example">
            <FormField label="">
              <CheckBox id="item2" label="Item 2" />
            </FormField>
          </div>
          <pre><code className="html hljs xml">{"<FormField>\n  <CheckBox id=\"\{item2\}\" label=\"Item 2\"/>\n</FormField>"}</code></pre>

          <h3>RadioButton with help</h3>
          <div className="example">
            <FormField label="item 3" help="help text">
              <RadioButton id="item3-1" label="choice 1" name="choice"/>
              <RadioButton id="item3-2" label="choice 2" name="choice"/>
            </FormField>
          </div>
          <pre><code className="html hljs xml">{"<FormField help=\"help text\">\n  <RadioButton id=\"\{item3-1\}\" label=\"choice 1\" name=\"choice\"/>\n  <RadioButton id=\"\{item3-2\}\" label=\"choice 2\" name=\"choice\"/>\n</FormField>"}</code></pre>

          <h3>NumberInput</h3>
          <div className="example">
            <FormField label="item 4" htmlFor="item4">
              <NumberInput id="item4" name="number" />
            </FormField>
          </div>
          <pre><code className="html hljs xml">{"<FormField help=\"help text\">\n  <RadioButton id=\"\{item3-1\}\" label=\"choice 1\" name=\"choice\"/>\n  <RadioButton id=\"\{item3-2\}\" label=\"choice 2\" name=\"choice\"/>\n</FormField>"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = FormFieldDoc;
