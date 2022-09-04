//const { list } = require("cypress/lib/tasks/cache")

describe('Handle Auto Suggestion',()=>
{
    it('Select value from google auto suggestion',()=>
    {
        cy.visit("https://www.google.com/")

        cy.get("input[name='q']").type("Selenium")

        cy.get("div[role='option']").each(function($ele,index,$list)
        {
            //cy.log($ele.text())
      
            if($ele.text().includes("selenium dev"))
            {
                cy.wrap($ele).click()
            }
            else
            {
                cy.log($ele.text())
            }
            
        })
    });

});