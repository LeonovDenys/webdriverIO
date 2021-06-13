import App from "../page-objects/App";
import Base from "../page-objects/Base";
import FeedbackPage from "../page-objects/pages/FeedbackPage";


describe("E2E Tests - Feedback", () => {

    it("Load feedback form", async () => {
        await App.openFeedbackPage();
        await FeedbackPage.formIsVisible();
    })

    it("Submit feedback form", async () => {
        await FeedbackPage.fillForm("Denys", "denys@email.com", "New Subject", "My comment is here");
        await expect(browser).toHaveUrl("http://zero.webappsecurity.com/sendFeedback.html");
    })
})
