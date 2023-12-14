import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = process.env.EMAIL_PORT;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;
const EMAIL_AUTH_CODE = process.env.EMAIL_AUTH_CODE;

// Test
// const EMAIL_FROM_TEST = "aarynlu@qq.com";
// const EMAIL_TO_TEST = "Lrr_0x3F4@163.com";
// const ransporterTest = nodemailer.createTransport({
//   service: "qq",
//   secure: true,
//   auth: {
//     user: "aarynlu@qq.com",
//     pass: "xxxxxxxxxxxxxx",
//   },
// });

const transporter = nodemailer.createTransport({
  service: "qq",
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: EMAIL_AUTH_CODE,
  },
});

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.info(`reqInfo: name: ${name}, email: ${email}, message: ${message}`);

  try {
    await transporter.sendMail({
      from: EMAIL_FROM as string,
      to: EMAIL_TO as string,
      subject: `[0x3f4.run] Received a email from [${name} - ${email}]`,
      text: message as string,
    });
    return NextResponse.json({ code: 0, isSuccess: true, errMsg: "" });
  } catch (e) {
    if (e instanceof Error) {
      console.error(`Failed to send email: ${e.message}`);
    }
    return NextResponse.json({ code: 1001, isSuccess: false, errMsg: "Internal server error: Failed to send email." });
  }
}
