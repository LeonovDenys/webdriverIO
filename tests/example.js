import {short, medium, long} from "../lib/timeout";
import {mobile, tablet, desktop} from "../lib/devices";
describe('Blablabla', () => {
    it('Load Example Website', async () => {
        await browser.url('http://www.example.com');
        await browser.pause(1000);
        await expect(browser).toHaveUrl('http://www.example.com/');
        await expect(browser).toHaveTitle('Example Domain');
    })
    it("H1 should be visible", async () => {
        // Get selector >>> variable
        const h1 = $('h1');
        //assertion
        await expect(h1).toBeDisplayed();
    })
    it("P should be visible", async () => {
        // Get selector >>> variable
        const p = $('p');
        //assertion
        await expect(p).toBeDisplayed();
    })
    it("Display the link", async () => {
        // Get link variable
        const link = $('a');
        //assertion
        await expect(link).toBeDisplayed();
    })
    it("Check the link", async () => {
        // Get link variable
        const link = await $('a');
        //assertion
        await expect(link).toHaveLink("https://www.iana.org/domains/example");
    })
    it("Check Element Text", async () => {
        // Get text variable
        const text = await (await $('h1')).getText();
        const element = await $("h1");
        await expect(element).toHaveText(text);
    })
    it("Assert Attribute", async () => {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const button = await $("#submit-button");
        await browser.pause(3000);
        await expect(button).toHaveAttrContaining("type", 'submit');
        browser.saveScreenshot("assertAttr.png")
    })
    it("Set Mobile View", async () => {
       //TODO
       await browser.setWindowSize(mobile[0], mobile[1]);
       await browser.pause(medium);
    })
    it("Set Tablet View", async () => {
       //TODO
       await browser.setWindowSize(tablet[0], tablet[1]);
       await browser.pause(medium);
    })
    it("Set Desktop View", async () => {
       //TODO
       await browser.setWindowSize(desktop[0], desktop[1]);
       await browser.pause(medium);
    })
})
