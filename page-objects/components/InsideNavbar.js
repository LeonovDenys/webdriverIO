import Base from "../Base"

class insideNavbar {
    get activityTab() {
        return $("#account_activity_tab");
    }

    get filtersLink() {
        return $("#tabs > ul > li:nth-child(2) > a");
    }

    async clickAccountActivityTab() {
        await (await this.activityTab).waitForExist();
        await (await this.activityTab).click();
    }

    async clickFiltersLink() {
        await (await this.filtersLink).waitForExist();
        await (await this.filtersLink).click();
    }
}

export default new insideNavbar();
