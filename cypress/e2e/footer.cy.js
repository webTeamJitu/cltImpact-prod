describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Check id the copywrite content is visible", () => {
    cy.get('span[class="margin-right:10px;"]')
      .should("be.visible")
      .should("not.be.empty")
      .contains("© Copyright 2022, CLT Impact Investors. All Rights Reserved.")
  })

  it("Check id the contact email is visible", () => {
    cy.get('#homePageAlt > .tatsu-fullscreen-wrap > .tatsu-section-pad > .tatsu-row-full-width > #homeFooter > .tatsu-column > .tatsu-column-inner > .tatsu-column-pad-wrap > .tatsu-column-pad > .tatsu-module > .tatsu-text-inner > p ')
      .find("a", "href", "mailto:invest@cltimpact.com")
      .should("be.visible")
  })
})