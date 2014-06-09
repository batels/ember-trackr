import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module('Store Tests', {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});
 
test('Ember Data version', function() {
  ok(DS.VERSION.indexOf('1.0.0-beta') === 0,
'expected DS.VERSION to be 1.0.0-beta.x (currently ' + DS.VERSION + ')');
});

test('store uses DS.FixtureAdapter', function(){
  var store = App.__container__.lookup('store:main'),
      adapter = store.adapterFor('application'),
      name = adapter.constructor.toString();
  
  equal(name, 'DS.FixtureAdapter');
});