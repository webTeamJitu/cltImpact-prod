const images = [
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-alston.jpg',
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-collins.jpg',
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-levinson.jpg',
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-mccoll.jpg',
  'https://cltimpact.com/wp-content/uploads/2020/09/mug-magan-circle-600.jpg',
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-sheffer.jpg',
  'https://cltimpact.com/wp-content/uploads/2022/07/mug-circle-400-whitner.jpg',
  'https://cltimpact.com/wp-content/uploads/2021/04/mug-circle-400-griner.jpg'
]

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/team')
  })

  it("Check if the Team heading is visible.", () => {
    cy.get('.tatsu-fqoz0ynbnb922nhy > .tatsu-section-pad')
      .find("h1")
      .contains("Our Team")
  })

  it("Check if the Team intro text is visible.", () => {
    cy.get('.tatsu-fqoz0ynbnb922nhy > .tatsu-section-pad')
      .find('.palette-0')
      .contains("Meet the founding team offering a unique approach to Charlotte investment")
  })

  it.only('load founders images on the teams page', () => {
    cy.wrap(images).each((image) => {
      cy.get(`img[src="${image}"]`, {timeout: 10000})
      cy.should("be.visible")
    })
    cy.go("back")
  })

})