import * as Brevo from "@getbrevo/brevo";

let apiInstance;
function getApi() {
  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  if (!BREVO_API_KEY) throw new Error("Missing BREVO_API_KEY env var");
  if (!apiInstance) {
    apiInstance = new Brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, BREVO_API_KEY);
  }
  return apiInstance;
}

export async function sendEmail({ to, subject, htmlContent, replyTo }) {
  const SITE_FROM_EMAIL = process.env.SITE_FROM_EMAIL;
  if (!SITE_FROM_EMAIL) throw new Error("Missing SITE_FROM_EMAIL env var");
  const sendSmtpEmail = new Brevo.SendSmtpEmail();
  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = { email: SITE_FROM_EMAIL };
  sendSmtpEmail.to = Array.isArray(to) ? to.map((email) => ({ email })) : [{ email: to }];
  if (replyTo) sendSmtpEmail.replyTo = { email: replyTo };
  return getApi().sendTransacEmail(sendSmtpEmail);
}

export function getAdminEmail() {
  const ADMIN_TO_EMAIL = process.env.ADMIN_TO_EMAIL;
  if (!ADMIN_TO_EMAIL) throw new Error("Missing ADMIN_TO_EMAIL env var");
  return ADMIN_TO_EMAIL;
}


