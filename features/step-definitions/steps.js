import { Given, When, Then } from '@cucumber/cucumber';

import TextboxPage from '../pageobjects/textbox.page';

import dataBoxDataJson from '../../utils/repository/textBoxData.json'

const pages = {
    textbox: TextboxPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I submit textbox formulary$/, async() => {
    await TextboxPage.fillFormularyAndSubmit(dataBoxDataJson["request_data"])
});

Then(/^I check the values returned are correct$/, async() => {
    await TextboxPage.checkReturnedText(dataBoxDataJson["response_data"])
});

  
