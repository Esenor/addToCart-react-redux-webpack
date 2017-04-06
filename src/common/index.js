module.exports = {
  wordHumanized: function (qty, singular, plural) {
    return (qty > 1) ? plural : singular
  }
}
