import Base from '../Base'

class Navbar  {
    get signInButton () {
        return $("#signin_button");
    }

    get searchBox() {
        return $("#searchTerm");
    }

    get settingsButton() {
        return $(".icon-cog");
    }

    get insideNavbar() {
        return $(".nav.nav-tabs");
    }

    get helpButton() {
        return $("#help_link");
    }

    async clickSignIn() {
        await (await this.signInButton).waitForExist();
        await (await this.signInButton).click();
    }

    async insideNavbarIsVisible() {
        await (await this.insideNavbar).waitForExist();
    }

    async signInButtonIsVisible() {
        await (await this.signInButton).waitForExist();
    }

    async clickSettings() {
        await (await this.settingsButton).waitForExist();
        await (await this.settingsButton).click();
    }

    async clickHelpButton() {
        await (await this.helpButton).waitForExist();
        await (await this.helpButton).click();
    }

    async search(text) {
        await (await this.searchBox).waitForExist();
        await (await this.searchBox).setValue(text);
        await browser.keys("Enter");
    }
}

export default new Navbar();
