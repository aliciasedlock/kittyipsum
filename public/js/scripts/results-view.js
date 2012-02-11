var Results = Backbone.View.extend({
  
  el: $('.ki-main'),
  
  initialize: function() {
    var generatedText;
    _.bindAll(this, 'render');
    
    this.ipsum = new Ipsum({type:this.options.type, startWith:this.options.startWith, withLatin:this.options.withLatin, count:this.options.count});
    this.ipsum.fetch({success: this.render});
  },
  
  render: function() {
    var template = _.template($('#results').html()),
    textToAppend;
    genText = this.ipsum.attributes.generatedText;
    this.el.html(template);
    
    $.each(genText, function(){
      textToAppend = '';
      
      $.each(this, function(){
        textToAppend += this;
      });
      
      var appendText = "<p>" + textToAppend + "</p>";
      $('.ki-results').append(appendText);
      
    });
    
    //template = _.template($('#search').html());
    //this.el.append(template);
  }
  
});