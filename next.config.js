const path = require('path')
// add output
module.exports = {
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}