/* eslint-disable camelcase */
const browserstack = require('browserstack-local');
const Nightwatch = require('nightwatch');

const bs_local = new browserstack.Local();
try {
  const bs_local_args = {
    key: 'yFzYpsCryCXuWGHwErmV', forceLocal: 'true', verbose: 'true', force: 'true',
  };

  // starts the Local instance with the required arguments
  bs_local.start(bs_local_args, (error) => {
    if (error) return console.log('local start error:', error);
    console.log('Started BrowserStack local');
    Nightwatch.cli((argv) => {
      const args = { ...argv, config: 'conf/local.conf.js' };
      Nightwatch.CliRunner(args)
        .setup(null, () => {
        // stop browserstack local after end of parallel tests
          bs_local.stop(() => { });
        })
        .runTests(() => {
          // stop browserstack local after end of single tests
          bs_local.stop(() => {});
        });
    });
  });
} catch (err) {
  console.log('BS local error:', err);
  bs_local.stop(() => {});
}
