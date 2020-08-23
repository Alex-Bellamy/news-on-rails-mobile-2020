describe('Vistor can see article content', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles',
      response: "fixture:articles_index.json",
    });
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/articles/1',
      response: "fixture:article_show.json",
    })
    cy.visit("/");
    cy.contains("Scrum Lord thy God").click();
    })

  it('displays the content of the article', () => {
      cy.contains("Lord thy God").should('exist')
      cy.contains("Lord of all coharts").should('exist')
      cy.contains("A Scrum Lord punishes his coharts and rule the day with terror.").should('exist')
    })
  })