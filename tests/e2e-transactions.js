import App from '../page-objects/App';
import LoginPage from '../page-objects/pages/LoginPage';
import Navbar from '../page-objects/components/Navbar';


describe("E2E - transactions", () => {


    it("Login into app", async () => {
        await App.openLogin();
        // await LoginPage.formIsVisible();
        // await LoginPage.fillForm("username", "password");
        // await LoginPage.submitForm();
        await LoginPage.login("username", "password");
        await Navbar.insideNavbarIsVisible();
    })


    it("Transaction", async () => {
        await (await $("#account_activity_tab > a")).click();
        await (await $("#tabs > ul > li:nth-child(2)")).click();
        await browser.pause(1000);
        await (await $("#aa_description")).setValue("Test");
        await (await $("button[type='submit']")).click();
        await expect(await $("#filtered_transactions_for_account > div")).toHaveText("No results.")
        await browser.pause(4000);
    })
})