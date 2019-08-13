var url = require('readline-sync').question('Enter URL to Test HomeworkThree:\n');

module.exports = {
// ------- Baseline check for the test. -------

  'Homework 3 Check' : function (browser) {
      browser.url(url);
      browser.waitForElementVisible('body');
      browser.verify.visible('body');
      browser.verify.visible('h1');
      browser.verify.visible('table');
      browser.verify.visible('p');
      browser.verify.visible('a');
      browser.verify.visible('footer');
    },


// ------- Check that source HTML has not been changed - Should all pass by default! -------
    /* Check that h1 exists only once */
    'Homework 3: Only 1 h1 exists' : function (browser) {
        browser.expect.elements('h1').count.to.equal(1);
    },

    /* Check that th exists 17 times*/
    'Homework 3: Only 17 th exist' : function (browser) {
        browser.expect.elements('th').count.to.equal(17);
    },

    /* No in-line formatting for all major HTML elements */
    'Homework 3: No in-line formatting' : function (browser) {
        browser.verify.attributeEquals('body', 'style', '', 'body element does not have in-line styles');
        browser.verify.attributeEquals('table', 'style', '', 'table element does not have in-line styles');
        browser.verify.attributeEquals('thead', 'style', '', 'thead element does not have in-line styles');
        browser.verify.attributeEquals('tbody', 'style', '', 'tbody element does not have in-line styles');
        browser.verify.attributeEquals('main', 'style', '', 'main element does not have in-line styles');
        browser.verify.attributeEquals('p', 'style', '', 'p element does not have in-line styles');
        browser.verify.attributeEquals('footer', 'style', '', 'footer element does not have in-line styles');
    },




// ------- Check that new CSS meets spec sheet -------

    /* Check that the right number of CSS stylesheet links exist */
    'Homework 3: Correct number of linked stylesheets' : function (browser) {
        browser.expect.elements('link').count.to.equal(3); // this checks that each should have backup css, written css and google font only
    },

    /* Check that google font is added properly */
    'Homework 3: Google font' : function (browser) {
        browser.verify.cssProperty('body', 'font-family','Quicksand, sans-serif', 'body text uses font family Quicksand and fallback of sans-serif');
        browser.verify.cssProperty('body', 'font-size', '18px', 'body font size is set to 18px')
        browser.verify.cssProperty('body', 'color', 'rgba(0, 0, 0, 1)', 'text color is set to black')
    },

    /* Check that background image is formatted properly */
    'Homework 3: Background image' : function (browser) {
      browser.verify.cssProperty('body', 'background-repeat', 'no-repeat', 'background image does not repeat');
      browser.verify.cssProperty('body', 'background-color', 'rgba(221, 221, 221, 1)', 'background color is set as fallback');
      browser.expect.element('body').to.have.css('background-image', 'background is set to image').which.contains('images/pidgeon-background.jpg');
    },

    /* Check that h1 element is formatted properly */
    'Homework 3: h1 formatting' : function (browser) {
      browser.verify.cssProperty('h1', 'color', 'rgba(193, 34, 88, 1)', 'h1 color is set to dark red');
      browser.verify.cssProperty('h1', 'font-size', '36px', 'h1 text is the correct size');
      browser.verify.cssProperty('h1', 'line-height', '54px', 'h1 line height is correct size');
    },

    /* Check that p elements are formatted properly */
    'Homework 3: p formatting' : function (browser) {
      browser.verify.cssProperty('p', 'padding-top', '15px', 'there is a 15px padding on the top of p elements');
      browser.verify.cssProperty('p', 'font-size', '18px', 'p text is the correct size');
    },

    /* Check that a elements are formatted properly */
    'Homework 3: a formatting' : function (browser) {
      browser.verify.cssProperty('a', 'color', 'rgba(193, 34, 88, 1)', 'link text is the correct color');
      browser.expect.element('a').to.have.css('text-decoration', 'link text is underlined').which.contains('underline');
    },

    /* Check that table is formatted properly */
    'Homework 3: table formatting' : function (browser) {
      browser.verify.cssProperty('table', 'border-collapse', 'separate', 'table borders are calculated separately so only outiside corners are rounded');
      browser.verify.cssProperty('table', 'border-radius', '10px', 'table border has rounded corners');
      browser.verify.cssProperty('table', 'border', '2px solid rgb(0, 0, 0)', 'table has a 2px solid black border');
      browser.verify.cssProperty('td', 'padding', '15px', 'all td elements have 15px padding');
    },

    /* Check that table headers are formatted properly */
    'Homework 3: table row header and column header formatting' : function (browser) {
      browser.verify.cssProperty('th.colhead', 'background-color', 'rgba(126, 8, 48, 1)', 'column header cells have correct background color');
      browser.verify.cssProperty('th.colhead', 'color', 'rgba(255, 255, 255, 1)', 'column header cells text is white');
      browser.verify.cssProperty('th.colhead', 'padding', '10px', 'column header cell has 10px padding');
      browser.verify.cssProperty('th.colhead', 'vertical-align', 'middle', 'column header cells text appears in the middle of the cell');
      browser.verify.cssProperty('th.colhead', 'min-width', '150px', 'column header cells have a minimum width of 150px');
      browser.verify.cssProperty('th.colhead', 'text-transform', 'uppercase', 'column header cell text is all uppercase');
      browser.verify.cssProperty('th.rowhead', 'border-top', '2px solid rgb(0, 0, 0)', 'row header cell border matches td borders');
    },

    /* Check that table rows are formatted properly */
    'Homework 3: table row formatting' : function (browser) {
      browser.verify.cssProperty('td', 'text-align', 'center', 'text in cells is centered');
      browser.verify.cssProperty('td', 'border-top', '2px solid rgb(0, 0, 0)', 'rows have 2px solid black top borders');
    },

    /* Check that table rows are formatted properly */
    'Homework 3: table row hover and striping effect' : function (browser) {
      browser.verify.cssProperty('tr:nth-child(even)', 'background-color', 'rgba(221, 221, 221, 1)', 'every even row has a grey background');
      browser.moveToElement('tbody tr:first-child', 0, 0, function(){
          browser.pause(2000) // moves the mouse over the first row in tbody and waits 2 seconds - next test checks background color of hovered row
        });
      browser.verify.cssProperty('tbody tr:first-child', 'background-color', 'rgba(250, 185, 207, 1)', 'row first background color changes on hover');
    },

    /* Check that table corners are formatted properly */
    'Homework 3: corner table cells have rounded corners' : function (browser) {
      browser.verify.cssProperty('thead tr:first-child th:first-child', 'border-top-left-radius', '10px', 'top left corner of top left cell is rounded');
      browser.verify.cssProperty('thead tr:last-child th:last-child', 'border-top-right-radius', '10px', 'top right corner of top right cell is rounded');
      browser.verify.cssProperty('tbody tr:last-child th:first-child', 'border-bottom-left-radius', '10px', 'bottom left corner of bottom left cell is rounded');
      browser.verify.cssProperty('tbody tr:last-child td:last-child', 'border-bottom-right-radius', '10px', 'bottom right corner of bottom right cell is rounded');
    },

    /* Check that table is formatted properly */
    'Homework 3: footer formatting' : function (browser) {
      browser.verify.cssProperty('footer', 'position', 'fixed', 'footer element has a fixed position');
      browser.verify.cssProperty('footer', 'left', '0px', 'footer element has a left position of 0px');
      browser.verify.cssProperty('footer', 'bottom', '0px', 'footer element has a bottom position of 0px');
      browser.verify.cssProperty('footer', 'height', '60px', 'footer element is always 60px tall');
      browser.verify.cssProperty('footer', 'color', 'rgba(255, 255, 255, 1)', 'footer text is white');
      browser.verify.cssProperty('footer', 'background-color', 'rgba(0, 0, 0, 1)', 'footer backround color is black');
    },

    /* Check that focused elements are formatted properly */
    'Homework 3: focus formatting' : function (browser) {
        browser.keys('\uE004', function(press){
          browser.pause(2000); // press the tab key to focus on the link
          browser.verify.cssProperty('a', 'border', '1px solid rgb(255, 0, 0)', 'focused elements have a 1px red border')
        });
        browser.end();
    }

}
