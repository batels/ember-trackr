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
    ok(find('a:contains("Ticket 1")').length,
'expected to find Ticket 1');
  });
});

test('viewing ticket details', function() {
  visit('/')
  .click('a:contains("Tickets")')
  .click('a:contains("Ticket 1")')
  .then(function() {
    ok(find('*:contains("Sed posuere consectetur est at lobortis.")').length,
'expected to find ticket description');
  });
});

test('editing ticket details', function() {
  visit('/tickets/1')
  .click('button:contains("Edit")')
  .fillIn('input[name="title"]', 'Foo Bar')
  .fillIn('select[name="status"]', 'Open')
  .fillIn('textarea[name="description"]', 'New description')
  .click('button:contains("Done")')
  .then(function() {
    ok(find('.list-group-item:contains("Foo Bar")').length,
'expected title in master list to update');
    ok(find('.panel-title:contains("Foo Bar")').length,
'expected title in detail view to update');

    ok(find('.list-group-item .badge:contains("Open")').length,
'expected status in master list to update');
    ok(find('.panel-title .badge:contains("Open")').length,
'expected status in detail view to update');
 
    ok(find('.panel-body:contains("New description")').length,
'expected description to update');

 });
});