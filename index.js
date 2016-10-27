const app = "I don't do much.";

var digitalClock = {
  time: Math.round(Date.now()/1000),
  startTicking: function() {setInterval(() => this.time++, 1000)}
}

const censor = function(word, text) {
  let string = text.split(" ");
  for (var i = 0, len = string.length; i < len; i++) {
    if (string[i].includes(word)) {
      let tmp = string[i].replace(word, "BLEEP")
      string[i] = tmp
    }
  }
  return string.join(" ")
}

const violenceCensor = censor.bind(null, 'violence');

const drugsCensor = censor.bind(null, 'drugs');
