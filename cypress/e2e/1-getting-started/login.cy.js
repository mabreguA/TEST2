/// <reference types="cypress" />
describe('Pagina de Login AFEX', () => {
    beforeEach(() => {
        cy.visit('https://afexconnect.com/iniciar-sesion')
    })

    it('Ingresamos a AFEX y validamos los mensajes al no ingresar contraseña y correo', () => {

       cy.get('.mb-2 > .signin-form__input').click().type(' ')
       cy.wait(2000)

       cy.get('.mt-2 > .col-sm-12 > .signin-form__input').click().type(' ')
       cy.wait(2000)

       cy.contains('Ingresar').click()
       cy.wait(5000)

       cy.contains('Email es requerido.')
       cy.wait(1000)
       cy.contains('La contraseña es requerida.')
        
    })

    it('Ingresamos a AFEX y validamos los mensajes al ingresar correo o contraseña incorrecta', () => {

        cy.get('.mb-2 > .signin-form__input').click().type('prueba1@prueba.com')
        cy.wait(2000)
 
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').click().type('123789')
        cy.wait(2000)
 
        cy.contains('Ingresar').click()
        cy.wait(5000)
 
        cy.contains('Email o contraseña incorrecto.')
  
     })

     it('Ingresamos a AFEX de manera exitosa y validar que nos direccione al HOME de AFEX', () => {

        cy.get('.mb-2 > .signin-form__input').click().type('marcelino.testing@gmail.com')
        cy.wait(2000)
 
        cy.get('.mt-2 > .col-sm-12 > .signin-form__input').click().type('123456')
        cy.wait(2000)
 
        cy.contains('Ingresar').click()
        cy.wait(5000)
 
        cy.contains('¡Bienvenidos a Afex Connect!')
  
     })

     it('Realizar el registro de usuario en AFEX', () => {

        cy.get('.text-right > .signin-form-link').click()
        cy.wait(3000)
       
        cy.get('.mt-3 > :nth-child(1) > .signin-form__input').click().type('rijijif631@nasmis.com') //CORREO
        cy.wait(3000)

        cy.get('.mt-3 > :nth-child(2) > .signin-form__input').click().type('rijijif631@nasmis.com')//Validar correo ingresado
        cy.wait(1000)

        cy.get(':nth-child(2) > .mb-2 > .signin-form__input').click().type('12858655-5') //RUT
        cy.wait(1000)

        cy.get(':nth-child(3) > :nth-child(1) > .signin-form__input').click().type('123456')//contraseña


        cy.get(':nth-child(3) > :nth-child(2) > .signin-form__input').click().type('123456')//Confirma contraseña
        cy.wait(1000)

        //cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()
        //cy.get('.recaptcha-checkbox-border').click()
        cy.get('.recaptcha-checkbox ').click()//Click sobre el captcha
        cy.wait(1000)

        cy.get('.signin-form__button').click() //Registrarme
        cy.wait(5000)

  
     })


})