const chromedriver = require("chromedriver");
module.exports = (function(settings) {
  settings.test_workers = false;
  settings.webdriver.server_path = chromedriver.path;
  return settings;
  /*
  * Use this for BrowserStack and running multiple browsers in parallel  
  */

  // nightwatch_config.common_capabilities['browserstack.user'] = process.env.BROWSER_STACK_USER;
  // nightwatch_config.common_capabilities['browserstack.key'] = process.env.BROWSER_STACK_KEY;
  //
  // // For running multiple browsers at the same time in BrowserStack
  // nightwatch_config.test_workers = false;
  //
  // for(var i in nightwatch_config.test_settings){
  //   var config = nightwatch_config.test_settings[i];
  //   config['selenium_host'] = nightwatch_config.selenium.host;
  //   config['selenium_port'] = nightwatch_config.selenium.port;
  //   config['desiredCapabilities'] = config['desiredCapabilities'] || {};
  //   for(var j in nightwatch_config.common_capabilities){
  //     config['desiredCapabilities'][j] = config['desiredCapabilities'][j] || nightwatch_config.common_capabilities[j];
  //   }
  // }

})(require('./nightwatch.base.json'));
