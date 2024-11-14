import Pokemon from "./Pokemon.vue";

describe("<Pokemon />", () => {
  beforeEach(() => {
    // Intercept API request and alias it for waiting
    cy.intercept({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon?limit=20",
    }).as("apiCheck");
    
    // Mount the component before each test
    cy.mount(Pokemon);

  });

  it("renders the component", () => {
    // Verify that the component mounts successfully by checking for a common element
    cy.get("input.add").should("exist");
  });

  it("adds a new Pokémon when the name is not a duplicate", () => {
    // Type a unique Pokémon name and add it to the list
    cy.get("input.add").type("newPokemon");
    cy.contains("Add").click();
    cy.get("div").should("contain", "newPokemon"); // Verify the new Pokémon appears in the list
  });

  it("does not allow adding duplicate Pokémon", () => {
    // Attempt to add a Pokémon with a duplicate name
    cy.get("input.add").type("bulbasaur");
    cy.contains("Add").click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("Not duplicate allowed"); // Check if alert message appears
    });
  });

  it("filters Pokémon based on input", () => {
    // Add multiple Pokémon to test filtering functionality
    cy.get("input.add").type("bulbasaur");
    cy.contains("Add").click();
    cy.get("input.add").clear().type("bulbasaurs");
    cy.contains("Add").click();
    cy.get("input.add").clear().type("charmander");
    cy.contains("Add").click();

    // Type a filter term and verify that only matching Pokémon appear
    cy.get("input.filter").type("bulb");
    cy.get("div").should("contain", "bulbasaur");
    cy.get("div").should("not.contain", "charmander"); // Ensure unrelated Pokémon do not appear
  });
});
