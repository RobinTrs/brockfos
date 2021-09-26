describe("Formular", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    }
    )
    it("is filled completly", () =>{
        cy.get('#orderName').type('Robin Rieger')
        .get('#orderContent').type('Sushi-Menu 3')
        .get('#orderPrice').type('12,99')
        .get('#orderPayed').click()
        .get('#orderAccompany').click()
        .get('#orderButton').click()
        .get('#cartName').should('contain', 'Robin Rieger')
        .get('#cartContent').should('contain', 'Sushi-Menu 3')
        .get('#cartPrice').should('contain', '12,99')
        .get('#cartPayed').should('contain', 'bezahlt')
        .get('#cartAccompany').should('contain', 'Ich begleite dich!')
    }),
    it('is filled but accompany', () => {
       cy.get('#orderName').type('Robin Rieger')
        .get('#orderContent').type('Sushi-Menu 3')
        .get('#orderPrice').type('12,99')
        .get('#orderPayed').click()
        .get('#orderButton').click()
        .get('#cartName').should('contain', 'Robin Rieger')
        .get('#cartContent').should('contain', 'Sushi-Menu 3')
        .get('#cartPrice').should('contain', '12,99')
        .get('#cartPayed').should('contain', 'bezahlt')
        .get('#cartAccompany').should('contain', 'keine Zeit!')
    }),
    it('is filled but payed but can be filled later', () => {
        cy.get('#orderName').type('Robin Rieger')
        .get('#orderContent').type('Sushi-Menu 3')
        .get('#orderPrice').type('12,99')
        .get('#orderAccompany').click()
        .get('#orderButton').click()
        .get('#cartName').should('contain', 'Robin Rieger')
        .get('#cartContent').should('contain', 'Sushi-Menu 3')
        .get('#cartPrice').should('contain', '12,99')
        .get('#cartAccompany').should('contain', 'Ich begleite dich!')
        .get('#cartPayed').should('have.value', '')
        .get('#cartPayedLater').check()
        .get('#cartPayedLater').should('be.checked')

    }),
    it('is filled but price can be filled later', () => {
        cy.get('#orderName').type('Robin Rieger')
        .get('#orderContent').type('Sushi-Menu 3')
        .get('#orderButton').click()
        .get('#cartName').should('contain', 'Robin Rieger')
        .get('#cartContent').should('contain', 'Sushi-Menu 3')
        .get('#cartPrice').should('have.value', '')
        .get('#cartPriceLater').type('12,99')
    })
})