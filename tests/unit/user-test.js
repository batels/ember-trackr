import { test, moduleFor } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

moduleFor('model:user','User Tests', {
  setup: function(){
    App = startApp();
    console.log("in setup user test");
    console.log("in setup user App is" + App);
  },
  teardown: function(){
    Ember.run(App, 'destroy');
  }
});


test('displayName', function() {
	
	var container = new Ember.Container();
	container.register('store:main', DS.Store);
  	container.register('model:user', App.User);
 
	var store = container.lookup('store:main');
	var user = store.createRecord({
		    firstName: 'Tom2',
		    lastName: 'Dale'
		  });
 
  equal(user.get('displayName'), 'Tom 1Dale');

});