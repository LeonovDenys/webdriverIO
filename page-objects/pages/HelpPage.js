import Base from "../Base"

class HelpPage {

    get title() {
        return $(".span8 > h3");
    }

    get transferFundsLink() {
        return $("*=transfer funds");
    }

    get payBillsLink() {
        return $("*=pay bills");
    }

    async clickOnTransferFunds() {
        await (await this.transferFundsLink).waitForExist();
        await (await this.transferFundsLink).click();
    }

    async clickOnPayBills() {
        await (await this.payBillsLink).waitForExist();
        await (await this.payBillsLink).click();
    }
}

export default new HelpPage();
