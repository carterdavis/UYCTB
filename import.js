process.argv.forEach(function (val, index, array) {
  console.log('import ' + val + " from './chapters/" + val + ".jsx';");
});
