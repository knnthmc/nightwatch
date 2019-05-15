
var HtmlReporter = require('nightwatch-html-reporter');

module.exports = {
    write : function(results, options, done) {
      var date = new Date();
      var dateTime = (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear() + "_" + date.getHours() + " " + date.getMinutes();
      var reporter = new HtmlReporter({
        openBrowser: true,
        reportsDirectory: __dirname + '/reports',
        reportFilename: 'GeneratedReport_' + dateTime,
        separateReportPerSuite: false,
        uniqueFilename: false,
        themeName: 'default',
      //  customTheme: 'relative/path/to/theme.pug',
      passed: results.passed,
      failed: results.failed,
      errors: results.errors,
      skipped: results.skipped,
      tests: Object.keys(results.modules).length,
      module: results.modules,
      errormsg: results.errmessages
    });

        reporter.fn(results, done);
      }
};
