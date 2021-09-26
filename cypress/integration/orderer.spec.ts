describe("Orderer", () => {
    it("can be filled completly", () =>{
        cy.visit("http://localhost:3000/")
       .get('#ordererName').type("Robin")
       .get('#ordererPaypal').type("https://www.paypal.com/de/home")
       .get('#ordererButton').click()
       .get('#todaysOrderer').should('contain', "Robin")
       .get('#todaysPaypal').should('have.attr', 'href', 'https://www.paypal.com/de/home')
    })
})