var url = require('readline-sync').question('Enter URL to Test JS Challenge:\n');

module.exports = {

// ------- Challenge 1  -------
// Checking if email field is hidden by default, visible after the checkbox is checked, and hidden again when checkbox is unchecked. Test is advanced to the next challenge by clicking the button, which should direct to challenge 2 page.

  'JS Challenge Integrity Check' : function (browser) {
      browser.url(url);
      browser.waitForElementVisible('body');
      browser.verify.visible('body');
      browser.expect.element('h1').to.be.present
      browser.expect.element('h1').text.to.equal('Challenge One');
      browser.expect.element('form').to.be.present
    },

    'JS Challenge 1 Email field hidden by default' : function (browser) {
      browser.verify.hidden('#emailDiv');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 1 Checkbox unchecked by default' : function (browser) {
      browser.expect.element('input[type=checkbox]').to.not.be.selected
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 1 Email field visible on checkbox check' : function (browser) {
      browser.click('input[type=checkbox]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.visible('#emailDiv');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 1 Email field hidden on uncheck' : function (browser) {
      browser.click('input[type=checkbox]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.hidden('#emailDiv');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 1 Submission button works' : function (browser) {
      browser.click('input[type=submit]');
      browser.pause(2000); // pause for page load before next assert
      browser.verify.urlContains('ch2.html');
      },

// ------- Challenge 2  -------
// Checking if text fields and checkboxes are empty by default. When text is entered in billing field and the checkbox is checked that the text is also in the shipping field and cannot be edited.  When checkbox is unchecked, text is removed from shipping field and it can be edited. Test is advanced to the next challenge by clicking the button, which should direct to challenge 3 page.

    'JS Challenge 2 Checkbox unchecked by default' : function (browser) {
      browser.expect.element('input[type=checkbox]').to.not.be.selected
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 2 Billing and shipping fields empty by default' : function (browser) {
      browser.verify.value('#billing', '');
      browser.verify.value('#shipping', '');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 2 Check that entered value is copied to shipping on checkbox check and is disabled' : function (browser) {
      browser.setValue('#billing', '123 Sample Address');
      browser.pause(2000); // pauses added for readability while test is running
      browser.click('input[type=checkbox]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.value('#shipping', '123 Sample Address');
      browser.pause(2000); // pauses added for readability while test is running
      browser.expect.element('#shipping').to.have.attribute('disabled');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 2 Check that entered value is removed from shipping on checkbox uncheck and disabled is removed' : function (browser) {
      browser.click('input[type=checkbox]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.value('#shipping', '');
      browser.pause(2000); // pauses added for readability while test is running
      browser.expect.element('#shipping').to.not.have.attribute('disabled');
      },

    'JS Challenge 2 Submission button works' : function (browser) {
      browser.click('input[type=submit]');
      browser.pause(2000); // pause for page load before next assert
      browser.verify.urlContains('ch3.html');
      },

// ------- Challenge 3  -------
// Checking that radio buttons are unchecked by default and error triggers when clicking submit while no selections are made. Checks that only one selection can be made at a time. Test is advanced to the next challenge by clicking the button, which should direct to challenge 4 page.

    'JS Challenge 3 Radio buttons unselected by default' : function (browser) {
      browser.expect.element('input[id=straw]').to.not.be.selected
      browser.expect.element('input[id=blue]').to.not.be.selected
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 3 Alert displays when submit is clicked without selection' : function (browser) {
      browser.click('input[type=submit]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.acceptAlert();
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 3 Only one radio can be selected' : function (browser) {
      browser.click('input[id=straw]');
      browser.expect.element('input[id=blue]').to.not.be.selected
      browser.pause(2000); // pauses added for readability while test is running
      browser.click('input[id=blue]');
      browser.expect.element('input[id=straw]').to.not.be.selected
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 3 Submission button works' : function (browser) {
      browser.click('input[type=submit]');
      browser.pause(2000); // pause for page load before next assert
      browser.verify.urlContains('ch4.html');
      },

// ------- Challenge 4  -------
// Checking that all text fields are empty and error messages are hidden by default. Checks that error messages appear together and independently depending on what text block is filled, and only submits when both fields are filled out. Test is advanced to the next challenge by clicking the button, which should direct to challenge 5 page.

    'JS Challenge 4 Text boxes empty and error messages hidden by default' : function (browser) {
      browser.verify.cssProperty('#nameMsg', 'display', 'none');
      browser.verify.cssProperty('#addressMsg', 'display', 'none');
      browser.verify.value('#fullname', '');
      browser.verify.value('#streetaddr', '');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 4 Both error messages appear if both fields are empty' : function (browser) {
      browser.click('input[type=submit]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.cssProperty('#nameMsg', 'display', 'block');
      browser.verify.cssProperty('#addressMsg', 'display', 'block');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 4 Only name error appears if address is entered' : function (browser) {
      browser.setValue('#streetaddr', '123 Sample Address');
      browser.pause(2000); // pauses added for readability while test is running
      browser.click('input[type=submit]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.cssProperty('#nameMsg', 'display', 'block');
      browser.verify.cssProperty('#addressMsg', 'display', 'none');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 4 Only address error appears if name is entered' : function (browser) {
      browser.clearValue('#streetaddr');
      browser.setValue('#fullname', 'John Smith');
      browser.pause(2000); // pauses added for readability while test is running
      browser.click('input[type=submit]');
      browser.pause(2000); // pauses added for readability while test is running
      browser.verify.cssProperty('#nameMsg', 'display', 'none');
      browser.verify.cssProperty('#addressMsg', 'display', 'block');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 4 Submission button works' : function (browser) {
      browser.setValue('#streetaddr', '123 Sample Address');
      browser.click('input[type=submit]');
      browser.pause(2000); // pause for page load before next assert
      browser.verify.urlContains('ch5.html');
      },

// ------- Challenge 5  -------
// Checking that the default image window has a purple background and default text. Tabs over each thumbnail and checks that the background image and container text changes appropriately and reverts back to default when no thumbail is focused. Repeats the test using mouseover and mouseout.

    'JS Challenge 5 Image element is set to default formatting' : function (browser) {
      browser.verify.cssProperty('#image', 'background-image', 'none');
      browser.verify.containsText('#image', 'Hover over an image below.');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 5 tab first image check' : function (browser) {
      browser.keys('\uE004', function(press){
        browser.pause(2000); // pauses added for readability while test is running
        browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg")');
        browser.verify.containsText('#image', 'Styling with a Bandana');
      });
      },

    'JS Challenge 5 tab second image check' : function (browser) {
      browser.keys('\uE004', function(press){
        browser.pause(2000); // pauses added for readability while test is running
        browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG")');
        browser.verify.containsText('#image', 'With My Boy');
      });
      },

    'JS Challenge 5 tab third image check' : function (browser) {
      browser.keys('\uE004', function(press){
        browser.pause(2000); // pauses added for readability while test is running
        browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg")');
        browser.verify.containsText('#image', 'Young Puppy');
      });
      },

    'JS Challenge 5 tab out image check' : function (browser) {
      browser.keys('\uE004', function(press){
        browser.pause(2000); // pauses added for readability while test is running
        browser.expect.element('#image').to.have.css('background-image').which.contains('ch5.html');
        browser.verify.containsText('#image', 'Hover/Tab over an image below.');
      });
      },

    'JS Challenge 5 mouseOver first image check' : function (browser) {
      browser.moveToElement('#thumbnails img:nth-child(1)', 0, 0);
      browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg")');
      browser.verify.containsText('#image', 'Styling with a Bandana');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 5 mouseOut first image default check' : function (browser) {
      browser.moveToElement('body', 0, 0);
      browser.expect.element('#image').to.have.css('background-image').which.contains('ch5.html');
      browser.verify.containsText('#image', 'Hover/Tab over an image below.');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 5 mouseOver second image check' : function (browser) {
      browser.moveToElement('#thumbnails img:nth-child(2)', 0, 0);
      browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon2.JPG")');
      browser.verify.containsText('#image', 'With My Boy');
      browser.pause(2000); // pauses added for readability while test is running
      },

    'JS Challenge 5 mouseOut second image default check' : function (browser) {
      browser.moveToElement('body', 0, 0);
      browser.expect.element('#image').to.have.css('background-image').which.contains('ch5.html');
      browser.verify.containsText('#image', 'Hover/Tab over an image below.');
      browser.pause(2000); // pauses added for readability while test is running
      },

      'JS Challenge 5 mouseOver third image check' : function (browser) {
        browser.moveToElement('#thumbnails img:nth-child(3)', 0, 0);
        browser.verify.cssProperty('#image', 'background-image', 'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon3.jpg")');
        browser.verify.containsText('#image', 'Young Puppy');
        browser.pause(2000); // pauses added for readability while test is running
        },

      'JS Challenge 5 mouseOut third image default check' : function (browser) {
        browser.moveToElement('body', 0, 0);
        browser.expect.element('#image').to.have.css('background-image').which.contains('ch5.html');
        browser.verify.containsText('#image', 'Hover/Tab over an image below.');
        browser.pause(2000); // pauses added for readability while test is running
        browser.end();
      }

}
