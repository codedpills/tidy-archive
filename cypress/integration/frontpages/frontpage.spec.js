// test archive feature
// test restore feature
// test goto letter feature

describe("Frontpage archive page on dektop web client", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display list of frontpages", () => {
    cy.get("[data-test=frontpage-list-items]").should("exist");
  });

  it("should archive frontpage", () => {
    const frontpage = cy.get("[data-test=frontpage-list-items]").first();
    // const letter = frontpage.get(".frontpage-item__text-title");
    // console.log("letter", letter)
    frontpage.should("exist");
    frontpage.trigger("mouseenter");
    cy.get("[data-test=frontpage-item__text-button]").invoke(
      "css",
      "visibility",
      "visible"
    );
    cy.get("[data-test=archive-button]").first().should("be.visible").click();
    cy.get("[data-test=frontpage-list-items]").should("not.contain", frontpage);
  });
});
