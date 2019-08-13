var url = require('readline-sync').question('Enter URL to Test HomeworkFour:\n');
var alphanum = /[a-zA-Z]/;

module.exports = {
// ------- Baseline check for the test. -------

  'Homework 4 Check' : function (browser) {
      browser.url(url);
      browser.waitForElementVisible('body');
      browser.verify.visible('body');
      browser.verify.visible('h1');
      browser.verify.visible('.skip'); // class for skip to content div
      browser.verify.visible('.nav'); // class for navigation
      browser.verify.visible('footer');
    },


// ------- HTML integrity check -------

    /* Check that h1 exists only once */
    'HTML integrity check: Only 1 h1 exists' : function (browser) {
        browser.expect.elements('h1').count.to.equal(1);
    },

    /* Check that h2 exists 4 times*/
    'HTML integrity check: Only 4 h2 exist' : function (browser) {
        browser.expect.elements('h2').count.to.equal(4);
    },

    /* No in-line formatting for all major HTML elements */
    'HTML integrity check: No in-line formatting' : function (browser) {
        browser.verify.attributeEquals('body', 'style', '', 'body element does not have in-line styles');
        browser.verify.attributeEquals('nav', 'style', '', 'nav element does not have in-line styles');
        browser.verify.attributeEquals('.head', 'style', '', 'head div does not have in-line styles');
        browser.verify.attributeEquals('.about', 'style', '', 'about div does not have in-line styles');
        browser.verify.attributeEquals('.about-image', 'style', '', 'about-image div does not have in-line styles');
        browser.verify.attributeEquals('.method', 'style', '', 'method div does not have in-line styles');
        browser.verify.attributeEquals('.method-image', 'style', '', 'method-image div does not have in-line styles');
        browser.verify.attributeEquals('.clients', 'style', '', 'clients div does not have in-line styles');
        browser.verify.attributeEquals('.clients-image', 'style', '', 'clients-image div does not have in-line styles');
        browser.verify.attributeEquals('.contact', 'style', '', 'contact div does not have in-line styles');
        browser.verify.attributeEquals('.contact-image', 'style', '', 'contact-image div element does not have in-line styles');
        browser.verify.attributeEquals('footer', 'style', '', 'footer element does not have in-line styles');
    },


// ------- Grid CSS checks -------

    /* Container element has grid property */
    'Homework 4: .container element has grid properties for mobile' : function (browser) {
        browser.windowSize('current', 700, 1000, function(result){});
        browser.verify.cssProperty('.container', 'display','grid', 'div with container class has display type of grid');
        browser.verify.cssProperty('.container', 'grid-template-columns', '100px 500px 100px', 'grid has 3 formatted columns'); // browser resolves fractional units into pixels - instructions need to show [1fr 5fr 1fr] which will test correctly in the nightwatch env. based on fixed window size
        browser.verify.cssProperty('.container', 'grid-template-rows', '30px 400px 700px 700px 700px 700px 100px', 'grid has 7 formatted rows');
        // browser resolves fractional units into pixels - instructions need to show [30px auto auto auto auto auto 100px] which will test correctly in the nightwatch env. based on fixed window size
        browser.verify.cssProperty('.container', 'grid-row-gap', '15px', 'grid has a row gap of 15px');
    },

    /* head section grid and css formatting for mobile */
    'Homework 4: head section formatting for mobile' : function (browser) {
        browser.verify.cssProperty('.head', 'grid-column-start','1', 'head section begins in column 1');
        browser.verify.cssProperty('.head', 'grid-column-end', '-1', 'head section ends in column -1');
        browser.verify.cssProperty('.head', 'background-attachment', 'fixed', 'head section background attachment is fixed to create parallax effect');
        browser.verify.cssProperty('.head', 'background-position', '50% 50%', 'head section background position is centered to create parallax effect');
        browser.verify.cssProperty('.head', 'background-repeat', 'no-repeat', 'head section background does not repeat to create parallax effect');
        browser.verify.cssProperty('.head', 'background-size', 'cover', 'head section background size is set to cover to create parallax effect');
    },
    /* about section grid and css formatting for mobile */
    'Homework 4: about section formatting for mobile' : function (browser) {
        browser.verify.cssProperty('.about-image', 'grid-column-start','1', 'about image begins in column 1');
        browser.verify.cssProperty('.about-image', 'grid-column-end', '-1', 'about image ends in column -1');
        browser.verify.cssProperty('.about-image', 'grid-row-start','3', 'about image begins in row 3');
        browser.verify.cssProperty('.about-image', 'grid-row-end', 'auto', 'about image spans the default value');
        browser.verify.cssProperty('.about', 'grid-column-start','2', 'about section begins in column 2');
        browser.verify.cssProperty('.about', 'grid-column-end', 'auto', 'about section spans the default value');
        browser.verify.cssProperty('.about', 'grid-row-start','3', 'about section begins in row 3');
        browser.verify.cssProperty('.about', 'grid-row-end', 'auto', 'about section spans the default value');
        browser.verify.cssProperty('.about', 'align-self', 'center', 'about section is centered vertically');
        browser.verify.cssProperty('.about', 'justify-self', 'center', 'about section is centered horizontally');
        // browser.verify.cssProperty('.about', 'background-color', 'rgba(255, 255, 255, 0.8)', 'clients section background is semi-trasparent white');
        // browser.verify.cssProperty('.about', 'border', '10px solid rgb(0, 0, 0)', 'about section has 10px black border');
        // browser.verify.cssProperty('.about', 'padding', '30px', 'about section has padding of 30px');
        browser.verify.cssProperty('.about-image', 'max-height', '700px', 'about image has max height of 700px');
        browser.verify.cssProperty('.about-image', 'overflow', 'hidden', 'about image overflow hides images');
        browser.expect.element('.about-image img').to.have.attribute('alt').which.matches(alphanum);
    },

    /* method section grid and css formatting for mobile */
    'Homework 4: method section formatting for mobile' : function (browser) {
        browser.verify.cssProperty('.method-image', 'grid-column-start','1', 'method image begins in column 1');
        browser.verify.cssProperty('.method-image', 'grid-column-end', '-1', 'method image ends in column -1');
        browser.verify.cssProperty('.method-image', 'grid-row-start','4', 'method image begins in row 4');
        browser.verify.cssProperty('.method-image', 'grid-row-end', 'auto', 'method image spans the default value');
        browser.verify.cssProperty('.method', 'grid-column-start','2', 'method section begins in column 2');
        browser.verify.cssProperty('.method', 'grid-column-end', 'auto', 'method section spans the default value');
        browser.verify.cssProperty('.method', 'grid-row-start','4', 'method section begins in row 4');
        browser.verify.cssProperty('.method', 'grid-row-end', 'auto', 'method section spans the default value');
        browser.verify.cssProperty('.method', 'align-self', 'center', 'method section is centered vertically');
        browser.verify.cssProperty('.method', 'justify-self', 'center', 'method section is centered horizontally');
        // browser.verify.cssProperty('.method', 'background-color', 'rgba(255, 255, 255, 0.8)', 'method section background is semi-trasparent white');
        // browser.verify.cssProperty('.method', 'border', '10px solid rgb(0, 0, 0)', 'method section has 10px black border');
        // browser.verify.cssProperty('.method', 'padding', '30px', 'method section has padding of 30px');
        browser.verify.cssProperty('.method-image', 'max-height', '700px', 'method image has max height of 700px');
        browser.verify.cssProperty('.method-image', 'overflow', 'hidden', 'method image overflow hides images');
        browser.expect.element('.method-image img').to.have.attribute('alt').which.matches(alphanum);
    },

    /* clients section grid and css formatting for mobile */
    'Homework 4: client section formatting for mobile' : function (browser) {
        browser.verify.cssProperty('.clients-image', 'grid-column-start','1', 'clients image begins in column 1');
        browser.verify.cssProperty('.clients-image', 'grid-column-end', '-1', 'clients image ends in column -1');
        browser.verify.cssProperty('.clients-image', 'grid-row-start','5', 'clients image begins in row 5');
        browser.verify.cssProperty('.clients-image', 'grid-row-end', 'auto', 'clients image spans the default value');
        browser.verify.cssProperty('.clients', 'grid-column-start','2', 'clients section begins in column 2');
        browser.verify.cssProperty('.clients', 'grid-column-end', 'auto', 'clients section spans the default value');
        browser.verify.cssProperty('.clients', 'grid-row-start','5', 'clients section begins in row 5');
        browser.verify.cssProperty('.clients', 'grid-row-end', 'auto', 'clients section spans the default value');
        browser.verify.cssProperty('.clients', 'align-self', 'center', 'clients section is centered vertically');
        browser.verify.cssProperty('.clients', 'justify-self', 'center', 'clients section is centered horizontally');
        // browser.verify.cssProperty('.clients', 'background-color', 'rgba(255, 255, 255, 0.8)', 'clients section background is semi-trasparent white');
        // browser.verify.cssProperty('.clients', 'border', '10px solid rgb(0, 0, 0)', 'clients section has 10px black border');
        // browser.verify.cssProperty('.clients', 'padding', '30px', 'clients section has padding of 30px');
        browser.verify.cssProperty('.clients-image', 'max-height', '700px', 'clients image has max height of 700px');
        browser.verify.cssProperty('.clients-image', 'overflow', 'hidden', 'clients image overflow hides images');
        browser.expect.element('.clients-image img').to.have.attribute('alt').which.matches(alphanum);
    },

    /* contact section grid and css formatting for mobile */
    'Homework 4: contact section formatting for mobile' : function (browser) {
        browser.verify.cssProperty('.contact-image', 'grid-column-start','1', 'contact image begins in column 1');
        browser.verify.cssProperty('.contact-image', 'grid-column-end', '-1', 'contact image ends in column -1');
        browser.verify.cssProperty('.contact-image', 'grid-row-start','6', 'contact image begins in row 6');
        browser.verify.cssProperty('.contact-image', 'grid-row-end', 'auto', 'contact image spans the default value');
        browser.verify.cssProperty('.contact', 'grid-column-start','2', 'contact section begins in column 2');
        browser.verify.cssProperty('.contact', 'grid-column-end', 'auto', 'contact section spans the default value');
        browser.verify.cssProperty('.contact', 'grid-row-start','6', 'contact section begins in row 6');
        browser.verify.cssProperty('.contact', 'grid-row-end', 'auto', 'contact section spans the default value');
        browser.verify.cssProperty('.contact', 'align-self', 'center', 'contact section is centered vertically');
        browser.verify.cssProperty('.contact', 'justify-self', 'center', 'contact section is centered horizontally');
        // browser.verify.cssProperty('.contact', 'background-color', 'rgba(255, 255, 255, 0.8)', 'contact section background is semi-trasparent white');
        // browser.verify.cssProperty('.contact', 'border', '10px solid rgb(0, 0, 0)', 'contact section has 10px black border');
        // browser.verify.cssProperty('.contact', 'padding', '30px', 'contact section has padding of 30px');
        browser.verify.cssProperty('.contact-image', 'max-height', '700px', 'contact image has max height of 700px');
        browser.verify.cssProperty('.contact-image', 'overflow', 'hidden', 'contact image overflow hides images');
        browser.expect.element('.contact-image img').to.have.attribute('alt').which.matches(alphanum);
    },

// ------- Nav / Skip elements check -------
    /* nav elements for mobile */
    'Homework 4: navigation formatting for mobile' : function (browser) {
        browser.verify.cssProperty('nav ul', 'list-style-type','none', 'navigation list does not have bullets');
        browser.verify.cssProperty('nav li', 'display', 'inline', 'navigation lists items horizontally');
        browser.verify.cssProperty('nav a', 'text-decoration','none solid rgb(0, 0, 0)', 'navigation link does not have underline');
        browser.moveToElement('nav a:first-child', 0, 0, function(){
            browser.pause(2000) // moves the mouse over the first link in navigation list and waits 2 seconds - next test checks if text decoration is underlined
          });
        browser.verify.cssProperty('nav a:first-child', 'text-decoration', 'underline solid rgb(0, 0, 0)', 'navigation link has underline on hover');
        browser.verify.cssProperty('.nav', 'grid-column-start','1', 'navigation begins in column 1');
        browser.verify.cssProperty('.nav', 'grid-column-end', '-1', 'navigation ends in column -1');
        browser.verify.cssProperty('.nav', 'grid-row-start','1', 'navigation begins in row 1');
        browser.verify.cssProperty('.nav', 'grid-row-end', 'auto', 'navigation spans the default value');
        browser.verify.cssProperty('.nav', 'align-self', 'center', 'contact section is centered vertically');
        browser.verify.cssProperty('.nav', 'text-align', 'left', 'navigation is left aligned on mobile');
        browser.verify.cssProperty('html', 'scroll-behavior', 'smooth', 'browser will scroll to element when clicked');
    },

    /* nav elements for mobile */
    'Homework 4: navigation formatting for desktop' : function (browser) {
      browser.windowSize('current', 900, 1000, function(result){});
        browser.verify.cssProperty('nav ul', 'list-style-type','none', 'navigation list does not have bullets');
        browser.verify.cssProperty('nav li', 'display', 'inline', 'navigation lists items horizontally');
        browser.verify.cssProperty('nav a', 'text-decoration','none solid rgb(0, 0, 0)', 'navigation link does not have underline');
        browser.moveToElement('nav a:first-child', 0, 0, function(){
            browser.pause(2000) // moves the mouse over the first link in navigation list and waits 2 seconds - next test checks if text decoration is underlined
          });
        browser.verify.cssProperty('nav a:first-child', 'text-decoration', 'underline solid rgb(0, 0, 0)', 'navigation link has underline on hover');
        browser.verify.cssProperty('.nav', 'grid-column-start','1', 'navigation begins in column 1');
        browser.verify.cssProperty('.nav', 'grid-column-end', '-1', 'navigation ends in column -1');
        browser.verify.cssProperty('.nav', 'grid-row-start','1', 'navigation begins in row 1');
        browser.verify.cssProperty('.nav', 'grid-row-end', 'auto', 'navigation spans the default value');
        browser.verify.cssProperty('.nav', 'align-self', 'center', 'contact section is centered vertically');
        browser.verify.cssProperty('.nav', 'text-align', 'right', 'navigation is right aligned on desktop');
    },

    /* skip to content*/
    'Homework 4: skip to content formatting' : function (browser) {
      browser.verify.cssProperty('.skip a', 'left','0px', 'skip to content is set all the way left by default');
      browser.verify.cssProperty('.skip a', 'top','-40px', 'skip to content is set above the margin of the page by default');
      browser.verify.cssProperty('.skip a', 'position','absolute', 'skip to content has absolute positioning');
      browser.verify.cssProperty('.skip a', 'transition','top 1s ease-out 0s', 'skip to content has transition property');
      browser.verify.cssProperty('.skip a', '-webkit-transition','top 1s ease-out 0s', 'skip to content has prefix for transition property');
      browser.verify.cssProperty('.skip a', 'z-index','1', 'skip to content will always appear on top');
      browser.keys('\uE004', function(press){
        browser.pause(2000); // press the tab key to focus on skip
        browser.verify.cssProperty('.skip a', 'top', '0px', 'skip to content will transition into view on single tab press')
        browser.verify.cssProperty('.skip a', 'border', '2px solid rgb(0, 0, 0)', 'skip to content has black border on focus')
      });
      browser.keys('\uE004', function(press){
        browser.pause(2000); // press the tab key to focus on nav
      });
    },

// ------- Responsive checks -------
  //resize window here then check
  /* Container element has grid property */
  'Homework 4: .container element has grid properties desktop' : function (browser) {
      browser.windowSize('current', 900, 1000, function(result){});
      browser.verify.cssProperty('.container', 'display','grid', 'div with container class has display type of grid');
      browser.verify.cssProperty('.container', 'grid-template-columns', '50px 150px 500px 150px 50px', 'grid has 5 formatted columns');
      // browser resolves fractional units into pixels - instructions need to show [50px auto 500px auto 50px] which will test correctly in the nightwatch env. based on fixed window size
      browser.verify.cssProperty('.container', 'grid-template-rows', '70px 400px 400px 400px 400px 400px 100px', 'grid has 7 formatted rows');
      browser.verify.cssProperty('.container', 'grid-row-gap', '15px', 'grid has a row gap of 15px');
  },

  /* head section grid and css formatting for desktop - same as mobile */
  'Homework 4: head section formatting for desktop' : function (browser) {
      browser.verify.cssProperty('.head', 'grid-column-start','1', 'head section begins in column 1');
      browser.verify.cssProperty('.head', 'grid-column-end', '-1', 'head section ends in column -1');
      browser.verify.cssProperty('.head', 'background-attachment', 'fixed', 'head section background attachment is fixed to create parallax effect');
      browser.verify.cssProperty('.head', 'background-position', '50% 50%', 'head section background position is centered to create parallax effect');
      browser.verify.cssProperty('.head', 'background-repeat', 'no-repeat', 'head section background does not repeat to create parallax effect');
      browser.verify.cssProperty('.head', 'background-size', 'cover', 'head section background size is set to cover to create parallax effect');
  },

  /* about section grid and css formatting for desktop */
  'Homework 4: about section formatting for desktop' : function (browser) {
      browser.verify.cssProperty('.about-image', 'grid-column-start','2', 'about image begins in column 2');
      browser.verify.cssProperty('.about-image', 'grid-column-end', 'span 2', 'about image spans 2 columns');
      browser.verify.cssProperty('.about-image', 'grid-row-start','3', 'about image begins in row 3');
      browser.verify.cssProperty('.about-image', 'grid-row-end', 'auto', 'about image spans the default value');
      browser.verify.cssProperty('.about', 'grid-column-start','3', 'about section begins in column 3');
      browser.verify.cssProperty('.about', 'grid-column-end', 'span 2', 'about section spans the default value');
      browser.verify.cssProperty('.about', 'grid-row-start','3', 'about section begins in row 3');
      browser.verify.cssProperty('.about', 'grid-row-end', 'auto', 'about section spans the default value');
      browser.verify.cssProperty('.about-image', 'overflow', 'hidden', 'about image overflow hides images');
  },

  /* method section grid and css formatting for desktop */
  'Homework 4: method section formatting for desktop' : function (browser) {
      browser.verify.cssProperty('.method-image', 'grid-column-start','3', 'method image begins in column 3');
      browser.verify.cssProperty('.method-image', 'grid-column-end', 'span 2', 'method image spans 2 columns');
      browser.verify.cssProperty('.method-image', 'grid-row-start','4', 'method image begins in row 4');
      browser.verify.cssProperty('.method-image', 'grid-row-end', 'auto', 'method image spans the default value');
      browser.verify.cssProperty('.method', 'grid-column-start','2', 'method section begins in column 2');
      browser.verify.cssProperty('.method', 'grid-column-end', 'span 2', 'method section spans 2 columns');
      browser.verify.cssProperty('.method', 'grid-row-start','4', 'method section begins in row 4');
      browser.verify.cssProperty('.method', 'grid-row-end', 'auto', 'method section spans the default value');
      browser.verify.cssProperty('.method-image', 'overflow', 'hidden', 'method image overflow hides images');
  },

  /* clients section grid and css formatting for desktop */
  'Homework 4: clients section formatting for desktop' : function (browser) {
      browser.verify.cssProperty('.clients-image', 'grid-column-start','2', 'clients image begins in column 2');
      browser.verify.cssProperty('.clients-image', 'grid-column-end', 'span 2', 'clients image spans 2 columns');
      browser.verify.cssProperty('.clients-image', 'grid-row-start','5', 'clients image begins in row 5');
      browser.verify.cssProperty('.clients-image', 'grid-row-end', 'auto', 'clients image spans the default value');
      browser.verify.cssProperty('.clients', 'grid-column-start','3', 'clients section begins in column 3');
      browser.verify.cssProperty('.clients', 'grid-column-end', 'span 2', 'clients section spans 2 columns');
      browser.verify.cssProperty('.clients', 'grid-row-start','5', 'clients section begins in row 5');
      browser.verify.cssProperty('.clients', 'grid-row-end', 'auto', 'clients section spans the default value');
      browser.verify.cssProperty('.clients-image', 'overflow', 'hidden', 'clients image overflow hides images');
  },

  /* contact section grid and css formatting for desktop */
  'Homework 4: contact section formatting for desktop' : function (browser) {
      browser.verify.cssProperty('.contact-image', 'grid-column-start','3', 'contact image begins in column 3');
      browser.verify.cssProperty('.contact-image', 'grid-column-end', 'span 2', 'contact image spans 2 columns');
      browser.verify.cssProperty('.contact-image', 'grid-row-start','6', 'contact image begins in row 6');
      browser.verify.cssProperty('.contact-image', 'grid-row-end', 'auto', 'contact image spans the default value');
      browser.verify.cssProperty('.contact', 'grid-column-start','2', 'contact section begins in column 2');
      browser.verify.cssProperty('.contact', 'grid-column-end', 'span 2', 'contact section spans 2 columns');
      browser.verify.cssProperty('.contact', 'grid-row-start','6', 'contact section begins in row 6');
      browser.verify.cssProperty('.contact', 'grid-row-end', 'auto', 'contact section spans the default value');
      browser.verify.cssProperty('.contact-image', 'overflow', 'hidden', 'contact image overflow hides images');
      browser.end();
  },

}
