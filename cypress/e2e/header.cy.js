describe('Header section', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test if the logo redirects you to home page and the src attribute of the logo", () => {
    cy.get('.logo').should("be.visible").as('logo')
      .find("a", "img[class='loaded']")
      .click();

    cy.get('.logo > a > img')
      .should('have.attr', 'src')
      .url()
      .as('initialUrl')
      .should('not.equal', '@initialUrl')
      .should('eq', 'https://cltimpact.com/')
      .then((initialUrl, src) => {
        cy.request(initialUrl, src).then(response => {
          expect(response.status).to.eq(200)
        })
      })

  })

  it("Test the text displayed on the menu (eg Team, Contact)", () => {
    cy.get('#menu')
      .find("a")
      .should("have.length", 3).as('menuItems')

    cy.get('@menuItems').eq(0).should('contain', 'Team')
    cy.get('@menuItems').eq(1).should('contain', 'Investments')
    cy.get('@menuItems').eq(2).should('contain', 'Contact')
  })

  it("Test if the href link is the correct one and the response of its status request", () => {
    cy.get('#menu')
      .find("a")
      .should("have.length", 3).as('menuItems')

    cy.get('@menuItems').eq(0).should("have.attr", "href")
      .then("https://cltimpact.com/team/", () => {
        cy.request("https://cltimpact.com/team/").then(response => {
          expect(response.status).to.eq(200)
        })
      })
    cy.get('@menuItems').eq(1).should("have.attr", "href")
      .then("https://cltimpact.com/investments/", () => {
        cy.request("https://cltimpact.com/investments/").then(response => {
          expect(response.status).to.eq(200)
        })
      })

    cy.get('@menuItems').eq(2).should("have.attr", "href")
      .then("https://cltimpact.com/contact/", () => {
        cy.request("https://cltimpact.com/contact/").then(response => {
          expect(response.status).to.eq(200)
        })
      })
  })

  it("Test the background color of the header", () => {
    cy.get('header#header .semi-transparent')
      .should('have.css', 'background-color').then((backgroundColor) => {
        cy.request("https://cltimpact.com/").then(response => {
          // Parse the actual computed color and expected color into RGB values
          const actualRgb = backgroundColor.match(/\d+/g).slice(0, 3).join(', ');
          const expectedRgb = '86, 141, 161';

          // Compare the RGB values
          expect(actualRgb, response.status).to.equal(expectedRgb, 200);
        })
      });
  })

  it("Test the arrow up button on the pages that are long", () => {
    cy.visit('https://cltimpact.com/investments/');
    // Scroll down on the page (simulate reading or scrolling behavior)
    // Replace with your actual arrow up button selector

    // Get the initial scroll position before clicking the arrow up button
    let initialScrollY;
    cy.window().then((win) => {
      initialScrollY = win.scrollY;
    });

    // Scroll down on the page (simulate reading or scrolling behavior)
    cy.scrollTo('bottom');

    // Find and click the arrow up button
    cy.get('.icon-arrow_carrot-up').click();
    // Replace with your actual arrow up button selector

    // Check if the page has scrolled back to the top
    cy.window().should((win) => {
      expect(win.scrollY).to.equal(initialScrollY)
    });
  })

})
