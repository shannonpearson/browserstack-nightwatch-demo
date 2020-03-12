const searchCommands = {
  clickSubmit: function() {
    return this
    .click('@submitButton');
  },
  inputSearchTerm: function(value) {
    return this
      .setValue('@searchBox', value);
  },
};

module.exports = {
  url: 'https://wikipedia.org',
  commands: [searchCommands],
  elements: {
    searchBox: {
      selector: 'input[name=search]'
    },
    submitButton: {
      selector: 'button[type=submit]'
    }
  },
}
