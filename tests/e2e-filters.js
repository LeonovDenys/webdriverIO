import App from "../page-objects/App"
import InsideNavbar from "../page-objects/components/InsideNavbar";
import Navbar from "../page-objects/components/Navbar";
import FiltersPage from "../page-objects/pages/FiltersPage";
import LoginPage from "../page-objects/pages/LoginPage";

describe("E2E- filters", () => {

    it("Login", async () => {
        await App.openLoginPage();
        await LoginPage.formIsVisible();
        await LoginPage.fillForm("username", "password");
        await LoginPage.submitForm();
        await Navbar.insideNavbarIsVisible();
    })

    it("Transaction filter should work", async () => {
        await InsideNavbar.clickAccountActivityTab();
        await InsideNavbar.clickFiltersLink();
        await FiltersPage.fillDescription("test");
        await FiltersPage.submitForm();
        await FiltersPage.filteredFieldIsVisible();
        const message = await FiltersPage.message;
        await (await expect(message)).toHaveText("No results.");
    })
})
