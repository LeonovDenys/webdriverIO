class Base {
    async pauseShort() {
        await browser.pause(2000);
    }
    async pauseMedium() {
        await browser.pause(5000);
    }
    async pauseLong() {
        await browser.pause(8000);
    }
}

export default new Base()
