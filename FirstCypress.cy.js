/// <reference types="Cypress" />
describe('Orange HRM Test Suite',function()
{
    xit('Verify URL',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.url().should("include","orangehrmlive")

        cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    });

    xit('Verify Title',function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("include","HRM")

        cy.title().should("eq","OrangeHRM")
    });

    it("Login & Logout",function()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin").should("have.value","Admin")

        cy.get("input[name='password']").type("admin123456")//.should("have.value","admin123")

        cy.get("button[class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click()

        cy.get("p[class='oxd-text oxd-text--p oxd-alert-content-text']").should("have.text","Invalid credentials")
    })

    
})