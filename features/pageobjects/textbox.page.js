import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class TextboxPage extends Page {
    url = 'text-box'
    /**
     * define selectors using getter methods
     */
    get inputUserName () { return $('#userName') }
    get inputUserEmail () { return $('#userEmail') }
    get inputCurrentAddress () { return $('#currentAddress') }
    get inputPermanentAddress () { return $('#permanentAddress') }
    get buttonSubmitFormulary () { return $('#submit') }

    get fieldName () { return $('#output #name') }
    get fieldEmail () { return $('#output #email') }
    get fieldCurrentAddress () { return $('#output #currentAddress') }
    get fieldPermanentAddress () { return $('#output #permanentAddress') }

    async fillFormularyAndSubmit(table) {
        for (var key in table){
            switch (key) {
                case 'userName': 
                    await this.inputUserName.setValue(table[key]);
                    break;
                case 'userEmail':
                    await this.inputUserEmail.setValue(table[key]);
                    break;
                case 'currentAddress': 
                    await this.inputCurrentAddress.setValue(table[key]);
                    break;
                case 'permanentAddress':
                    await this.inputPermanentAddress.setValue(table[key]);
                    break;
                default:
                    throw `non existent field selected for "${ key }"`
            }
        }
        
        await this.buttonSubmitFormulary.scrollIntoView()
        await this.buttonSubmitFormulary.click()
    }
 
    async checkReturnedText(table) {
        for (var key in table){
            switch (key) {
                case 'userName': 
                    await expect(this.fieldName).toHaveText(table[key]);
                    break;
                case 'userEmail': 
                    await expect(this.fieldEmail).toHaveText(table[key])
                    break;
                case 'currentAddress': 
                    await expect(this.fieldCurrentAddress).toHaveText(table[key])
                    break;
                case 'permanentAddress': 
                    await expect(this.fieldPermanentAddress).toHaveText(table[key])
                    break;
                default:
                    throw `non existent field selected for "${ key }"`
            }
        }
        await driver.execute("document.getElementById('output').style.color = 'red'");
        await browser.pause(2000)
    }
    
    open () {
        return super.open(this.url);
    }
}

export default new TextboxPage();
