const email   = require( 'nodemailer' );

const smtpConfig = email.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.LOTTO_MAIL,
    pass: process.env.LOTTO_TOKEN
  }
});

module.exports = {
  smtpConfig,
  emailOpts: reqBody => {
    const template = `
      Name: ${reqBody.name}<br />
      Email: ${reqBody.email}<br />
      Message: ${reqBody.message}      
    `;
    return {
      from: reqBody.email,
      to: process.env.GMAIL_NAME,
      subject: 'Web form message',
      html: template
    };
  }
};
