const homePage = require('../page_elements/home_page_elements.json');


class homePageSteps {

    verifyLogo(){
        cy.xpath(homePage.logo_img).should('be.visible');
        cy.log("Application logo is displayed successfully")
    }

    verifyCaption(caption){
        cy.xpath(homePage.caption_lbl).should('have.text',caption);
        cy.log("Application caption is displayed successfully")
    }

    verifyHomePageLeftMenu(){
        cy.xpath(homePage.solutions_link).should('be.visible');
        cy.xpath(homePage.aboutUs_link).should('be.visible');
        cy.xpath(homePage.services_link).should('be.visible');
        cy.xpath(homePage.products_link).should('be.visible');
        cy.xpath(homePage.locations_link).should('be.visible');
        cy.xpath(homePage.admin_page_link).should('be.visible');
        cy.log("Application left menu is displayed successfully");
    }

    verifyLoginHeader(data){
        cy.xpath(homePage.login_header_lbl).should('have.text',data.header);
        cy.log("Application login header is displayed successfully");
    }

    enterCredentials(username,password){
        cy.xpath(homePage.username_txtb).type(username);
        cy.xpath(homePage.password_txtb).type(password);
        cy.log("Credentials Entered Successfully");
    }

    clickOnLoginButton(){
        cy.xpath(homePage.login_btn).click();
        cy.log("Clicked on login button");
    }

    navigateToRegistrationPage(){
        cy.xpath(homePage.register_link).click();
        cy.log("Navigated to registration page");
    }

    navigateToForgotLoginInformationPage(){
        cy.xpath(homePage.forgot_password_link).click();
        cy.log("Navigated to forgot login information page");
    }

    getLoginError(){
        cy.xpath(homePage.login_error_msg).should('be.visible');
        cy.log("Login error message displayed due to invalid credentials");

    }

    
}

export default new homePageSteps();