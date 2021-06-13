import LoginPage from "../page-objects/pages/LoginPage";
import App from "../page-objects/App";
import Navbar from "../page-objects/components/Navbar";


describe("E2E Currency Exchange", () => {


    it("Login into app", async () => {
        await App.openLogin();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    })


    it("Pay", async () => {
        await (await $('#pay_bills_tab')).click();
        await (await $('#sp_payee')).selectByAttribute('value', "bofa");
        await (await $('#sp_account')).selectByVisibleText("Loan");
        await (await $('#sp_amount')).setValue("223");
        await browser.pause(1000);
        await (await $("#sp_description")).setValue("62fd5dfdf123``````");
        await browser.pause(1000);
        await (await $("#sp_date")).setValue("2020-03-31");
        await (await $("#pay_saved_payees")).click();
        await browser.pause(1000);
        await expect(await $("#alert_content")).toHaveText("The payment was successfully submitted.")
    })
})