const formData = {
  "fname": "cltimpact",
  "lname": "prod test",
  "email": "thejitu@test.com",
  "message": "The three input fields are visible, can be focused and typed into",
}
describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/contact")
  })

  it("Check if Contact heading is visible.", () => {
    cy.get("h1")
      .contains("Contact")
      .should("be.visible")
  })

  it("Check if Contact text is visible.", () => {
    cy.get("h4")
      .contains("Introduce an investment opportunity or learn more about our investment efforts from our team.")
      .should("be.visible")
  })

  it("Check if The three input fields are visible, can be focused and typed into and send button is available and clickable.", () => {
    cy.get('input[name="wpforms[fields][0][first]"]')
      .type(formData.fname)

      .get('input[name="wpforms[fields][0][last]"]')
      .type(formData.lname)

      .get('input[name="wpforms[fields][1]"]')
      .type(formData.email)

      .get('textarea[name="wpforms[fields][2]"]')
      .type(formData.message)

      .get('.g-recaptcha > iframe')
      .should("be.visible")

      .get("button[name='wpforms[submit]']")
      .should("be.visible")
      .focus()
  })


  it("Test the background color of the section", () => {
    cy.get('.tatsu-fqoz0ynbnb922nhy.tatsu-section')
      .should('have.css', 'background-color').then((backgroundColor) => {
        cy.request("https://cltimpact.com/").then(response => {
          // Parse the actual computed color and expected color into RGB values
          const actualRgb = backgroundColor.match(/\d+/g).slice(0, 3).join(', ');
          const expectedRgb = '241, 241, 241';
          // Compare the RGB values
          expect(actualRgb, response.status).to.equal(expectedRgb, 200);
        })
      });
  })

  it("Test the font color of the section", () => {
    cy.get(' h4')
      .should('have.css', 'color').then((color) => {
        cy.request("https://cltimpact.com/").then(response => {
          // Parse the actual computed color and expected color into RGB values
          const actualRgb = color.match(/\d+/g).slice(0, 3).join(', ');
          const expectedRgb = '119, 119, 130';
          // Compare the RGB values
          expect(actualRgb, response.status).to.equal(expectedRgb, 200);
        })
      });
  })

})