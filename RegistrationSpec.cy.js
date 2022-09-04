describe('Fill all Details',()=>
{
    it('Complete registration : ',()=>
    {
        cy.visit("http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html")

        cy.xpath("//input[@id='fname']").type("Cypress")

        cy.xpath("//input[@id='email']").type("abc@gmail.com");

        cy.xpath("//input[@id='cname']").type("Cypress JS");

        cy.xpath("//input[@id='adr']").type("PUNE MH");

        cy.xpath("//input[@id='ccnum']").type("123456789");

        //cy.get("select[name='city']").select("Pune").find(":selected").contains("Pune")

        //cy.get("select[name='city']").select("Bh").find(":selected").contains("Pune")

        cy.get("select[name='city']").select(2).find(":selected").contains("Bhopal")

        cy.get("select[name='Hobbies']").select(["Singing","Dance"])

        //cy.get("input[type='checkbox']").check({force:true})

        //cy.get("input[type='checkbox']").first().check()

        //cy.get("input[type='checkbox']").check("new").should("be.checked")

        cy.get("input[type='checkbox']").check("dis",{force:true}).should("be.checked")

        cy.get("input[type='radio']").check({force:true})
    })
})


