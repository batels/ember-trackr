import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';
 
var App;

module('Ticket Tests', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});
 
test('listing tickets', function() {
  visit('/')
  .click('a:contains("Tickets")')
  .then(function() {
    ok(find('li:contains("Ticket 1")').length,
'expected to find Ticket 1');
  });
});