var AppRouter = Backbone.Router.extend({
  
  routes: {
    "": "search",
    "results/:type/:startWith/:withLatin/:count": "results"
  },
  
  search: function() {
    var search = new Search;
  },
  
  results: function(type, startWith, withLatin, count) {
    var results = new Results({type:type, startWith:startWith, withLatin:withLatin, count:count});
  }
  
});