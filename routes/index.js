var express = require('express');
var data    = require('./data.json');
var email   = require('nodemailer');
var router  = express.Router();


/* GET home page. */
router.get('/', function(request, response) {
  response.render('index', { title: 'Byverdu',
  											name: 'Albert Vallverdu',
  											data: data.webs,
  										  icons: data.icons
  										});
});

router.post('/',function(request,response){

	var mailOpts, smtpConfig;

	smtpConfig = email.createTransport('SMTP',{

		service: 'Gmail',
		auth:{
			user: 'byverdu@gmail.com',
			pass: process.env.USER_PWD
		}
	});

	mailOpts = {
		from: request.body.email,
		to: 'byverdu@gmail.com',
		subject: 'Web form message',
		html: 'Email: '+request.body.email+'<br> Message:'+request.body.message	};

	smtpConfig.sendMail(mailOpts,function(error){

		if(error){

			request.flash('error','upsssss!! Somethign went wrong');

			response.redirect('/');

			console.log(error);
		html: 'Email: '+request.body.email+'<br> Message:'+request.body.message	}

	smtpConfig.sendMail(mailOpts,function(error){


		if(error){

			request.flash('error','upsssss!! Somethign went wrong')

			response.redirect('/')

			console.log(error)

		} else{

			request.flash('info', 'I\'m not a busy person you\'ll hear from me soon!');

			response.redirect('/');

		}

		smtpConfig.close();
	});



});
});
module.exports = router;
