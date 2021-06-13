import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage"
import Navbar from "../page-objects/components/Navbar"


describe("E2E Tests - Login/Logout", () => {

    //WRONG CREDS
    it("Should NOT login with invalid creds", async () => {
        await App.openHomePage();
        await Navbar.clickSignIn();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("invalid username", "invalid password")
        await LoginPage.submitForm();
        await browser.pause(1000);
        const message = await LoginPage.error;
        await (await expect(message)).toHaveText("Login and/or password are wrong.");
    })

    //LOGIN   
    it("Should login with valid creds", async () => {
        await App.openHomePage();
        await Navbar.clickSignIn();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("username", "password")
        await LoginPage.submitForm();
        await Navbar.insideNavbarIsVisible();
    })

    //LOGOUT
    it("Should logout", async () => {
        await App.logout();
        await browser.pause(1000);
        await Navbar.signInButtonIsVisible();
    })
})