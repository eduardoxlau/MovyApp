describe('login', () => {
  it('shouldn`t sign in with wrong credencial', () => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password wrong');
    cy.contains('Iniciar sesión').click();
    cy.contains('Password is wrong');
  });
  it('should sign in', () => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.contains('Iniciar sesión').click();
    cy.contains('Home');
  });
});

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.contains('Iniciar sesión').click();
    cy.contains('Home');
  });
  it('should go to trailer path when clicked a card', () => {
    cy.get('[data-testid=card]:first').click();
    cy.url().should('include', '/trailer');
  });
});

describe('Trailer', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.contains('Iniciar sesión').click();
  });
  it('should play video', () => {
    cy.visit('/trailer/133');
    cy.get('[data-testid=play-video]').click();
    cy.get('iframe').should('have.attr', 'src').should('include', 'autoplay=1');
  });
  it('should add movie to list', () => {
    cy.visit('/trailer/133');
    cy.contains('add to list').click();
    cy.get('[data-testid=user-list]:first').click();
    cy.contains('Remove to list');
  });
  it('should remove movie to list', () => {
    cy.visit('/trailer/133');
    cy.contains('Remove to list').click();
    cy.contains('add to list');
  });
});

describe('My list', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.contains('Iniciar sesión').click();
  });
  it('should edit list', () => {
    cy.visit('/my-list');
    cy.get('[data-testid=edit-list]:first').click();
    cy.get('[data-testid=modal]');
    cy.get('[name="name"]:first').clear();
    cy.get(':nth-child(3) > .rounded').clear();
    cy.get('[name="name"]:first').type('my list');
    cy.get(':nth-child(3) > .rounded').type('description list');
    cy.get('input[type=submit]').click();
    cy.get('[data-testid=modal]').should('not.exist');
  });
});

describe('Profile', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('password');
    cy.contains('Iniciar sesión').click();
  });

  it('should edit profile', () => {
    cy.visit('/profile');
    cy.get('[name="full_name"]').clear();
    cy.get('[name="photo_path"').clear();
    cy.get('[name="full_name"]').type('admin');
    cy.get('[name="photo_path"').type('http://localhost:4000/profile.png');
    cy.get('input[type=submit]').click();
    cy.contains('Save Sucessfull');
  });
});

export {};
