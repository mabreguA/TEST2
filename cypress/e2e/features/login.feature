Feature: Login a QSERVUS

    Realizar las validaciones del Login en QSERVUS

    Scenario: Ingreso correcto a QSERVUS
        Given Ingreso a la pagina de Login
        When  Ingreso el correo y password
        And   Hago click en el boton Ingresar
        Then  Valido el acceso al Home

    Scenario: Ingresamos con un correo no registrado
        Given Ingreso a la pagina de Login
        When  Ingreso el correo no registrado y password
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo


    Scenario: Ingresamos con un correo no valido
        Given Ingreso a la pagina de Login
        When  Ingreso el correo no valido y password
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo

    Scenario: Ingresamos con el password incorrecto
        Given Ingreso a la pagina de Login
        When  Ingreso el correo y password incorrecto
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo

    Scenario: Ingresamos con el correo sin password
        Given Ingreso a la pagina de Login
        When  Ingreso el correo y password vacio
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo

    Scenario: Ingresamos con el password sin correo
        Given Ingreso a la pagina de Login
        When  Ingreso el correo vacio y password
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo

    Scenario: Ingresamos sin correo y sin password
        Given Ingreso a la pagina de Login
        When  Ingreso el correo vacio y password vacio
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo



    Scenario: Realizamos el fallido de una cuenta y validamos que se bloquee la cuenta
        Given Ingreso a la pagina de Login
        When  Ingreso el correo vacio y password vacio
        And   Hago click en el boton Ingresar
        Then  Valido el mensaje informativo