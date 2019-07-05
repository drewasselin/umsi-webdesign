var url = require('readline-sync').question('Enter URL to Test HomeworkTwo:\n');

module.exports = {
// ------- Baseline check for the test. -------

  'Homework 2 Check' : function (browser) {
      browser.url(url);
      browser.waitForElementVisible('body');
      browser.verify.visible('body');
      browser.verify.visible('h1');
      browser.verify.visible('p');
      browser.verify.visible('img');
    },


// ------- Check that source HTML has not been changed - Should all pass by default! -------
    /* Check that h1 exists only once */
    'Homework 2: Only 1 h1 exists' : function (browser) {
        browser.expect.elements('h1').count.to.equal(1);
    },

    /* Check that h2 exists 4 times*/
    'Homework 2: Only 4 h2 exists' : function (browser) {
        browser.expect.elements('h2').count.to.equal(5);
    },

    /* No in-line formatting for h2 */
    'Homework 2: No inline formatting h2' : function (browser) {
        browser.verify.attributeEquals('#blue h2', 'style', '', '#blue h2 element does not have in-line styles');
        browser.verify.attributeEquals('#red h2', 'style', '', '#red h2 element does not have in-line styles');
        browser.verify.attributeEquals('#yellow h2', 'style', '', '#yellow h2 element does not have in-line styles');
        browser.verify.attributeEquals('#green h2', 'style', '', '#green h2 element does not have in-line styles');
    },

    /* No in-line formatting for p */
    'Homework 2: No inline formatting p' : function (browser) {
        browser.verify.attributeEquals('#blue p', 'style', '', '#blue p element does not have in-line styles');
        browser.verify.attributeEquals('#red p', 'style', '', '#red p element does not have in-line styles');
        browser.verify.attributeEquals('#yellow p', 'style', '', '#yellow p element does not have in-line styles');
        browser.verify.attributeEquals('#green p', 'style', '', '#green p element does not have in-line styles');
    },

    /* No in-line formatting for img */
    'Homework 2: No inline formatting images' : function (browser) {
        browser.verify.attributeEquals('img', 'style', '', 'image does not have in-line styles');
    },





// ------- Check that new CSS meets spec sheet -------
    /* Check that body is formatted properly */
    'Homework 2: Body CSS formatting' : function (browser) {
        //browser.expect.elements('body').to.have.css('font-family').which.contains('Lucida Grande');
        browser.verify.cssProperty('body','font-family','"Lucida Grande", sans-serif', 'body text uses font family Lucida Grande and fallback of sans-serif');
        browser.verify.cssProperty('body','color', 'rgba(255, 255, 255, 1)', 'body text is white');
        browser.verify.cssProperty('body', 'background-color', 'rgba(0, 0, 0, 1)', 'body background color is black');
        browser.verify.cssProperty('#intro h2', 'font-size', '32px', 'all h2 elements are 32px');
        browser.verify.cssProperty('#intro h2', 'text-shadow', 'rgb(0, 0, 0) 4px 4px 2px', 'all h2 elements have text drop-shadow');
        browser.verify.cssProperty('#intro p ', 'font-size', '16px', 'all p elelents are 16px');
        browser.verify.cssProperty('#intro p ', 'padding', '15px 0px 0px', 'all p elelents have 15px padding');
    },

    /* Check that h1 is formatted properly*/
    'Homework 2: h1 formatting' : function (browser) {
        //browser.expect.elements('h1').to.have.css('font-size').which.equals('64px');
        browser.verify.cssProperty('h1', 'font-size', '64px', 'h1 element has a font size of 64px');
        browser.verify.cssProperty('h1', 'text-align', 'center', 'h1 element is center aligned');
    },

    /*Check that image is formatted properly %*/
    'Homework 2: Image formatting' : function (browser) {
        //browser.expect.elements('img').to.have.css('width').which.equals('550px');
        browser.verify.cssProperty('img', 'display', 'block', 'image is a block element');
        browser.verify.cssProperty('img', 'width', '550px', 'image is 550px wide');
        browser.verify.cssProperty('img', 'height', '442.625px', 'image height is automatically set');
        //browser.verify.cssProperty('img', 'margin', 'auto', 'margin is set to center the image'); //browser convernts to px so this can't be accurately calculated enough to test against
    },

    /* Check that red div is formatted properly */
    'Homework 2: Red div formatting' : function (browser) {
        browser.verify.cssProperty('#red', 'background-color', 'rgba(255, 0, 0, 1)', '#red div background color is red');
        browser.verify.cssProperty('#red', 'padding', '30px', '#red div has a padding of 30px');
        browser.verify.cssProperty('#red', 'text-align', 'right', 'text is right-aligned');
        browser.verify.cssProperty('#red', 'min-height', '100px', '#red div has a minimum height of 100px');
    },

    /* Check that blue div is formatted properly */
    'Homework 2: Blue div formatting' : function (browser) {
        browser.verify.cssProperty('#blue', 'background-color', 'rgba(0, 0, 255, 1)', '#blue div background color is blue');
        browser.verify.cssProperty('#blue', 'padding', '30px', '#blue div has a padding of 30px');
        browser.verify.cssProperty('#blue', 'min-height', '100px', '#blue div has a minimum height of 100px');
    },

    /* Check that yellow div is formatted properly */
    'Homework 2: Yellow div formatting' : function (browser) {
        browser.verify.cssProperty('#yellow', 'background-color', 'rgba(255, 255, 0, 1)', '#yellow div background color is yellow');
        browser.verify.cssProperty('#yellow', 'padding', '30px', '#yellow div has a padding of 30px');
        browser.verify.cssProperty('#yellow', 'text-align', 'right', 'text is right-aligned');
        browser.verify.cssProperty('#yellow', 'min-height', '100px', '#yellow div has a minimum height of 100px');
        browser.verify.cssProperty('#yellow h2', 'color', 'rgba(0, 0, 0, 1)', 'h2 elements in yellow div are black');
        browser.verify.cssProperty('#yellow h2', 'text-shadow', 'rgb(128, 128, 128) 4px 4px 2px', 'h2 elements in yellow div have a grey drop-shadow');
        browser.verify.cssProperty('#yellow p', 'color', 'rgba(0, 0, 0, 1)', 'p elements in yellow div are black');

    },

    /* Check that green div is formatted properly */
    'Homework 2: Green div formatting' : function (browser) {
        browser.verify.cssProperty('#green', 'background-color', 'rgba(0, 128, 0, 1)', '#green div background color is green');
        browser.verify.cssProperty('#green', 'padding', '30px', '#GReen div has a padding of 30px');
        browser.verify.cssProperty('#green', 'min-height', '100px', '#green div has a minimum height of 100px');
    },

    /* Check that green div is formatted properly */
    'Homework 2: Footer formatting' : function (browser) {
        browser.verify.cssProperty('footer', 'text-align', 'center', 'text in footer is center aligned');
        browser.verify.cssProperty('footer', 'padding-bottom', '15px', 'bottom padding of the footer is 15px');
    },


}
