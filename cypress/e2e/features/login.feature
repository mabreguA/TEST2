Feature: Login a AFEX

    Realizar las validaciones del Login en AFEX

    Scenario: Ingresamos a AFEX y validamos los mensajes al no ingresar contraseña y correo

        Given el usuario ingresa al login AFEX (https://afexconnect.com/iniciar-sesion)
        And Ingresa su <email> en el campo correspondiente 
        And Ingresa su <contraseña> en el campo correspondiente 
        And Pasamos el cursor sobre el boton de "Ingresar"
        When Darle click en el boton "Ingresar"
        Then se muestra el mensaje de "Email es requerido."
        Then se muestra el mensaje de "La contraseña es requerida."

     Scenario: Ingresamos a AFEX y validamos los mensajes al ingresar correo o contraseña incorrecta

        Given el usuario ingresa al login AFEX (https://afexconnect.com/iniciar-sesion)
        And Ingresa su <email> en el campo correspondiente 
        And Ingresa su <contraseña> en el campo correspondiente 
        And Pasamos el cursor sobre el boton de "Ingresar"
        When Darle click en el boton "Ingresar"
        Then se muestra el mensaje de "Email o contraseña incorrecto"

     Scenario: Ingresamos a AFEX de manera exitosa y validar que nos direccione al HOME de AFEX

        Given el usuario ingresa al login AFEX (https://afexconnect.com/iniciar-sesion)
        And Ingresa su <email> en el campo correspondiente 
        And Ingresa su <contraseña> en el campo correspondiente 
        And Pasamos el cursor sobre el boton de "Ingresar"
        When Darle click en el boton "Ingresar"
        Then se muestra el mensaje de "¡Bienvenidos a Afex Connect!"   

    Scenario: Realizar el registro de usuario en AFEX

        Given el usuario ingresa al login AFEX (https://afexconnect.com/iniciar-sesion)
        And click en el vinculo "Regístrate aquí"
        And Ingresa su <email> en el campo correspondiente 
        Then Vuelve a ingresar el <email>
        And Ingresa su <RUT> en el campo correspondiente 
        And Ingresa su <contraseña> en el campo correspondiente 
        Then Vuelve a ingresar el <contraseña>
        And Pasamos el cursor sobre el boton de "Registrarse"
        When Darle click en el boton "Registrarse"
        Then se muestra el mensaje del pop-up "¡Haz dado el primer paso!"
