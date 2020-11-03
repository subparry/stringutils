const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
class Strings {
  constructor(str) {
    this.str = str
  }

  static capitalize(str) {
    if (typeof str !== "string") {
      throw new Error("Argument must be of type string");
    } else if (str.length === 0) {
      return "";
    }
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }

  static randomize(size = 10) {
    const codes = [];
    for (let i = 0; i < size; i++) {
      codes.push(Math.floor(Math.random() * 10));
    }
    
    return codes.map((n) => (Math.random() > 0.5 ? LETTERS[n] : n)).join("");
  }
}

module.exports = Strings;

