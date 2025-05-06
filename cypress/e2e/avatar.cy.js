describe('Покупка аватара для персонажа', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://pokemonbattle.ru/login'); // Заходим на сайт покемонов
        cy.get('#k_email').type('USER_LOGIN@yandex.com');
        cy.get('#k_password').type('USER_PASSWORD');
        cy.get('.MuiButton-root').click();
        cy.wait(2000);

        cy.get('.header_card_trainer').click(); // Переходим в профиль
        cy.get('.k_mobile > :nth-child(5)').click(); // Переходим к смене аватара

        cy.get('.available > button').first().click(); // Находим первый доступный аватар и нажимаем Купить

        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4620869113632996'); // Вводим данные с карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1226');
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('NAME NAME');
        cy.wait(2000);
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // переходим к оплате
        
        cy.get('.style_1_base_input').type('56456'); // Вводим код из СМС
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Оплачиваем
        cy.wait(2000);
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Проверяем, что покупка прошла успешно
        cy.get('.payment_status_top_title').should('be.visible');

     })
 })
 
 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 