import App from "../page-objects/App"
import Base from "../page-objects/Base";
import Navbar from "../page-objects/components/Navbar";

describe("E2E-search", () => {

    it("Load Home page", async () => {
        await App.openHomePage();
        await (await $("#searchTerm")).waitForExist();
    })

    it("Submit searchbox", async () => {
        await Navbar.search("123");
        await Base.pauseShort();
        const resultsTitle = await $("h2");
        await resultsTitle.waitForExist();
        await (await expect(resultsTitle)).toHaveText("Search Results:");
    })

})
