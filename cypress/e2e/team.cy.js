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
    cy.viewport(1600, 1600)
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

  // it.only('load founders images on the teams page', () => {
  //   cy.wrap(images).each((image) => {
  //     cy.get(`img[src="${image}"]`)
  //     should('have.attr', 'src')
  //       .should("be.visible",)
  //   })
  //   cy.go("back")
  // })

  it("Test the image of each member", () => {
    images.forEach((link) => {
      cy.scrollTo("bottom")
      cy.get(`img[src="${link}"]`, { timeout: 40000 });
      cy.request(`${link}`).then(
        (res) => {
          expect(res.status).to.eq(200);
        }
      );
    });
  });

  it("Test the name and role of each member", () => {
    cy.get(".tatsu-row-has-three-cols ")
      .find('h5').as("founders")
    cy.get(".tatsu-row-has-three-cols ")
      .find("p > span").as("titles")

    cy.get(".tatsu-row-has-four-cols ")
      .find('h5').as("founders_")
    cy.get(".tatsu-row-has-four-cols ")
      .find("p > span").as("titles_")

    cy.get('@founders').eq(0).should('contain', 'Will Alston')
    cy.get('@titles').eq(0).should('contain', 'Founder')

    cy.get('@founders').eq(1).should('contain', 'Todd Collins')
    cy.get('@titles').eq(1).should('contain', 'Founder')

    cy.get('@founders').eq(2).should('contain', 'Hal Levinson')
    cy.get('@titles').eq(2).should('contain', 'Founder')

    cy.get('@founders_').eq(0).should('contain', 'Hugh McColl')
    cy.get('@titles_').eq(0).should('contain', 'Founder')

    cy.get('@founders_').eq(1).should('contain', 'Matt Magan')
    cy.get('@titles_').eq(1).should('contain', 'Founder')

    cy.get('@founders_').eq(2).should('contain', 'David Sheffer')
    cy.get('@titles_').eq(2).should('contain', 'Founder')

    cy.get('@founders_').eq(3).should('contain', 'James Whitner')
    cy.get('@titles_').eq(3).should('contain', 'Founder')

    cy.get('@founders').eq(3).should('contain', 'Curtis Griner')
    cy.get('@titles').eq(3).should('contain', 'General Counsel')
  })
})