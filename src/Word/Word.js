let words = ["programming","javascript","java","cpp"]


let getRandomWord = () =>
  words[Math.floor(Math.random() * words.length)];

export {getRandomWord};
