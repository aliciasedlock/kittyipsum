var Search = Backbone.View.extend({
  el: $('.ki-main'),
  
  events: {
    "click button.get-ipsum": "generate",
    "blur input.count-input": "validate"
  },
  
  initialize: function() {
    var template = _.template($('#search').html());
    this.el.html(template);
  },
  
  validate: function() {
    var input = $('.count-input').val(),
    errorSpan = $('div.error'),
    isOnlyDigits = new RegExp("^[0-9]$");
    msg = '';
    
    if (input == '' || input == null) {
      msg = "You didn't enter a number!";
    }
    else if (!isOnlyDigits.test(input)) {
     msg = "That's not a valid number!"
    }
    
    errorSpan.text(msg);
    
  },
  
  generate: function() {
    var num = $('.count-input').val(),
    self = this,
    startWith = $('#start-with-ipsum:checked').length,
    withLatin = $('#with-latin:checked').length;
    
    this.validate();
    
    if ($('div.error').html() == '') {
      Backbone.history.navigate("results/paragraph/" + startWith + "/" + withLatin + "/" + num, {trigger: true});
    }
  }
  
});