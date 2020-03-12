nightwatch_config = {
  src_folders : [ "tests/single" ],
  page_objects_path: [ "tests/PageObjects" ],

  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': 'verb2',
        'browserstack.key': 'yFzYpsCryCXuWGHwErmV',
        'browserstack.local': true,
        'browser': 'chrome',
        'name': 'Bstack-[Nightwatch] Local Test'
      }
    }
  }
};

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;
