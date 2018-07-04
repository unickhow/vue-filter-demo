
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

	it('every area match results', () => {
		let count = 0
		for(let i=0; i<12; i++) {
			const currentArea = cy.get(`.area_filter > ul > li:nth-child(${i + 1}) > label`)
			cy.get(`:nth-child(${i + 1}) > label > .counts`).then(($count) => {
				count += parseInt($count.text())
				currentArea.click()
				cy.get('.filter_footer > p').should('have.text', `共 ${count} 個站點`)
			})
		}
	})

	it('clear tags', () => {
		cy.get(`.area_filter > ul > li > label`).click({multiple: true})
		cy.get('.all_tags > ul > li').should('have.length', 12)
		cy.get('.filter_footer > a').should('be.visible')
		cy.get('.filter_footer > a').click()
		cy.get('.filter_footer > a').should('not.be.visible')
	})

	it('pagination pages', () => {
		cy.get('.filter_footer > p').then(($totalCount) => {
			const totalCount = $totalCount.text().split(' ')[1]
			cy.get(':nth-child(8) > a').should('have.text', Math.ceil(totalCount/10).toString())
		})
	})
})