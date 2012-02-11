var Ipsum = Backbone.Model.extend({
  
  url: "assets/ipsum.json",
  
  initialize: function() {
    this.type      = this.attributes.type,
    this.count     = this.attributes.count;
  },
  
  parse: function(response) {
    var words = response.words,
    paragraphArray = [],
    ipsumArray = [],
    pCount = this.count,
    min = 0,
    max = response.words.length,
    sentence;
    
    // for how many paragraphs we wants
    for (i = 0; i < this.count; i++) {
      // varries 6-9 sentences in length
      var paragraphLength = Math.floor(Math.random() * (9 - 6)) + 6;
      // for how many sentences we want per paragraph
      for (j = 0; j < paragraphLength; j++) {
        // varies 10-13 words in length
        var sentenceLength = Math.floor(Math.random() * (13 - 10)) + 10,
        sentence = '',
        comma = Math.floor(Math.random() * (6 - 3)) + 3;
        // for how many words we want per sentence
        for (k = 0; k < sentenceLength; k++) {
          var n = Math.floor(Math.random() * (max - min)) + min;
          
          if (k == comma) {
            sentence = sentence + words[n] + ", ";
          } else {
            sentence = sentence + words[n] + " ";
          }
          
          if (k + 1 == sentenceLength) {
            //console.log(sentence.charAt(0).toUpperCase() + sentence.slice(1));
            paragraphArray.push(sentence);
          }
          
        } // end k loop
        if (j + 1 == paragraphLength) {
          ipsumArray.push(paragraphArray);
          paragraphArray = [];
        }
      } // end j loop
      
    } // end i loop

    return {
      "generatedText": this.punctuateIpsum(ipsumArray)
    }
  },
  
  punctuateIpsum: function (array) {
    var ipsum = [],
    newP;
    
    for (h = 0; h < array.length; h++) {
      var a = array[h];
      newP = [];  
      for (m = 0; m < a.length; m++) {
        
        var s = a[m],
        n = Math.floor(Math.random() * (7 - 4)) + 4;
        
        s = s.charAt(0).toUpperCase() + s.slice(1);
        s = s.substring(0, s.length-1);
        s += '. ';
        
        newP.push(s);
        
      }
      ipsum.push(newP);
      
    }
    
    return ipsum;
    
  }
  
});