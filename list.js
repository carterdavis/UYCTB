function titleCase(title) {
  return title.replace(/([A-Z]+)/g, " $1")
}

function snailCase(title) {
  return title.replace(/([A-Z]+)/g, "_$1").toLowerCase();
}

process.argv.forEach(function (val, index, array) {
  console.log("[" + val + ", '" + snailCase(val) + "', '" + titleCase(val) + "'],");
});
