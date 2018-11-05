const util = require('./util');

module.exports = {
  'can load the homepage and see the important elements': function(browser) {
    browser.url(util.getUrl()).waitForElementVisible('body', util.timerLength().long);

    const elements = ['body'];

    util.checkElementsExist(browser, elements);

    browser.end();
  },
};
