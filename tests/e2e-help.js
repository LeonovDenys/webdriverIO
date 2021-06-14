import LoginPage from "../page-objects/pages/LoginPage";
import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";
import Base from "../page-objects/Base";
import HelpPage from "../page-objects/pages/HelpPage";


describe("E2E Help", () => {


    it("Login into app", async () => {
        await App.openLoginPage();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    })


    it("Load help content", async () => {
        await Navbar.clickSettings();
        await Base.pauseShort();
        await Navbar.clickHelpButton();
        const title = await HelpPage.title;
        await expect(title).toHaveText("How do I log into my account?");
        await HelpPage.clickOnTransferFunds();
        await expect(title).toHaveText("How do I transfer funds?");
        await HelpPage.clickOnPayBills();
        await expect(title).toHaveText("How do I pay bills?");
    })
})
