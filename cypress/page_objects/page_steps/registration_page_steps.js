const regPage = require('../page_elements/registration_page_elements.json');
import basePage from '../../page_objects/page_steps/base_steps';

class regPageSteps {

    verifyRegistrationPageLaunched(header){
        cy.xpath(regPage.registration_page_header).should('have.text',header);
        cy.log("Registration page launched successfully");
    }

    updateRegistrationDetails(username,password){
        cy.xpath(regPage.username_txtb).type(username)
        cy.xpath(regPage.password_txtb).type(password)
        cy.xpath(regPage.confirm_pass_txtb).type(password)
        basePage.getData('new user registration').then((data)=>{
            cy.xpath(regPage.first_name_txtb).type(data.firstname)
            cy.xpath(regPage.last_name_txtb).type(data.lastname)
            cy.xpath(regPage.address_txtb).type(data.address)
            cy.xpath(regPage.city_txtb).type(data.city)
            cy.xpath(regPage.state_txtb).type(data.state)
            cy.xpath(regPage.zip_txtb).type(data.zipcode)
            cy.xpath(regPage.phone_txtb).type(data.phone)
            cy.xpath(regPage.ssn_txtb).type(data.ssn)
        })            
        cy.log("New user registration details updated successfully");
    }

    clickOnRegisterButton(){
        cy.xpath(regPage.register_btn).click();
        cy.log("Clicked on register button");
        cy.wait(4000);
    }

}

export default new regPageSteps();