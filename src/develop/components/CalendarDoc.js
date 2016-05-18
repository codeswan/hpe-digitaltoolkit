// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Calendar = require('grommet/components/Calendar');

var CalendarDoc = React.createClass({

  getInitialState: function () {
    return {value: (new Date()).toISOString().slice(0, 10)};
  },

  _onChange: function (value) {
    this.setState({value: value});
  },

  render: function() {
    var inline =
      "<Calendar onChange={...} />";
    return (
      <DocsArticle title="Calendar" colorIndex="neutral-3">

        <p>An input field for a date.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>format        {"{string}"}</code></dt>
            <dd>The date format. Available syntax can be seen in the
              documentation
              for <a href="http://momentjs.com/docs/#/displaying/format/">moment</a>.
              The default is <code>{"M/D/YYYY h:mm a"}</code>.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"function ({string}) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text into
              the input or selects a date from the drop down.</dd>
            <dt><code>value         {"{string}|{Date}|{moment}"}</code></dt>
            <dd>If a string is specified, it is put in the input. If a Date
              or moment is specified, it is formatted and put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <div className="example">
            <Calendar id="item1" name="item-1"
              onChange={this._onChange} value={this.state.value} />
          </div>
          <pre><code className="html hljs xml">{"<Calendar value={...} onChange={...} />"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = CalendarDoc;
