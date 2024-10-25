// Looking to send emails in production? Check out our Email API/SMTP product!
import { MailtrapClient } from "mailtrap"
import dotenv from "dotenv";

dotenv.config();

export const mailtrapClient = new MailtrapClient({
    // endpoint: process.env.MAILTRAP_ENDPOINT,
    token: process.env.MAILTRAP_TOKEN,
    testInboxId: process.env.Test_INBOX_ID,
});

export const sender = {
    email: "mailtrap@dramesh.com.np",
    name: "Mailtrap Test",
};