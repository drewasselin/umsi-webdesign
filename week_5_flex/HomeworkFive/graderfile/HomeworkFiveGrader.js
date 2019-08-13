var url = require('readline-sync').question('Enter URL to Test HomeworkFive:\n');
var alphanum = /[a-zA-Z]/;

module.exports = {
// ------- Baseline check for the test. -------

  'Homework 5 Check' : function (browser) {
      browser.url(url);
      browser.waitForElementVisible('body');
      browser.verify.visible('body');
      browser.verify.visible('h1');
      browser.verify.visible('.skipcont'); // class for skip to content div
      browser.verify.visible('.navi'); // class for navigation
      browser.verify.visible('footer');
    },


// ------- HTML integrity check -------

    /* Check that h1 exists only once */
    'HTML integrity check: Only 1 h1 exists' : function (browser) {
        browser.expect.elements('h1').count.to.equal(1);
    },

    /* Check that h2 exists 3 times*/
    'HTML integrity check: Only 3 h2 exist' : function (browser) {
        browser.expect.elements('h2').count.to.equal(2);
    },

    /* No in-line formatting for all major HTML elements */
    'HTML integrity check: No in-line formatting' : function (browser) {
        browser.verify.attributeEquals('body', 'style', '', 'body element does not have in-line styles');
        browser.verify.attributeEquals('.navi', 'style', '', 'navi div does not have in-line styles');
        browser.verify.attributeEquals('.nav-links', 'style', '', 'navi-links div does not have in-line styles');
        browser.verify.attributeEquals('.pricing', 'style', '', 'pricing div does not have in-line styles');
        browser.verify.attributeEquals('#low', 'style', '', 'low id does not have in-line styles');
        browser.verify.attributeEquals('#mid', 'style', '', 'mid id does not have in-line styles');
        browser.verify.attributeEquals('#high', 'style', '', 'high id does not have in-line styles');
        browser.verify.attributeEquals('.gallery', 'style', '', 'gallery div does not have in-line styles');
        browser.verify.attributeEquals('footer', 'style', '', 'footer div does not have in-line styles');
    },


// ------- Nav Flex checks -------

    /* navi element has flex property */
    'Homework 5: navigation has flex properties for mobile' : function (browser) {
        browser.windowSize('current', 700, 1000, function(result){});
        browser.verify.cssProperty('.navi', 'display','flex', 'div with navi class has display type of flex');
        browser.verify.cssProperty('.navi', 'flex-direction', 'column', 'navigation elements display vertically');
        browser.verify.cssProperty('.navi', 'align-items', 'center', 'navigation elements centered');
        browser.verify.cssProperty('.nav-links', 'display', 'flex', 'nav-links class has display type of flex');
        browser.verify.cssProperty('.nav-links', 'flex-direction', 'column', 'nav-links list items display verticallyß');
    },

    /* navigation has proper formatting */
    'Homework 5: navigation has proper formatting' : function (browser) {
      browser.verify.cssProperty('.navi', 'border-bottom', '3px solid rgb(80, 199, 199)', 'navigation has border on bottom only');
      browser.verify.cssProperty('.nav-links', 'list-style-type', 'none', 'nav-links list does not have bullets');
      browser.verify.cssProperty('.nav-links', 'color', 'rgba(0, 0, 0, 1)', 'nav-links list is black by default');
      browser.verify.cssProperty('.nav-item', 'text-decoration', 'none solid rgb(0, 0, 0)', 'navigation item does not have underline by default');
      browser.moveToElement('.nav-links li:first-child', 0, 0, function(){
          browser.pause(2000) // moves the mouse over the first link in navigation list and waits 2 seconds - next test checks if text decoration is blue and underlined
        });
      browser.verify.cssProperty('.nav-links li:first-child a', 'color', 'rgba(80, 199, 199, 1)', 'navigation item is blue on hover and focus');
      browser.verify.cssProperty('.nav-links li:first-child a', 'text-decoration', 'underline dotted rgb(80, 199, 199)', 'nav-links list has dotted underline on hover and focus');
    },

    /* navi element has flex property */
    'Homework 5: navigation has flex properties for desktop' : function (browser) {
        browser.windowSize('current', 900, 1000, function(result){});
        browser.verify.cssProperty('.navi', 'display','flex', 'div with navi class has display type of flex');
        browser.verify.cssProperty('.navi', 'flex-direction', 'row', 'navigation elements display horizontally');
        browser.verify.cssProperty('.navi', 'align-items', 'center', 'navigation elements centered');
        browser.verify.cssProperty('.navi', 'justify-content', 'space-between', 'navigation elements have space between them');
        browser.verify.cssProperty('.nav-links', 'display', 'flex', 'nav-links class has display type of flex');
        browser.verify.cssProperty('.nav-links', 'flex-direction', 'row', 'nav-links list items display horizontally');
    },

// ------- Skip to Content checks -------

    /* skip to content*/
    'Homework 5: skip to content formatting' : function (browser) {
      browser.verify.cssProperty('.skipcont a', 'top','-40px', 'skip to content is set above the margin of the page by default');
      browser.verify.cssProperty('.skipcont a', 'position','absolute', 'skip to content has absolute positioning');
      browser.verify.cssProperty('.skipcont a', 'z-index','1', 'skip to content will always appear on top');
      browser.keys('\uE004', function(press){
        browser.pause(2000); // press the tab key to focus on skip
        browser.verify.cssProperty('.skipcont a', 'top', '0px', 'skip to content will transition into view on single tab press')
        browser.verify.cssProperty('.skipcont a', 'border', '2px solid rgb(0, 0, 0)', 'skip to content has black border on focus')
      });
    },

// ------- Pricing Flex checks -------

    /* pricing element has flex property */
    'Homework 5: pricing has flex properties for mobile' : function (browser) {
        browser.windowSize('current', 700, 1000, function(result){});
        browser.verify.cssProperty('.pricing', 'min-height', '500px', 'pricing element minimum height of 500px');
        browser.verify.cssProperty('.pricing', 'display','flex', 'div with pricing class has display type of flex');
        browser.verify.cssProperty('.pricing', 'flex-wrap', 'wrap', 'items within pricing element should wrap');
        browser.verify.cssProperty('.pricing', 'justify-content', 'center', 'items within pricing element should be centered horizontally')
        browser.verify.cssProperty('.pricing', 'align-items', 'center', 'items within pricing element should be centered vertically');
        browser.verify.cssProperty('.card', 'flex-basis', '400px', 'elements with the card class have an initial size of 400px');
    },

    /* pricing has proper formatting */
    'Homework 5: pricing has proper formatting' : function (browser) {
        browser.verify.cssProperty('.card > header', 'background-color', 'rgba(80, 199, 199, 1)', 'card header elements have a blue background');
        browser.verify.cssProperty('.card > ul', 'list-style-type', 'none', 'card ul elements do not have bullets');
        browser.verify.cssProperty('.card button', 'height', '40px', 'card button elements should have a height of 40px');
        browser.verify.cssProperty('.card button', 'background-color', 'rgba(69, 173, 173, 1)', 'card button elements should be blue');
        browser.verify.cssProperty('.card button', 'color', 'rgba(255, 255, 255, 1)', 'card button element text should be white');
        browser.verify.cssProperty('.card--big', 'transform', 'none', 'card with card--big class should be default size');
    },

    /* pricing element has flex property */
    'Homework 5: pricing has flex properties for desktop' : function (browser) {
        browser.windowSize('current', 900, 1000, function(result){});
        browser.verify.cssProperty('.pricing', 'min-height', '500px', 'pricing element minimum height of 500px');
        browser.verify.cssProperty('.pricing', 'display','flex', 'div with pricing class has display type of flex');
        browser.verify.cssProperty('.pricing', 'flex-wrap', 'wrap', 'items within pricing element should wrap');
        browser.verify.cssProperty('.pricing', 'justify-content', 'center', 'items within pricing element should be centered horizontally')
        browser.verify.cssProperty('.pricing', 'align-items', 'center', 'items within pricing element should be centered vertically');
        browser.verify.cssProperty('.card', 'flex-basis', '250px', 'elements with the card class have an initial size of 400px');
        browser.verify.cssProperty('.card--big', 'transform', 'matrix(1.12, 0, 0, 1, 0, 0)', 'card with card--big class should be 1.12 times larger than the default');
    },

  // ------- Gallery Flex checks -------

      /* gallery element has flex property */
      'Homework 5: gallery has flex properties' : function (browser) {
          browser.windowSize('current', 700, 1000, function(result){});
          browser.verify.cssProperty('.gallery', 'min-height', '500px', 'div with gallery class minimum height of 500px');
          browser.verify.cssProperty('.gallery', 'display','flex', 'div with gallery class has display type of flex');
          browser.verify.cssProperty('.gallery', 'justify-content', 'center', 'items within gallery element should be centered horizontally')
          browser.verify.cssProperty('.gallery', 'align-items', 'flex-start', 'items within gallery element should be aligned at the start of the parent element');
      },

      /* gallery images are formatted properly */
      'Homework 5: gallery images have proper formatting' : function (browser) {
        //check image 1
          browser.verify.cssProperty('#image1', 'border', '10px solid rgb(80, 199, 199)', 'first image has a 10px blue border');
          browser.verify.cssProperty('#image1', 'width', '300px', 'first image has a width of 300px');
          browser.expect.element('#image1').to.have.attribute('src', 'first image is properly stored in the images folder').which.contains('images');
          browser.expect.element('#image1').to.have.attribute('alt', 'first image has alt text').which.matches(alphanum);
          //check image 2
          browser.verify.cssProperty('#image2', 'border', '10px solid rgb(80, 199, 199)', 'second image has a 10px blue border');
          browser.verify.cssProperty('#image2', 'width', '300px', 'second image has a width of 300px');
          browser.expect.element('#image2').to.have.attribute('src', 'second image is properly stored in the images folder').which.contains('images/');
          browser.expect.element('#image2').to.have.attribute('alt', 'second image has alt text').which.matches(alphanum);
          //check image 3
          browser.verify.cssProperty('#image3', 'border', '10px solid rgb(80, 199, 199)', 'third image has a 10px blue border');
          browser.verify.cssProperty('#image3', 'width', '300px', 'third image has a width of 300px');
          browser.expect.element('#image3').to.have.attribute('src', 'third image is properly stored in the images folder').which.contains('images/');
          browser.expect.element('#image3').to.have.attribute('alt', 'third image has alt text').which.matches(alphanum);
          //check image 4
          browser.verify.cssProperty('#image4', 'border', '10px solid rgb(80, 199, 199)', 'fourth image has a 10px blue border');
          browser.verify.cssProperty('#image4', 'width', '300px', 'fourth image has a width of 300px');
          browser.expect.element('#image4').to.have.attribute('src', 'fourth image is properly stored in the images folder').which.contains('images/');
          browser.expect.element('#image4').to.have.attribute('alt', 'fourth image has alt text').which.matches(alphanum);
          //check image 5
          browser.verify.cssProperty('#image5', 'border', '10px solid rgb(80, 199, 199)', 'fifth image has a 10px blue border');
          browser.verify.cssProperty('#image5', 'width', '300px', 'fifth image has a width of 300px');
          browser.expect.element('#image5').to.have.attribute('src', 'fifth image is properly stored in the images folder').which.contains('images/');
          browser.expect.element('#image5').to.have.attribute('alt', 'fifth image has alt text').which.matches(alphanum);
          browser.end();
      },

}
