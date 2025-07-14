import nodemailer from "nodemailer"
import { welcomeEmailTemplate } from "./emailTemplates/welcomeTemplate.js"
import { accountDeleted } from "./emailTemplates/accountDeleteTemplate.js";
import { changePassword } from "./emailTemplates/changePasswordTemplate.js";

// Creating Transporter

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
})


// Creating General Purpose Sender

export const sendEmail = async (to, subject, html) => {
    if (!to) {
        console.error("Email recipient is missing.");
        return;
    }
    try {
        await transporter.sendMail({
            from: `"BizLink" <${process.env.SENDER_EMAIL}>`,
            to,
            subject,
            html,
        });
    } catch (err) {
        console.error("Failed to send email:", err.message);
    }
};



// Specific Email Types

export const sendWelcomeEmail = (username, to) => {
    sendEmail(to, "Welcome to BizLink a Leading B2B Platform", welcomeEmailTemplate(username))
}

export const goodBye = (username, to) => {
    sendEmail(to, "Your BizLink Account has been Deleted", accountDeleted(username))
}

export const passwordChange = (username, to) => {
    sendEmail(to, "Successfully Changed Password of BizLink Account", changePassword(username))
}