# Wycash-ember

This is an Ember 2.6.x implementation of the exercises in Kent Beck's classic _Test-Driven Development by Example_.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/) requires global install to run tests

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running Tests

* `ember test` - to run in CLI
* `ember test --server` to run in browser (localhost:4200)

## Language Differences
* The "equals" method overrides Java's default equality operator, which is used by JUnit's assertEquals() (Ch 3, 4)
* Implement this in Ruby by overriding the "==" equality operator, which is used by MiniTest (Ch 3, 4)
* Javascript does not allow overriding the default equality operator, use QUnit's deepEqual() assertion instead (Ch 4)
* Neither Ruby nor Javascript have class private variables (Ch 4)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

