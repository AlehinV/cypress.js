describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // заходим на сайт

         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // нажал войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу текст успешной авторизации
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
         
     })

     it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт

        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqa'); // ввели неверный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу текст неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
        
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт

        cy.get('#mail').type('qastudio@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю, что вижу текст неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
        
    })

    it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт

        cy.get('#mail').type('germandolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю, что вижу текст неуспешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
        
    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт

        cy.get('#forgotEmailButton').click(); // Нажали на кнопку Забыл пароль
        cy.get('#mailForgot').type('qastudio@dolnikov.ru'); // Вводим почту
        cy.get('#restoreEmailButton').click(); // Нажимаем Отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю текст отправки кода на почту
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
        
    })

    it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю, что вижу текст успешной авторизации
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю         
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик есть и он виден
        
    })
 })
 
 



 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome