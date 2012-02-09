var Ipsum = Backbone.Model.extend({
  
  url: "assets/ipsum.json",
  
  initialize: function() {
    this.type      = this.attributes.type,
    this.count     = this.attributes.count;
  },
  
  parse: function(response) {
    var ipsum = response.paragraph,
    ipsumArray = [];
    
    for (i = 0; i < this.count; i++) {
      ipsumArray.push(ipsum);
    }

    return {
      "generatedText": ipsumArray
    }
  }
  
});