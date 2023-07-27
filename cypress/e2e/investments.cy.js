const images = [
  'https://cltimpact.com/wp-content/uploads/2022/07/logo-investments-miles.png',
  'https://cltimpact.com/wp-content/uploads/2022/07/logo-investments-loyd.png',
  'https://cltimpact.com/wp-content/uploads/2022/07/logo-investments-luckyspot.png',
  'https://cltimpact.com/wp-content/uploads/2023/01/logo-investments-fitteds.png',
]

const investments = [
  'Growth investment in IT solutions services and consulting company, headquartered in Charlotte, NC',
  'Growth investment in a cutting edge video production and storytelling company, headquartered in Charlotte, NC',
  'Growth investment in barbershop chain with stores throughout the Southeast, headquartered in Charlotte, NC',
  'Growth investment in unique retailer of custom, bespoke hat and athletic wear, headquartered in Charlotte, NC'
]


describe('investments spec', () => {
  beforeEach(() => {
    cy.visit('/investments')
  })

  it("Check if the Investments heading is visible.", () => {
    cy.get('h1')
      .should('be.visible')
      .contains("Investments")
  })

  it("Check if the Investments intro text is visible.", () => {
    cy.get("h4 > span")
      .should("be.visible")
      .contains("We’ve successfully invested in the next generation of Charlotte entrepreneurs.")
  })

  it('Check if the four Investment images are visible', () => {
    cy.wrap(images).each((image) => {
      cy.get(`img[src="${image}"]`)
      cy.should("be.visible")
    })
    cy.go("back")
  })

  it('Check if the four Investment content are visible', () => {
    cy.wrap(investments).each((paragraph) => {
      cy.get("p")
        .should("be.visible")
        .contains(paragraph)
    })
    cy.go("back")
  })

})