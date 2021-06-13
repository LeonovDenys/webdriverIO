import { short } from "../lib/timeout";
describe("Browser Actions", () => {
    it("Inputs", async () => {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const input = await $("#developer-name");
        await input.waitForExist();
        //await input.addValue('Mike');
        //await browser.pause(short);
        //await input.clearValue('Mike');
        //await browser.pause(short);
        await input.setValue('Mike');
        await browser.pause(short);
        const btn = await $("#populate");
        await btn.waitForExist();
        //await btn.doubleClick();
        //await browser.pause(short);
    })
    it("Radio", async () => {
        const radio = await $("#linux");
        await radio.waitForExist();
        await radio.click();
        await browser.pause(short)
    })
    it("Checkbox", async () => {
        const select = await $("#preferred-interface");
        await select.waitForExist();
        await select.selectByVisibleText('Both');
        //await select.click();
        await browser.pause(short)
    })
})    