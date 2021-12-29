export {};

describe('Station Component Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('Station Should have 2 elements', () => {
		cy.get('#single_station').children();
	});
	it('span elements', () => {
		cy.get('span');
	});

	it('Station Should have on click function to open media player', () => {
		cy.get('#radio').click();
		cy.get('#single_station').find('#media_player').should('be.visible');
	});
	it('Station Should have on click function to close media player', () => {
		cy.get('#radio').contains('FM').click({ force: true });
	});
});
