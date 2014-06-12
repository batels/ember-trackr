var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
	this.resource('tickets',function(){
		this.route('ticket', { path: ':ticket_id' });
	});
});

export default Router;