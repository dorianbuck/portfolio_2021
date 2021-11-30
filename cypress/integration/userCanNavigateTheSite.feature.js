describe('When the user navigates to the site', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  describe('when the site renders', () => {
    it('is expected to display part of a header', () => {
      cy.get('[data-cy=header-1]').should('contain.text', "Hello, I'm Dorian Buck.")
    });
    it('is expected to display the 2nd part of the header', () => {
      cy.get('[data-cy=header-2]').should('contain.text', "I'm a full-stack web developer.")
    });
  });
});