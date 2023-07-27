describe('Header section', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Check if the logo is visible and is a clickable link.", () => {
    cy.get('.logo')
      .should("be.visible")
      .find("a", "img[class='loaded']").click()
  })

  it("Check if there are three links and are clickable.", () => {
    cy.get('#menu')
      .find("a")
      // .click({ multiple: true })
      .should("have.length", 3)
      .each(($link) => {
        cy.wrap($link).should("have.attr", "href").and("not.be.empty")
      })
  })
})
