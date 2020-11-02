const LETTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
class Strings {
  constructor(str) {
    this.str = str
  }

  static capitalize(str) {
    return `${str[0].toUpperCase()}${str.slice(1)}`
  }

  static randomize(size = 10) {
    const randInt = Math.floor(Math.random() * 10 ** size)
    const codes = `${randInt}`.split('')
    return codes
      .map((n) => (Math.random() > 0.5 ? LETTERS[parseInt(n)] : n))
      .join('')
  }
}

export default Strings

