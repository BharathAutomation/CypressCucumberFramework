const homePage = require('../page_elements/home_page_elements.json');
const config = require('../../fixtures/config.json');


class basePage {

    launchApplication(){
        cy.visit(config.url);
        cy.title().should('eq',config.title);
        cy.log("Application launched successfully")
    }

    getData(testcase_name){
        return cy.fixture('testdata.json').then((test_data)=>{
            const testcase = test_data.find(test => test.testname === testcase_name);
            return testcase.data;
        })
       
    }
}

export default new basePage();