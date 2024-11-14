## How install cypress
1. npm install cypress
2. npx cypress open
3. Click E2E Testing then click on continue
4. Click Swich testing type
5. Click Component Testing
6. On Project setup view select your setup then click on continue
7. Click on Create from component 

##  FormComponent.vue
```javascript
<template>
  <div>
    <input v-model="name" placeholder="Enter your name" />
    <button @click="submitForm">Send</button>
    <p v-if="submitted">Form submitted, {{ name }}!</p>
  </div>
</template>

## FormComponent.cy.js
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

## How run this?
npm install
npm run dev