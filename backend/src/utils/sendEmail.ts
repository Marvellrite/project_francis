import { createTransport, SendMailOptions } from "nodemailer";
import log from "./logger";

const sendEmail = async (
  text: string,
  email_address: string,
  subject: string
) => {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "melodyozuru087@gmail.com",
      pass: "",
    },
  });

  const MailOptions: SendMailOptions = {
    from: '"RSU E-VOTING" <melodyozuru087@gmail.com>',
    to: email_address,
    subject,
    text,
  };

  await transporter.sendMail(MailOptions);
  log.info("Email Sent Successfully");
};

export default sendEmail;
