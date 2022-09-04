describe('Cypress Selector Playground : ',() =>
{
    it('Login Test',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[name='username']").type("Admin")

        cy.get("input[name='password']").type("admin123")
    })

    xit('Forgot Ypur Password',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //cy.contains('your').click()

        cy.xpath("//p[contains(text(),'Forgot your password?')]").click();

        
    })
})

