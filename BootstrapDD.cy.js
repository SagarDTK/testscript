describe('Handle Bootstarp DD',() => {

    it('Select values',() => {

        cy.visit("http://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html")

        cy.get("button[class='btn btn-default dropdown-toggle']").click();

        cy.get("a[role='menuitem']").each(function($ele,index,list)
        {
            //cy.log($ele.text());

            if($ele.text()==='JavaScript')
            {
            cy.log("Element found :")
            cy.wrap($ele).click();
            }
            else
            {
                cy.log("Current Value : ",$ele.text)
            }

        })    
    
    })      
})