describe("test", () => {
  it("batch", () => {
    cy.intercept("GET", "/api/SpectrumStatus", { fixture: "mock1.json" }).as(
      "getData1"
    );

    cy.visit("/");

    cy.get(getId("chart")).should("exist");

    // altitude
    cy.get(getId("current-td")).should("have.text", "2010.7km");
    cy.get(getId("location")).contains("Medium Earth orbit");

    // speed reverse
    cy.get(getId("speed")).should("have.text", "8.7km/h");
    cy.get(getId("reverse")).should("have.text", "R");

    // temperature
    cy.get(getId("temperature")).should("have.text", "-14.4");

    cy.intercept("GET", "/api/SpectrumStatus", { fixture: "mock2.json" }).as(
      "getData2"
    );

    cy.wait(1000);

    // fetch new data
    cy.get(getId("new-data")).trigger("click");

    cy.get(getId("chart")).should("exist");

    // altitude
    cy.get(getId("current-td")).should("have.text", "510.7km");
    cy.get(getId("location")).contains("Low Earth orbit");

    // speed reverse
    cy.get(getId("speed")).should("have.text", "30.7km/h");
    cy.get(getId("reverse")).should("have.text", "");

    // temperature
    cy.get(getId("temperature")).should("have.text", "14.4");
  });
});

const getId = (id) => {
  return `[data-testid=${id}]`;
};
