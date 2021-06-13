import Base from "../Base";

class FiltersPage {
    get descriptionField() {
        return $("#aa_description");
    }

    get submitButton() {
        return $("button[type='submit']")
    }

    get filteredField() {
        return $("#filtered_transactions_for_account")
    }

    get message() {
        return $(".well")
    }

    async fillDescription(text) {
        await (await this.descriptionField).waitForExist();
        await (await this.descriptionField).setValue(text);
    }

    async submitForm(text) {
        await (await this.submitButton).waitForExist();
        await (await this.submitButton).click();
    }

    async filteredFieldIsVisible() {
        await (await this.filteredField).waitForExist();
    }

}

export default new FiltersPage();
