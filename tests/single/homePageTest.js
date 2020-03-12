module.exports = {
  'Valid search input with click': function(browser) {
    const landingPage = browser.page.homePage()
    landingPage.navigate()
      .waitForElementVisible('body', 1000)
      .inputSearchTerm('Node.js')
      .clickSubmit()
      .pause(1000)
      .assert.title('Node.js - Wikipedia')
  },
  'Valid search input with enter key press': function(browser) {
    const landingPage = browser.page.homePage()
    landingPage.navigate()
      .waitForElementVisible('body', 1000)
      .inputSearchTerm(['Node.js', browser.Keys.ENTER])
      .pause(1000)
      .assert.title('Node.js - Wikipedia')
  },
  'Invalid search input with click': function(browser) {
    const landingPage = browser.page.homePage()
    landingPage.navigate()
      .waitForElementVisible('body', 1000)
      .inputSearchTerm('sflkjasdl;fjk')
      .clickSubmit()
      .pause(1000)
      .assert.title('sflkjasdl;fjk - Search results - Wikipedia')
  },
  'End': function(browser) {
    browser.end();
  },
}
