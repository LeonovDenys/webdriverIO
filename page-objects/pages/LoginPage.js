import Base from "../Base"

class LoginPage {
    get loginForm() {
        return $("#login_form");
    }

    get usernameInput() {
        return $("#user_login");
    }
    get passwordInput() {
        return $("#user_password");
    }
    get submitButton() {
        return $("input[type='submit']");
    }

    async formIsVisible() {
        await (await this.loginForm).waitForExist();
    }

    async fillForm(username, password) {
        await (await this.usernameInput).setValue(username);
        await (await this.passwordInput).setValue(password);
    }

    async submitForm() {
        await (await this.submitButton).click();
    }

    get error() {
        return $(".alert.alert-error");
    }

    async login(username, password) {
        await (await this.loginForm).waitForExist();
        await (await this.usernameInput).setValue(username);
        await (await this.passwordInput).setValue(password);
        await (await this.submitButton).click();
    }
}

export default new LoginPage()
