const fs = require('fs');

const URL_TO_TEST = 'https://google.com';

module.exports = {
  timerLength() {
    return {
      short: 1000,
      long: 3000,
    };
  },
  getUrl() {
    return URL_TO_TEST;
  },
  checkElementsExist(browser, elementSelectors) {
    elementSelectors.map(selector => browser.assert.elementPresent(selector));
  },
};
