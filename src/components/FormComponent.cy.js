import FormComponent from "./FormComponent.vue";

describe("<FormComponent />", () => {
  it("renders", () => {
    // Mount the component
    cy.mount(FormComponent);

    // Select the text field and type a name
    cy.get('input').type("Carlos");

    // Click the submit button
    cy.get("button").contains("Send").click();

    // Verify the success message is visible with the correct name
    cy.contains("Form submitted, Carlos!").should("be.visible");
  });
});
