import Base from "../Base"

class FeedbackPage {
    get form() {
        return $("form")
    }

    get name() {
        return $("#name");
    }

    get email() {
        return $("#email");
    }

    get subject() {
        return $("#subject");
    }

    get comment() {
        return $("#comment");
    }

    get submitButton() {
        return $("input[type='submit']");
    }

    async fillForm(name, email, subject, comment) {
        await (await this.name).setValue(name);
        await (await this.email).setValue(email);
        await (await this.subject).setValue(subject);
        await (await this.comment).setValue(comment);
        await (await this.submitButton).click();
    }

    async formIsVisible() {
        await (await this.form).waitForExist();
    }
}

export default new FeedbackPage();
