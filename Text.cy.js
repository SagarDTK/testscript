describe("My Test Suite : ",()=>{

    xit("Get text using text method 1 : ",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")

        //Use invoke() to invoke external jquery command
        //To follow sync use then() after external command invoke()    
        cy.get('.page-title').invoke("text").then((text1)=>{

            expect(text1).to.eq('Automation Practice')
        })

    })

    it("Get text using text method 2 : ",()=>{

        cy.visit("https://codenboxautomationlab.com/practice/")

        cy.get('.page-title').then(function(text2){

        cy.log(text2.text());

        })

    })

})