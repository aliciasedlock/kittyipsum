var AppRouter = Backbone.Router.extend({
  
  routes: {
    "": "search",
    "results/:type/:count": "results"
  },
  
  search: function() {
    var search = new Search;
  },
  
  results: function(type, count) {
    var results = new Results({type:type, count:count});
  }
  
});