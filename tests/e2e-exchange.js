import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';

describe("E2E Currency Exchange", () => {


    it("Login into app", async () => {
        await App.openLogin();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    })


    it("Make exchange", async () => {
        await (await $("#pay_bills_tab")).click();
        await (await $("#tabs > ul > li:nth-child(3) > a")).click();
        await (await $("#pc_currency")).waitForExist();
        await (await $("#pc_currency")).selectByAttribute('value', "CAD");
        await browser.pause(1000);
        await (await $("#pc_amount")).setValue("333");
        await browser.pause(1000);
        await (await $("#pc_inDollars_true")).click();
        await browser.pause(1000);
        await (await $("#pc_calculate_costs")).click();
        await browser.pause(1000);
        await (await $("#purchase_cash")).click();
        await browser.pause(1000);
        await expect(await $("#alert_content")).toHaveText(
            "Foreign currency cash was successfully purchased."
        );
    })
})