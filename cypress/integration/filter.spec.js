
context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
	})

	it('search key word', () => {
		cy.get('.search_input > input').type('東南').should('have.value', '東南')
	})

	it('click a station show map', () => {
		cy.get(':nth-child(1) > .bike_brief').click()
		cy.get('#map').should('have.class', 'open')
  })

	it('close map', () => {
		cy.get(':nth-child(1) > .bike_brief').click()
		cy.get('#map').should('have.class', 'open')
		cy.get('#close_map').click()
		cy.get('#map').should('not.be.visible')
	})

	// it('every area match results', () => {
	// 	for(let i=0; i<12; i++) {
	// 		let stopCounts = cy.get(':nth-child(1) > label > .counts')
	// 		cy.get('.area_filter > ul > li > label').click()
	// 	}
	// })
})