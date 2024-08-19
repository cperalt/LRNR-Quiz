describe('homepage tests', () => {

  it('visits my hosted project website', () => {
    cy.visit('https://lrnr-quiz-frontend.vercel.app/')
  })
  
  
  it('finds the content Quiz Generator', () => {
    cy.visit('https://lrnr-quiz-frontend.vercel.app/')
    cy.contains('Quiz Generator')
  })
  
  it('clicks the link "Quiz Generator"', () => {
    cy.visit('https://lrnr-quiz-frontend.vercel.app/')
    cy.contains('Quiz Generator').click()
  })
  
  it('clicking "Quiz Generator" navigates to new url', () => {
    cy.visit('https://lrnr-quiz-frontend.vercel.app/')
    cy.contains('Quiz Generator').click()
    cy.url().should('include', '/quiz-generator')
  })
  
})