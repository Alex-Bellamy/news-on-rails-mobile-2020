describe("Vistors can see list of Articles", () => {
  before(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });
  it("Visitors can see article one", () => {
    cy.contains('Scrum Lord thy God').should('be.visible')
    cy.contains('Lord of all coharts').should('be.visible')
  });

  it("Visitors can see list article two", () => {
    cy.contains('Happy Campers').should('be.visible')
    cy.contains('Happy campers is always a winner').should('be.visible')
  });

  it("Visitors can see list article three", () => {
    cy.contains('Bright Future').should('be.visible')
    cy.contains('A good scrum lord will lead us to a bright future.').should('be.visible')
  });
});