# How to Set Up Cypress with Vue3

## Step 1: Install Cypress
```bash
npm install cypress
```

## Step 2: Open Cypress
```bash
npx cypress open
```

## Step 3: Configure Cypress for Component Testing
1. In the Cypress window, click on E2E Testing and then click Continue.
2. Click Switch testing type.
3. Select Component Testing.
4. In the Project setup view, choose your project setup (e.g., Vue 3), then click Continue.
5. Click Create from component to start testing your component.

## Step 4: Write the Component and Test
###  FormComponent.vue
```javascript
<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="submitForm">Send</button>
    <p v-if="submitted">Form submitted, {{ name }}!</p>
  </div>
</template>
```

### FormComponent.cy.js
Create a test file FormComponent.cy.js in the same directory as FormComponent.vue (or in your cypress/component folder if set up).

```javascript
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
```

## Step 5: Run the Test
1. Make sure your project dependencies are installed:

```bash
npm install
```
2. Start the development server:


```bash
npm run dev
```
3. In another terminal, open Cypress and start the component test:

```bash
npx cypress open
```
Then, select Component Testing and run the FormComponent.cy.js test. Cypress will mount the FormComponent.vue component and execute the test.