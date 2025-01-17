//Run all tests in order
//Copyright WyattERP.org; See license in root of this package
// -----------------------------------------------------------------------------
const Child = require('child_process')
const { TestDB, DBAdmin } = require('./settings')

require('./schema.js')
require('./addr.js')
require('./comm.js')
//require('./language.js')

after('Delete sample database', function(done) {
  Child.exec(`dropdb -U ${DBAdmin} ${TestDB}`, done)
})
