describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("test the src attribute of the bg image.", () => {
    const expectedBackgroundImageUrl = 'url("https://cltimpact.com/wp-content/uploads/2022/07/bg-charlotte.jpg")';

    cy.get('#homePageAlt > .tatsu-fullscreen-wrap > .tatsu-section-background-wrap > .tatsu-section-background')
      .should("be.visible")
      .should("have.css", "background-image")
      .then((backgroundImage) => {
        expect(backgroundImage).to.equal(expectedBackgroundImageUrl);
      });
  });

  // it.only("Check if the background image is visible.", () => {
  //   cy.get('#homeBoxTop > h3').as("box")
  //   cy.log("box")
  // });



  it("Check if the heading text is visible.", () => {
    cy.get('.tatsu-fqoz0ynbo6coqm3g > .tatsu-row > .tatsu-column > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > h1')
      .should("be.visible")
      .contains("CLT Impact Investors is a non-profit investment firm focused on executing growth investments in order to empower the next generation of minority entrepreneurs in the greater Charlotte, NC area")
  })


  it("Test the background color of the cards.", () => {

    cy.get('#homeBoxTop')
      .find("h3")
      .should("have.length", 3)
      .click({ multiple: true })

    cy.get(".boggle .box-wrap")
      .should("have.css", "background-color").then(backgroundColor => {
        expect(backgroundColor).to.equal('rgb(86, 141, 161)');

      })

  })

  it("Test the content in the cards.", () => {
    cy.get('.accordion-content > .accordion-content-inner > .box-wrap > div').as("accordion_content")

    cy.get('@accordion_content').eq(0).contains("We are a group of Charlotte, NC investors focused on investing in high performing businesses through a non-profit investment structure.")
    cy.get('@accordion_content').eq(1).contains("We invest through debt or equity securities in Charlotte area minority owned businesses.")
    cy.get('@accordion_content').eq(2).contains("We invest through a non-profit investment structure, whereby 100% of returned principal and investment gains are re-invested in future minority entrepreneurs.")
  })
})