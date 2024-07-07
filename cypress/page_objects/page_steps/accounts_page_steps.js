const accountsPage = require ('../page_elements/accounts_page_elements.json');

class accountsPageSteps {

    verifyAccountServicesPageIsLaunched(){
        cy.xpath(accountsPage.welcome_msg).should('be.visible');
        cy.log("Account Services page is launched successfully");
    }

    logoutFromApplication(){
        cy.xpath(accountsPage.logout_link).should('be.visible');
        cy.xpath(accountsPage.logout_link).click();
        cy.log("Application logout is successful");
    }

}

export default new accountsPageSteps();