import {mailtrapClient, sender} from "./mailtrap.config.js";
import {
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    VERIFICATION_EMAIL_TEMPLATE
} from "./emailTemplates.js";

export const sendVerificationEmail = async(email, verificationToken) => {
    const recipient = [{email}]

    try{
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject :"Verify your email",
            html:VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category:"Email Verification"
        })
        console.log("Email sent successfully", response)
    } catch(error){
        console.log("Error sending verification", error )
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendWelcomeEmail = async(email, name) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to: recipient,
            template_uuid: "58c0a932-7fae-4c7f-ba28-90b60b6d910d",
            template_variables:{
                "company_info_name": "Ramesh Company",
                "name":name
            }
        });
        console.log("Welcome email sent successfully", response)
    } catch(error){
        console.log("Error sending verification email", error);
        throw new Error(`Error sending welcome email:${error}`);
    }
}

export const sendPasswordResetEmail = async(email, resetURL) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            subject:"Reset Password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset"
        })
    }catch(error){
        console.log("Error sending password reset email:", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try{
        const response = await mailtrapClient.send({
           from:sender,
            to:recipient,
            subject:"Password Reset Success",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category:"Password Reset",
        });
        console.log("Password reset email sent successfully", response)
    }catch(error){
        console.log("Error sending verification email", error);
        throw new Error(`Error sending verification email: ${error}`);
    }
}



