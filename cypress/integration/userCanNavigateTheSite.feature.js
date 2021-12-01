describe("When the user navigates to the site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("when the site renders", () => {
    it("is expected to display part of a header", () => {
      cy.get("[data-cy=header-1]").should(
        "contain.text",
        "Aloha, I'm Dorian Buck."
      );
    });
    it("is expected to display the 2nd part of the header", () => {
      cy.get("[data-cy=header-2]").should(
        "contain.text",
        "I'm a full-stack web developer."
      );
    });
    it("is expected to display a button", () => {
      cy.get("[data-cy=welcome-btn]").should("contain.text", "View my work");
    });
    it("is expected to show work after clicking the button", () => {
      cy.get("[data-cy=welcome-btn]").click();
      // cy.get("[data-cy=about-container]").should("be.visible");
    });
    it('is expected to display a navbar with links', () => {
      cy.get("[data-cy=nav-links]").should("be.visible");
    });
    it('is expected to have link with label home', () => {
    cy.get('[data-cy=nav-home]').should('contain.text', 'Home')
    })
    it('is expected to have link with label about', () => {
    cy.get('[data-cy=nav-about]').should('contain.text', 'About')
    })
    it('is expected to have link with label contact', () => {
    cy.get('[data-cy=nav-contact]').should('contain.text', 'Contact')
    })
    it.only('is expected to have link with label projects', () => {
    cy.get('[data-cy=nav-projects]').should('contain.text', 'Projects')
    })
  });
});
