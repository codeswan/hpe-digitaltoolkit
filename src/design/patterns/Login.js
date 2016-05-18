// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');

var Login = React.createClass({
  render: function () {
    return (
      <DocsArticle title="Login" colorIndex="neutral-3">
        <p>
          Typically the first thing a user does on a login screen is enter
          their username. So it makes sense to place focus on the username
          field so that it is ready and active. There should be no cognitive
          effort required to use our login screen. Upon entering the page,
          focus is placed in the username field. The user can then mouse,
          tab on the keyboard, or tap to the password field.

          <img src="img/Login-form.svg" alt="login form" />
        </p>

        <section>
          <h2>Mobile</h2>

          <p>The mobile login page has the same look and feel, but is sized accordingly. The dialog portion of the screen occupies the full width of the screen. The footer information becomes stacked as necessary. There is no scrolling on the login page.</p>

          <p>As shown in the examples, the login page on mobile should respond to the screen size and orientation appropriately. It is important to put the focus in the username field and the keyboard should be open. In addition, select the appropriate type of keyboard based on the format of your username field. If the format is an email address, open the email keyboard.</p>

          <img src="img/Login-mobile.svg" alt="login mobile" />
        </section>

        <section>
          <h2>Expected elements</h2>

          <p>The company logo should be present on the login pages. Alternatively, if a product has an approved product logo, then it can be used instead of the company logo.</p>

          <p>The product name or application name is also prominent on the login page, immediately below the logo. Next are the username and password fields. Finally, the Login button should big and visible. It should be the default button for the form so the user can press Enter on the keyboard to login.</p>

          <img src="img/Login-elements.svg" alt="login elements" />
        </section>

        <section>
          <h2>Optional elements</h2>

          <p>The following fields are optional and can be used based on the needs of the application.</p>

          <h3>Forgot username</h3>
          <p>Allows a user to request assistance locating their username.</p>

          <h3>Forgot password</h3>
          <p>Allows the user to request assistance resetting their password.</p>

          <h3>Remember me</h3>
          <p>Allows a user to indicate they want the application to remember their login information to the extent allowed by the security requirements of the application.</p>

          <h3>Sign up</h3>
          <p>For applications which allow users to sign up for access, this link should take them to a page that either creates an account or submits a request for an account to be created.</p>

          <h3>Footer</h3>
          <p>Contains the copyright, product version, terms of use, and privacy references.</p>

          <h3>Background image</h3>
          <p>Most applications should include a background image for visual appeal. However, if there are constraints, it is acceptable to use a solid light gray background.</p>
        </section>

        <section>
          <h2>Handling the Unexpected</h2>

          <p>Should the user tap on the Login button before entering their username or password, red error messages should be displayed indicating one or both of the fields requires input.</p>

          <p>In the case that the authentication sequence fails, for security reasons the error message cannot indicate which field was incorrectly entered. The message must simply state that the username or password were not recognized.</p>
        </section>

        <section>
          <h2>Variations</h2>

          <p>Given the diverse nature of applications, there are a few variations available for the login page. Below, the example shows the login page without a background image. The background image is gratuitous and is not required. Applications that have limited space resources (such as embedded devices) may adopt such a style to keep the resource demands to a minimum.</p>

          <img src="img/Login-no-background.svg" alt="login no background" />

          <img src="img/Login-background.svg" alt="login background" />
        </section>

        <section>
          <h2>Accessibility</h2>

          <p>The user must be able to navigate the login page without the use of a pointing device on a desktop. If there is an error on input, there shall be red text that provides error feedback.</p>
        </section>
      </DocsArticle>
    );
  }
});

module.exports = Login;
