export {};

describe('App component test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Should have on App Component', () => {
		cy.get('#app').children();
		cy.get('#app').find('header');
		cy.get('#app').find('ul').children();
	});

	it('span elements', () => {
		cy.get('span');
	});

	it('Footer should be empty before click the stations', () => {
		cy.get('#footer_wrapper').should('be.empty');
	});

	it('Should have clickable event on li tag', () => {
		cy.get('#single_station').click();
	});

	it('Should visible footer content after click', () => {
		cy.get('#single_station').click();
		cy.get('#footer').should('be.visible');
	});
});
