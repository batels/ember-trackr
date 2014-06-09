import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Application Tests', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});
 
test('footer', function() {
  visit('/');
  andThen(function() {
    var year   = new Date().getFullYear(),
    expect = 'Copyright © ' + year + ' EmberTrackr Inc.',
    actual = $.trim(find('footer').text());
 
    equal(actual, expect);
  });
});
