var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('tickets',function(){
	this.resource('ticket', { path: ':ticket_id' });
	this.route('new');
	});
});

export default Router;