import nodemailer from "nodemailer";

export const sendEmail = async (
  EmailTo: string,
  EmailSubject: string,
  EmailText: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "mail.rhythmmedicalint.com",
      port: 465,
      secure: true,
      auth: { user: "admin@rhythmmedicalint.com", pass: "Rhythm.1234" },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: "Rhythm Medical International <admin@rhythmmedicalint.com>",
      to: EmailTo,
      subject: EmailSubject,
      text: EmailText,
      html: `<div style="font-family: Arial, sans-serif; padding: 20px;">
                    <h2 style="color: #333;">${EmailSubject}</h2>
                    <p style="color: #666;">${EmailText}</p>
                    <p style="color: #999; font-size: 14px;text-align:center;margin:40px 0px">From Rhythm Medical International admin@rhythmmedicalint.com</p>
                </div>`,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error) {
    return error;
  }
};
