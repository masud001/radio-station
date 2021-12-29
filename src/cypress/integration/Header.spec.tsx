export {};
describe('Header Component Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Header Should have 3 elements', () => {
		cy.get('#header').children();
	});

	it('Header should have click function to turn off Radio Station', () => {
		cy.get('#back_arrow').click();
		cy.get('#switchOnOff').click();
	});
});
