'use strict';

var express = require('express');
var data    = require('./data.json');
var email   = require('nodemailer');
var router  = express.Router();


/* GET home page. */
router.get('/', function(request, response) {

  var dataToRender = {
    title: 'Byverdu',
    name: 'Albert Vallverdu',
    data: data.webs,
    icons: data.icons
  };

  response.render('index', dataToRender);

});

console.log(process.env.USER_NAME);
router.post('/',function(request,response){

	var mailOpts, smtpConfig;

  smtpConfig = email.createTransport("SMTP", {
  service: "Gmail",
  auth: {
    XOAuth2: {
      user: process.env.GMAIL_NAME,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,

    }
  }
});

	mailOpts = {
		from: request.body.email,
		to: process.env.GMAIL_NAME,
		subject: 'Web form message',
		html: 'Email: '+request.body.email+'<br> Message:'+request.body.message	};

	smtpConfig.sendMail(mailOpts,function(error){

		if(error){

			request.flash('error','upsssss!! Something went wrong');

			response.redirect('/');

			console.log(error);

		} else{

			request.flash('info', 'I\'m not a busy person you\'ll hear from me soon!');

			response.redirect('/');

		}

		smtpConfig.close();
	});



});

module.exports = router;
