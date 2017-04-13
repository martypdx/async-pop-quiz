function takeFive(start, callback) {
  setTimeout(() => {
    console.log('five seconds up');
    callback();
  }, 5000);
}

module.exports = takeFive;