var Results = Backbone.View.extend({
  
  el: $('.ki-main'),
  
  initialize: function() {
    var generatedText;
    _.bindAll(this, 'render');
    
    this.ipsum = new Ipsum({type:this.options.type, count:this.options.count});
    this.ipsum.fetch({success: this.render});
  },
  
  render: function() {
    var template = _.template($('#results').html()),
    genText = this.ipsum.attributes.generatedText;
    this.el.html(template);
    
    $.each(genText, function(){
      var appendText = "<p>" + this + "</p>";
      $('.ki-results').append(appendText);
    });
    
    template = _.template($('#search').html());
    this.el.append(template);
  }
  
});