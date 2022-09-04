describe('Cypress Selector Playground : ',() =>
{
    it('Login Test',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.xpath("//input[@class='oxd-input oxd-input--active' and @name='username']").type("Admin");

        cy.xpath("//input[@class='oxd-input oxd-input--active' and @name='password']").type("admin123");

        cy.xpath("//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']").click();


    })

    xit('Forgot Ypur Password',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.contains('your').click()

        cy.xpath("//p[contains(text(),'Forgot your password?')]").click();

        
    })
})


