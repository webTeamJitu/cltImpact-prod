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

})