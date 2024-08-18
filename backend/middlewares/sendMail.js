import { createTransport } from 'nodemailer'

export const sendMail = async (text) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        name:"gmail.com",
        port: 567,
        secure:true,
        service:"gmail",
        auth: {
            user: process.env.MYMAIL,
            pass: process.env.MYMAIL_PASSWORD,
        },
    
    });
    await transporter.sendMail({
        subject:"Contact Request from portfolio",
        to:process.env.MYMAIL,
        from:process.env.MYMAIL,
        fromPassword:process.env.MYMAIL,
        text,
    })
}