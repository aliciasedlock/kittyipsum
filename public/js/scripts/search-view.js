var Search = Backbone.View.extend({
  el: $('.ki-main'),
  
  events: {
    "click button.get-ipsum": "generate",
    "blur input.count-input": "isInputValid"
  },
  
  initialize: function() {
    var template = _.template($('#search').html());
    this.el.html(template);
  },
  
  isInputValid: function(event) {
    
  },
  
  generate: function() {
    var num = $('.count-input').val();
    Backbone.history.navigate("results/paragraph/" + num, {trigger: true});
  }
  
});