describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Check if the background image is visible.", () => {
    cy.get('#homePageAlt > .tatsu-fullscreen-wrap > .tatsu-section-background-wrap > .tatsu-section-background')
      .should("be.visible")
      .should("have.class", "tatsu-section-background")
  })

  it("Check if the heading text is visible.", () => {
    cy.get('.tatsu-fqoz0ynbo6coqm3g > .tatsu-row > .tatsu-column > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > h1')
      .should("be.visible")
      .contains("CLT Impact Investors is a non-profit investment firm focused on executing growth investments in order to empower the next generation of minority entrepreneurs in the greater Charlotte, NC area")
  })

  it("Check if the accordion  is visible, clickable and if its content is available", () => {
    cy.get('#homeBoxTop')
    .find("h3")
    .should("have.length", 3)
    .click({multiple: true})
    
    .get('.accordion-content > .accordion-content-inner > .box-wrap > div')
    .should('have.class', 'box-body', 'not.be.empty')
    .should("have.length", 6)
  })
})