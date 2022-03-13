/// <reference types="cypress" />
describe("Testing the application", function () {
   
    it("Verify the selected end points of devices", function () {
        cy.visit('/');
        cy.get('.navbar > .container > :nth-child(1)').contains('Device App');
        cy.contains('WÄRMESCHRÄNKE').click();        
        cy.url().should('include', '/devices/1');        
        cy.contains('All Devices').click();
        cy.url().should('include', '/devices');
        cy.contains('KAMMERÖFEN').click();
        cy.url().should('include', '/devices/2');
        cy.contains('All Devices').click();
        cy.contains('ROHRÖFEN').click();
        cy.url().should('include', '/devices/3');
        cy.contains('All Devices').click();
        cy.contains('VAKUUMÖFEN').click();
        cy.url().should('include', '/devices/4');
        cy.get('.card-text').should('include.text', 'Vakuumöfen von Carbolite Gero werden nach höchsten Qualitätsstandards produziert');
        cy.contains('Devices').click();
        cy.contains('TRENNMASCHINEN').click();
        cy.url().should('include', '/devices/10');
        cy.get('.card-text').should('include.text', 'Größe und Form eines Werkstücks können es erfordern');
    });
});