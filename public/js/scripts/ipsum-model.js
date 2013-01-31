var Ipsum = Backbone.Model.extend({
  
  url: "assets/ipsum.json",
  
  initialize: function() {
    this.type      = this.attributes.type,
    this.count     = this.attributes.count,
    this.startWith = this.attributes.startWith,
    this.withLatin = this.attributes.withLatin;
  },
  
  parse: function(response) {
    var english = response.words,
    latin = response.latin,
    paragraphArray = [],
    ipsumArray = [],
    words = [],
    pCount = this.count,
    min = 0,
    max, sentence;
    
    // if they want filler, merge the latin and english
    // else, the array will just be english
    for (g = 0; g < english.length; g++) {
      words.push(english[g]);
    }
    if (this.withLatin == 1) {
      for (f = 0; f < latin.length; f++) {
        words.push(latin[f]);
      }
    }

    max = words.length;
    
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
    
    // If the user wants 'Kitty ipsum dolar sit amet', add it to the first sentence of the first paragraph
    if (this.startWith == 1) {
      var ipsum = ipsumArray[0],
      sent = ipsum[0];
      sent = "kitty ipsum dolor sit amet, " + sent;
      ipsum[0] = sent;
      ipsumArray[0] = ipsum;
    }

    return {
      "generatedText": this.punctuateIpsum(ipsumArray)
    }
  },
  
	// This gives our Ispum some sentence structuring
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