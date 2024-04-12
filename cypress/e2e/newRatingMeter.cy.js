describe("Check for key in localhost page", () => {
  it("should find the key on the page", () => {
    const url = "/rating-meter";
    cy.visit(url);

    cy.get('button:contains("New")').should("be.visible");
    cy.wait(1000);
    cy.get('button:contains("New")').click({ force: true });
  });
});
