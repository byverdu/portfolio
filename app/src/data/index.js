// data
const navLinksData = [
	{
		text: 'about',
		href: '#about'
	},
	{
		text: 'content',
		href: '#content'
	},
	{
		text: 'contact',
		href: '#contact'
	},
	{
		text: 'social',
		href: '#social'
	}
];

const projectsData = [
	{
		title: 'Curriculum',
		img: './media/cv.png',
		text: 'Just a different way to present your CV',
		href: 'https://byverdu.github.io/curriculum/',
		name: 'curriculum',
    techs: [
      'ES6', 'Gulp', 'Sass', 'Prism.js'
    ]
  },
  {
		title: 'CryptoDasboard',
		img: './media/crypto.jpg',
		text: 'Dashboard for your crypto portfolio',
		href: 'https://github.com/byverdu/crypto-dashboard',
		name: 'crypto',
    techs: [
      'React', 'Redux', 'ES6', 'Node'
    ]
	},
	{
		title: 'ConsColor',
		img: './media/conscolor.png',
		text: 'Yet another npm package that prints colors in your console',
		href: 'https://github.com/byverdu/consColors/',
		name: 'consColors',
    techs: [
      'Node'
    ]
	},{
		title: 'PrettyLetters',
		img: './media/prettyLetters.png',
		text: 'Js plugin that will split letters in a word so they can be styled',
		href: 'https://byverdu.github.io/prettyLetters/',
		name: 'prettyLetters',
    techs: [
      'Gulp', 'ES5', 'jQuery'
    ]
	},{
		title: 'PrettyFormError',
		img: './media/pretty.png',
		text: 'Js plugin to unify styles in form errors',
		href: 'https://byverdu.github.io/prettyFormError/',
		name: 'pretty',
    techs: [
      'Gulp', 'ES6', 'Flow'
    ]
	},
	{
		title: 'Twitter Clone',
		img: './media/twitter.png',
		text: 'The name says everything',
		href: 'http://twitter.byverdu.es/',
		name: 'twitter',
    techs: [
      'ES6', 'Node', 'Grunt', 'SCSS'
    ]
	},
	{
		title: 'LottoApp',
		img: './media/lotto.png',
		text: 'Web app to save your euromillions raffles',
		href: 'http://lotto.byverdu.es/',
		name: 'lotto',
    techs: [
      'Aurelia', 'Ionic', 'Mongo', 'Node'
    ]
	},
	{
		title: 'Residencia Ergos',
		img: './media/resi.png',
		text: 'Elderly home in Barcelona, web design and coding, web hosting, server maintenance.',
		href: 'http://residenciaergos.com/#/',
		name: 'resi',
    techs: [
      'SCSS', 'React'
    ]
	},
	{
		title: 'ImdbApp',
		img: './media/imdb.png',
		text: 'App as a POC used as an example for a post on my blog to explain the MEAN stack',
		href: 'https://github.com/byverdu/meanStackPost',
		name: 'imdb',
    techs: [
      'MEAN'
    ]
	}
];

const aboutData = [
	"Hello World, I'm a Spaniard based in London that loves spend time coding the web by applying all the tecniques that I find..., well in the web.",
	"My life changed when I read my first snippet of code, it was only HTML but since then is keeping me really busy.",
	"<em>I believe that everybody should know how to code</em>",
	"Disclosure, I don't type that fast :)"
];

const formData = [
	{
    tag: 'input',
    label: 'Name', 
		type: 'text',
		placeholder: 'Your name',
    name: 'name',
    required: false
	},
	{
    tag: 'input',
    label: 'Email', 
		type: 'email',
		placeholder: 'Your email',
    name: 'email',
    required: true
	},
	{
    tag: 'textarea',
    label: 'Message',
		placeholder: 'Your message',
    name: 'message',
    required: true
	}
];


const socialIconsData = [
	{
    href: 'https://github.com/byverdu',
    id: 'github',
    viewBox: '0 0 46.8 46.8',
    path: 'M46.5 19.3c-0.5-3.3-1.9-5.9-3.7-9.2s-5.1-5.6-7.4-7.2c-2.3-1.6-5.5-2.4-8.6-2.7s-6.9-0.3-9.5 0.4c-3.6 0.9-5.9 1.9-8.3 4.1 -2.4 2.2-4.2 4.4-5.8 6.9 -1.5 2.5-2.7 6.3-2.9 8.2s0 4.4 0.6 7.3c0.7 2.9 2.1 5.6 4.3 8.9 2.1 3.3 5.1 5.3 8.5 7.4 3.4 2.1 10.7 3.7 13.4 3.3s6.5-1.3 10.4-4.4c3.9-3.1 6-8.1 7.2-11.3C46.1 27.8 46.9 22.6 46.5 19.3zM41 33.6c-0.1 0-1.6-2.7-1.7-2.9 -0.1-0.2 0.6-1.4 0.7-1.4 0.1 0 1.6 2.8 1.6 2.9S41.1 33.6 41 33.6zM35.3 15.7c-0.1-0.2-0.1-0.4-0.1-0.4 0-0.1 0.5-1.2 0.3-2.2 -0.1-1-0.6-2.6-0.5-2.6s1.8 1.4 2.8 3.6c1 2.3 1.9 4 2.2 7.1s0.2 5.3-0.9 7.4c-1.1 2.1-1.9 3.2-2.5 3.9 -0.6 0.6-1.9 1.2-2 1.2s-0.7-2.7-1.1-3.6c-0.4-0.9-1.2-2-1.2-2.2 0 0 1.3-1.1 1.7-1.8s1.9-3 1.8-5.7C35.8 17.8 35.4 15.9 35.3 15.7zM42.2 31.3c-0.1 0.1-1.9-3-1.8-3.1 0.2-0.2 0.7-1.8 0.8-1.8s1.8 3 1.8 3.2S42.4 31.2 42.2 31.3zM44.5 23c-0.2-0.2-1.6-3.3-1.8-3.4 -0.2-0.1-0.6 0.7-0.5 0.9s2 3.3 2 3.6c0.1 0.3-0.1 1.7-0.2 1.5 -0.1-0.2-1.4-2.9-1.6-2.9 -0.2 0-0.6 0.6-0.6 0.7 0 0.1 1.8 3.5 1.8 3.7s-0.3 1.6-0.4 1.3 -1.9-3.2-2-3.3c0-0.1 0-4.1-0.2-5.9 -0.2-1.8-0.9-5.4-3.4-8.3 -2.5-2.9-5.2-4.9-9-5.8 -3.8-0.9-6.2-0.9-9-0.7 -2.9 0.1-7 1.8-9.9 5.9 -2.8 4.1-3.3 5.2-3.9 8.2 -0.6 3 0.1 7.3 0.6 9.2s1.9 4.7 3.4 6.1c1.5 1.4 3.5 2.3 5 2.9 1.5 0.6 3.8 0.9 4 0.8 0.2-0.1 0.1-2.4 0-2.7s-0.2-0.4-0.8-0.4 -1.7 0-2.5-0.3c-0.7-0.3-1.3-1-1.8-1.8 -0.5-0.8-1-1.7-1.3-2 -0.3-0.4-1-1-0.9-1.1s1.3-0.2 2.2 0c0.9 0.3 2.4 1.3 3 1.7s1.5 1 1.7 1c0.3 0 0.9-1.3 1.1-1.7 0.3-0.3 0.8-1.4 0.6-1.6 -0.3-0.2-1.8-0.3-2.6-0.5s-2.2-1-3.2-2.3 -1.4-3.2-1.4-4.6c0-1.4 1.3-4 1.6-4.5s0.6-1 0.5-1.2c-0.2-0.2-0.9-1.2-1.1-1.9 -0.2-0.7 0.4-2.4 0.6-2.5 0.1-0.1 0.9 0.2 1.5 0.2 0.6 0.1 2 0.5 2.5 0.8s0.7 0.5 1 0.5 2.5-0.5 3.3-0.7 3-0.4 3.8-0.3c0.8 0.2 2.1 0.9 2.3 0.8 0.2-0.1 0.7-1.1 1.8-1.4 1.1-0.3 2.9-0.4 3.1-0.2 0.2 0.2 0.5 2.1 0.4 3.1 -0.2 1-0.5 1.6-0.3 1.8 0.2 0.3 1 2.1 0.6 3.7 -0.4 1.6-1 3.9-3 5.4s-2.7 1.8-2.9 1.9c-0.2 0.2 0 0.6 0.2 0.8s1.7 1.2 2.4 3.4 0.8 3.5 0.8 4 0.5 0.6 0.9 0.6c0.4-0.1 0.9-0.4 1.5-0.9s2.5-1.8 2.7-1.8c0.1 0.1 1.3 2.5 1.6 2.6s0.5-0.1 0.5-0.3 -0.9-2-1.2-2.5 -0.4-0.8-0.4-0.9c0.1-0.2 0.6-0.8 0.8-0.7 0.1 0.1 1.4 2.1 1.6 2.4 0.2 0.3 0.4 0.4 0.2 0.8 -0.2 0.4-1.1 1.5-1.5 1.8 -0.4 0.4-0.6 0.8-0.8 0.6s-1.4-2.3-1.6-2.3c-0.2 0-0.7 0.4-0.6 0.6s1.6 2.4 1.6 2.5 -0.8 1.1-1.6 1.7c-0.8 0.6-1.3 1-1.5 0.8s-1.7-3.9-2-3.9 -0.8 0.1-0.7 0.4c0.1 0.3 2 3.7 2 3.9s-0.6 0.6-0.8 0.4c-0.2-0.2-2.2-4.4-2.5-4.4s-0.7 0.1-0.7 0.5 2.6 4.1 2.5 4.3 -0.6 0.7-0.8 0.5 -2.6-5-2.8-5 -0.8 0.1-0.8 0.3c0 0.1 2.7 5.2 2.7 5.3s-1.1 0.6-1.3 0.5 -2.6-5.4-2.8-5.6c-0.2-0.1-0.9 0.4-0.9 0.5 0.1 0.1 2.9 5.1 2.8 5.3s-0.8 0.3-0.9 0.2c-0.1-0.1-2.8-5.3-3-5.3 -0.2-0.1-0.8 0.2-0.7 0.5s2.9 4.9 2.8 5c-0.1 0-0.8 0.1-0.9 0s-2.6-3.9-2.9-4 -0.7 0.4-0.7 0.5 2.3 3.5 2.2 3.5 -0.9 0-1.1-0.1c-0.2-0.1-1.8-3-2-3 -0.2-0.1-0.7 0.3-0.7 0.5 0.1 0.2 1.6 2.3 1.4 2.3s-0.7 0-1-0.1c-0.2-0.1-1.3-2.4-1.5-2.5s-0.6 0.2-0.6 0.3 0.9 1.7 0.7 1.7 -0.8 0-0.9-0.1c-0.2-0.1-1.2-1.8-1.3-1.9s-0.6 0.2-0.6 0.4c0.1 0.2 0.5 0.9 0.4 0.9 -0.2 0-3.6-0.9-5.5-2.2s-5.3-5.2-6.4-6.4c-1.1-1.2-2.6-4.8-3.1-6.7s-0.7-4.8-0.6-6.3c0-1.5 1.2-5.5 1.9-6.9s3.3-5.1 5-6.8 4.6-3.9 7.6-4.7c3-0.9 5.5-1.1 6.9-1.1 3.3 0 7 0.5 9.3 1.3s6.6 4.1 7.6 5.3 2.3 3.4 3.1 5 1.3 2.9 1.2 2.8 -1.1-1.8-1.3-1.7c-0.2 0-0.6 0.3-0.5 0.5s1.8 2.9 2 3.2 0.3 0.7 0.4 0.8c0 0.1 0.2 2.4 0.2 2.3 -0.1-0.1-1.7-3.1-1.9-3.2 -0.2-0.1-0.4 0.3-0.3 0.3 0.1 0.1 2.3 3.9 2.3 4.1S44.8 23.2 44.5 23zM14 15.8c0.4 0.3-0.5 0.9-1 2.1 -0.6 1.3-1.1 3.7-0.8 5.2s1 3.3 2.6 4.7 3.8 1.5 4 1.6 -0.4 1-0.5 1.1c-0.1 0.2-0.1 0.1-0.4 0s-2.2-1.7-4.1-2.1c-1.9-0.4-3.1 0.2-3.5 0.5 -0.4 0.4 0.1 1 0.6 1.4s1.2 1.2 2 2.6c0.8 1.4 1.3 1.8 2.6 2.2s2.3 0.5 2.5 0.5 0.2 0.6 0 0.8c-0.1 0.2-0.7-0.3-1.4-0.6 -0.8-0.2-2.2-0.4-3-0.9s-3.4-3.5-3.9-4.9c-0.5-1.3-1.5-4.3-1.5-5.8s-0.1-4.1 0.5-6 1.9-5.1 3.9-7.3 4.8-3.9 9-4.3c4.2-0.5 7.9 0.8 10.2 1.6s2.8 1.3 2.8 1.4c0 0-0.7 0.1-2.5 0.3 -1.8 0.1-3 1.1-3.1 1.2 -0.1 0.1-1.9-0.3-3.9-0.5 -1.9-0.2-4.6 0.7-4.7 0.7s-0.4 0-1.1-0.3c-0.7-0.3-4.2-1-4.6-1 -0.4 0-1.3 1.1-1.5 2.8C12.9 14.6 13.7 15.5 14 15.8zM27.7 1.6c-3-0.4-4.9-0.2-5.1-0.1 -0.3 0.3-0.2 0.8 0.2 0.9 0.4 0.1 2.2-0.2 4.5 0 2.4 0.2 4.1 1.1 4.5 1.1s0.6-0.6 0.4-0.8C32 2.5 30.7 2 27.7 1.6zM5.4 12.8c-2.4 2.5-2.8 5.7-3 6.8s0.5 1.6 0.9 1.4 0-1.1 0.8-3.6 1.8-3.4 2.1-4C6.4 12.9 5.6 12.6 5.4 12.8zM16.4 22.4c-0.3-0.7-0.1-1.6 0.1-2.4s-0.6-0.8-0.8-0.6c-0.5 0.5-0.7 2-0.5 3s1 2.4 1.5 2.6c0.5 0.2 0.9-0.1 0.8-0.5C17.4 24 16.7 23.1 16.4 22.4zM13.7 30.1c-0.7 0.5 0 1 0.3 1s0.6-0.1 0.5-0.6C14.3 30.1 13.9 30 13.7 30.1zM15.2 31.5c-0.5 0.3-0.1 1 0.3 1 0.4 0 0.6-0.3 0.7-0.6C16.3 31.6 15.4 31.3 15.2 31.5zM17.3 32.4c-0.8 0.2-0.5 0.9-0.1 1s0.7-0.1 0.8-0.5C18.1 32.5 17.8 32.3 17.3 32.4zM30.8 13.1c0.2 0 0.7 0.1 0.9 0.1s0.2 1.4 0.3 1.8c0.1 0.4 0.7 0.4 1 0.2 0.2-0.2-0.1-2.5-0.3-2.7s-1.8 0.1-2 0.1C30.6 12.6 30.6 13 30.8 13.1zM35.3 39.7c0.2 0 0.6-0.2 0.6-0.4 0-0.3-1.3-3.3-1.4-3.4 -0.1-0.1-0.9 0.2-0.9 0.3C33.7 36.5 35.1 39.7 35.3 39.7z'
	},
	{
    href: 'https://twitter.com/byverdu',
    id: 'twitter',
    viewBox: '0 0 45.1 45.1',
    path: 'M43.8 12c0 0 0.6-1 0.7-1.6s0.1-1.3-0.2-1.6c-0.3-0.3-1.5 0.2-2.5 0.5s-2.9 0.6-2.9 0.6 -1.2-3.6-3.2-5 -4.5-1.4-6.7-0.9 -4.9 1.9-6.1 3.4 -2.3 4.4-2.7 5.6c-0.4 1.2-1.1 3.2-2 3.4 -0.8 0.2-2.4-0.4-3.8-1.3 -1.3-0.8-4.8-3.7-6.6-5.3 -1.7-1.6-4.2-4.4-5-4.2s-1.7 3.1-1.7 5.2 1.8 4.1 1.8 4.1c-0.7 2.7-0.3 4.6 0.4 6.1 0.7 1.4 2.3 2.4 2.3 2.4 -0.2 0.9-0.1 2.1 0.2 3.1 0.3 1 2.1 2.3 2.1 2.3s-1 0.8-2.7 1.3c-1.6 0.5-4.8 0-5.1 0 -0.3 0.1 0 4.3 0 4.9 0 0.6 0.4 1.1 1 1.5 0.5 0.4 4.9 2.6 11 4.2 6.1 1.6 10.9 0.2 14.5-1.4 3.6-1.6 7.5-6.4 10.1-10.3 2.5-3.9 4.2-9.5 4.2-9.5s0.9-0.5 2.3-1.5c1.3-1 1.8-2.7 1.9-3.8C44.9 12.9 43.8 12 43.8 12zM40.8 14.3c0.4 0 2.1-1 2.3-0.8 0.2 0.2-0.5 1.5-1.7 2.2 -1.2 0.7-2.2 1.1-2.4 1 -0.2-0.1-1.1-1.7-1.2-1.7 -0.2 0-0.6 0.4-0.5 0.6s1.1 1.5 1 1.7 -0.2 0.3-0.3 0.2 -1.1-2.1-1.3-2.2c-0.3-0.1-0.6 0.5-0.5 0.8 0.2 0.3 1.4 1.9 1.4 2.1 0 0.3-0.3 1.4-0.4 1.2 -0.1-0.2-1.6-3-1.8-3s-0.5 0.7-0.4 0.9c0.1 0.2 1.9 2.8 1.9 3.1s-0.5 1.4-0.7 1.2c-0.2-0.2-1.7-3.6-1.9-3.6 -0.2 0-0.6 0.6-0.6 0.7 0 0.2 2 3.5 2.1 3.8s-0.4 1.7-0.6 1.6c-0.2-0.1-1.8-4.2-2-4.2s-0.5 0.6-0.4 0.8c0.1 0.3 2 3.9 2 4.2s-0.3 0.8-0.4 0.8 -2.1-5.1-2.3-5.1c-0.2 0-0.5 0.5-0.3 1.1s2.2 4.4 2.3 4.7c0 0.3-0.5 1-0.6 0.9s-2.2-4.9-2.4-4.9 -0.5 0.8-0.3 1.1 2.4 4.2 2.4 4.3 -0.6 1-0.7 1c-0.2-0.1-2-4.5-2.2-4.5s-0.6 0.5-0.4 1 2.2 3.9 2.1 4.1c-0.1 0.2-0.6 1-0.7 0.8s-2.1-4.7-2.3-4.7 -0.8 0.5-0.6 0.9c0.2 0.4 2.4 4.4 2.3 4.5s-0.9 1.1-1 1.1c-0.1-0.1-2.3-4.7-2.5-4.6 -0.2 0.1-0.6 0.4-0.4 0.8s2.4 4.2 2.3 4.4 -0.6 0.6-0.8 0.5 -2.4-4.7-2.6-4.7 -0.7 0.7-0.6 0.9c0.2 0.3 2.6 4 2.5 4.2s-0.9 0.8-1 0.7 -2-3.9-2.3-3.9c-0.4 0-0.7 0.6-0.5 0.8s2.1 3.4 2.1 3.4 -0.9 0.6-1.1 0.4c-0.2-0.2-1.7-3.7-1.8-3.7s-0.8 0.4-0.5 0.8c0.3 0.4 1.8 3.1 1.7 3.2 -0.2 0.1-0.6 0.4-0.8 0.2 -0.2-0.2-1.7-3.7-1.9-3.7s-0.8 0.3-0.6 0.5 1.8 3.5 1.7 3.6c-0.1 0.1-1.1 0.4-1.2 0.2 -0.1-0.1-1.5-3.1-1.7-3.1s-0.5 0.4-0.4 0.5c0.1 0.2 1.5 2.7 1.4 2.7 -0.1 0.1-1.1 0.2-1.2 0.1s-1.4-3.1-1.6-3.2c-0.2-0.1-0.7 0.4-0.6 0.6s1.3 2.5 1.1 2.6 -1 0.1-1.1-0.1c-0.1-0.2-1.2-2.6-1.4-2.7 -0.2-0.1-0.6 0.1-0.5 0.5 0.2 0.4 1.3 2.5 1.2 2.5s-1.1 0-1.2-0.1 -1.1-2.6-1.3-2.6c-0.2-0.1-0.8-0.1-0.7 0.2 0.1 0.3 1.2 2.2 1 2.2s-1.2-0.2-1.4-0.4c-0.2-0.2-1.1-2.5-1.3-2.5s-0.6 0.2-0.6 0.5c0.1 0.3 1 1.9 0.7 1.9 -0.2-0.1-1.3-0.2-1.3-0.4s-1-2.2-1.2-2.3 -0.8 0-0.6 0.3c0.2 0.3 0.8 1.7 0.7 1.7s-2.5-0.7-4.4-1.7 -3.7-2.6-3.5-2.6 2.8 0.2 4.5-0.5 3.5-1.3 3.6-1.5 -0.2-0.7-0.3-0.7c-0.1 0-2.2-0.7-2.6-2.2 -0.5-1.5-0.1-3.2-0.4-3.4 -0.3-0.2-1.7-0.8-2.4-3 -0.7-2.2 0.1-5.2-0.1-5.4s-0.4-0.6-0.6-0.5c-0.3 0.1-1.1-1.6-1.1-3.3 0-1.6 0.7-3.8 0.8-3.8s4.7 4.4 7.1 6.4 5.2 4.1 6.8 4.4c1.6 0.3 2.3 0.3 3.1-1.2 0.8-1.6 1.6-5.4 2.8-7.2 1.2-1.8 3.6-3.8 6.7-4.3s5.5 0.4 6.7 2.1 1.3 4 1.6 4.2 1.6 0.1 3.3-0.4c1.6-0.6 2.2-0.7 2.3-0.7s-0.4 1-1.4 1.9 -1.8 1.5-1.8 1.9S40.4 14.3 40.8 14.3zM4.2 11.3c-0.5-0.4-0.3-1.3-0.2-1.9 0.1-0.7-0.9-0.5-1.1 0.2s0 1.7 0.6 2.2 1.1 0.5 1.3 0.4C5 12.1 4.6 11.7 4.2 11.3zM18.3 18.5c-0.4-0.1-1.3 0.5-2.3-0.1 -1-0.5-1.9-1.7-2.4-1.5 -0.3 0.1-0.6 0.5 0.1 1.2s2.1 1.3 3.2 1.3C18.1 19.4 18.7 18.6 18.3 18.5zM25.2 9.6c-0.3-0.1-1.3 0.6-1.8 1.5s-1.3 2.6-0.7 2.9c0.4 0.2 0.6-0.1 0.9-1 0.3-1 0.9-2.1 1.2-2.5C25.2 10.2 25.5 9.7 25.2 9.6z'
	},
	{
    href: 'https://codepen.io/byverdu/pens/public/',
    id: 'codepen',
    viewBox: '0 0 47 47',
    path: 'M46.8 22.8c-0.2-4.2-0.2-8.4-0.5-9.2 -0.3-0.8-4.4-3.6-6.1-4.3 -1.6-0.7-8.6-4.3-10.6-5.3 -2-1.1-5.9-3.8-6.5-3.8s-1.6 0.6-2.6 1.1 -4.9 3.1-7.7 4.5c-2.8 1.5-6 3.5-9.3 5 -3.4 1.5-3.2 1.7-3.4 2.3 -0.1 0.4 0.2 2.5 0.3 5.6 0.1 3.1-0.3 9-0.4 10.7 -0.1 1.6 0.3 2.6 1 3.6s3.6 2.5 6.8 4.3c3.2 1.8 8.4 5.5 11 7.4s3.2 1.8 4.3 2.1c1.1 0.3 7.9-3.8 13.3-7.1 5.4-3.3 10.3-6.3 10.4-6.9C47 32.3 47 27 46.8 22.8zM45.8 30.1c-0.2-0.2-3.4-3.8-3.6-3.7 -0.2 0.2-0.3 0.5-0.3 0.7 0.1 0.1 3.4 3.5 3.5 3.8 0.1 0.2-0.2 0.6-0.4 0.5 -0.2-0.1-3-2.9-3.4-2.9 -0.4-0.1-0.9 0.4-0.5 0.7 0.3 0.3 3.1 2.6 3.1 2.8 0 0.2-0.7 0.9-0.9 0.8 -0.2-0.1-2.7-2.7-3.1-2.7s-0.8 0.4-0.6 0.5c0.2 0.2 2.9 2.6 2.7 2.8 -0.1 0.2-0.7 1-1 0.7s-2.4-2.7-2.8-2.7 -0.7 0.4-0.6 0.6c0.2 0.2 2.5 2.4 2.5 2.6s-0.7 0.5-0.9 0.5c-0.2-0.1-2.3-2.6-2.6-2.6s-0.7 0.3-0.6 0.4 2.5 2.7 2.5 2.8 -0.6 0.6-0.8 0.5c-0.2-0.2-2-2.6-2.6-2.6 -0.5 0-0.7 0.3-0.6 0.4s2.5 2.5 2.3 2.6c-0.2 0.2-0.8 0.5-1 0.4 -0.2-0.2-2.4-2.3-2.7-2.4 -0.3-0.1-0.7 0.4-0.6 0.6 0.2 0.2 2.7 2.2 2.4 2.4 -0.3 0.2-1.2 1-1.5 0.8s-2.1-2.3-2.6-2.3 -0.9 0.3-0.6 0.5c0.3 0.3 2.3 2.1 2.1 2.3 -0.2 0.2-0.5 0.6-0.7 0.4 -0.2-0.2-2.1-2-2.4-2s-0.8 0.2-0.6 0.4 2.5 1.8 2.3 2.2 -1 0.9-1.2 0.7c-0.2-0.2-2.2-2.2-2.5-2.2 -0.3 0.1-0.6 0.3-0.4 0.5s2.2 2 2.1 2.2 -0.6 0.7-0.8 0.5c-0.1-0.2-2.5-2.6-2.7-2.5s-0.6 0.7-0.4 0.9c0.3 0.2 2.5 1.8 2.3 2s-0.8 0.8-1.1 0.6 -2.1-1.9-2.4-1.9 -0.6 0.4-0.3 0.7c0.4 0.3 1.9 1.5 1.9 1.6s-0.3 0.4-0.6 0.3c-0.3-0.1-2-1.6-2.3-1.6s-0.8 0.4-0.6 0.6c0.2 0.2 2 1.2 1.9 1.5s-0.5 0.7-0.8 0.5 -8.7-5.3-11.4-6.9c-2.7-1.6-6.1-3.7-8.1-4.9 -1.9-1.2-2.9-1.4-3.1-2.5s0.2-5.9 0.3-8.6c0.1-2.7-0.1-4.9-0.2-5.5 -0.1-0.7-0.2-2-0.1-2.4 0.1-0.7 1.5-1.3 4.4-2.6 2.8-1.3 11.9-6.6 13.4-7.5s3.5-2.1 4-2 5 3.3 8.2 4.6c3.1 1.3 9.7 4.5 10.7 5.2s1.5 1.1 1.5 1.2 -0.2 0.4 0.1 0.6c0.4 0.2 2 1.6 2.1 1.8 0 0.2 0.2 1.6 0.1 1.5s-1.8-2.2-2.2-2.2 -0.7 0.4-0.5 0.7c0.2 0.3 2.6 2.4 2.8 2.7 0.1 0.3 0.3 1 0.1 0.9 -0.2-0.2-1.9-2-2.1-2s-0.5 0.2-0.4 0.6 2.4 2.5 2.5 2.7 0.1 1.7-0.1 1.6 -1.9-2.4-2.1-2.3 -0.2 0.6-0.2 0.6 2.2 2.6 2.3 2.9 0.3 2.3 0.1 2c-0.2-0.3-1.9-2.3-2.1-2.3s-0.4 0.3-0.3 0.6 2.3 2.7 2.4 2.9c0.1 0.2 0.2 2.1 0 1.8 -0.1-0.3-2.2-2.6-2.4-2.5s-0.5 0.4-0.3 0.7c0.2 0.2 2.7 2.9 2.7 3.1C45.9 28.9 46 30.2 45.8 30.1zM7.3 16.6c0.6 0.3 5.4 3.5 5.9 3.8s1.8 0.1 3.3-0.6 4.2-2 4.3-2.3 0.1-5.1 0-5.9 0-4-0.3-4.1 -6.3 3-8.1 4 -6.2 3.3-6.4 3.5C5.7 15.5 6.7 16.3 7.3 16.6zM9.2 15.9c0.1-0.2 4.9-2.9 6.6-4s3.6-2.2 3.7-1.9c0.2 0.3 0.7 6.4 0.2 6.9 -0.5 0.4-5.3 2.8-6 2.4C13.2 19 8.9 16.8 9.2 15.9zM25.3 17.2c0.1 0.3 5 2.6 5.4 2.7s1.1-0.1 1.8-0.4c0.7-0.3 7.1-3.7 7.8-4 0.7-0.3 1-0.5 1.1-1.1 0-0.6-1-1.4-3.1-2.6s-7.1-3.4-9.2-4.3 -2.8-0.7-3.2-0.4c-0.7 0.4-0.5 1.9-0.5 2.7C25.3 10.7 25.2 16.9 25.3 17.2zM26.5 7.9c0.1-0.2 4.4 1.6 8.2 3.5 3.8 2 5.4 2.8 5.3 3.2s-4.5 2.4-6.4 3.3c-1.9 0.9-2.4 1.1-2.7 1 -0.2-0.1-4.3-1.9-4.4-2.3 -0.2-0.5 0-4.1-0.1-5.2C26.5 10.2 26.3 8.1 26.5 7.9zM27.5 21.3c-0.3-0.4-4-2.4-4.4-2.5 -0.5-0.1-1.3 0.5-2.3 1.1s-2.4 1.5-2.3 1.8c0.1 0.8 4 2.5 4.7 2.6s3.4-1.6 3.9-2C27.4 22.1 27.7 21.7 27.5 21.3zM23.1 23.1c-0.4-0.2-1.3-0.8-1.3-0.9 -0.1-0.2 2.4-1.6 2.7-1.4 0.4 0.3 1.2 0.5 1.3 0.8C25.8 21.8 23.5 23.3 23.1 23.1zM18.4 6.4c0.5-0.4 3.5-1.8 4-2.2 0.6-0.3 1.4 0.3 1.7 0.5 0.3 0.1 0.7-0.1 0.8-0.4 0.1-0.3-1.1-0.9-1.5-1.1s-0.8-0.2-1.5 0.1c-0.7 0.3-4.4 2.3-4.6 2.5s0 0.7 0.2 0.8C17.7 6.6 17.9 6.8 18.4 6.4zM5 13.6c0.3-0.3 0-0.4-0.4-0.6s-2.4 0.7-2.6 1.1c-0.2 0.3 0.2 2.2 0.5 2.3 0.3 0.2 0.7-0.1 0.9-0.4 0.2-0.3-0.1-1-0.2-1.3C3.2 14.3 4.7 13.8 5 13.6zM6.8 24.5c0.8-0.5 2.2-1.1 2-1.5s-2.9-2.2-3.5-2.6 -1.6 0.1-1.7 0.4c-0.1 0.2 0 3.2 0 3.7s-0.1 1.1 0.5 1.4C4.8 26.1 5.9 25 6.8 24.5zM5.9 22.4c0.1-0.2 1.2 0.6 1.1 0.8 0 0.2-0.9 0.9-1.2 0.7S5.8 22.6 5.9 22.4zM19.7 28.3c-0.6-0.3-6.2-3.3-6.6-3.3 -0.4-0.1-8.9 4.5-8.9 4.7 0 0.5 2.5 1.5 5.8 3.4 3.2 1.8 9.1 5.2 9.6 5.5s1.2 0.2 1.5-0.2c0.3-0.3 0.1-7.9 0.1-8.6C21.1 29.3 20.3 28.7 19.7 28.3zM20 37.4c-0.4-0.1-8-4.4-9.2-5s-2.1-1.3-2.1-1.4c0.1-0.4 5.2-4.1 5.8-3.9 0.5 0.1 5.3 2.5 5.5 2.9C20.2 30.3 20.4 37.5 20 37.4zM31.5 24.9c-0.7-0.1-6.7 3-6.8 3.5 -0.1 0.4 0.6 7.5 0.6 7.8 0.1 0.2 0.4 0.7 0.9 0.8 0.5 0.1 1.7-0.4 3.6-1.4s9.1-5.2 9.3-5.6c0.3-0.4 0.1-1.1-0.1-1.3C38.9 28.4 32.2 25 31.5 24.9zM31.7 33.4c-2.5 1.5-4.7 2.8-5.1 2.5s-0.8-5.2-0.8-5.6c0-0.3 6.5-3.8 7.2-3.6 0.7 0.3 5.1 2.2 5.1 2.6C38.2 29.7 34.3 31.9 31.7 33.4zM41.6 18.2c-0.4 0-5.8 3.3-5.8 3.5 -0.1 1.2 2.7 1.7 3.9 2.2 1.2 0.5 2.4 1 2.7 0.7s0.1-3.3 0.1-4.8C42.5 18.1 42 18.2 41.6 18.2zM41.5 23.4c-0.4-0.1-3.6-1.5-3.9-1.7s3.5-2.3 3.8-2.1C41.7 19.9 41.8 23.5 41.5 23.4z'
  },
  {
    href: 'https://www.linkedin.com/in/albertbyverdu/',
    id: 'linkedin',
    viewBox: '0 0 46.4 46.4',
    path: 'M3.5 14.3c1.4 0.9 4.1 0.9 5.9 0.8 1.7-0.1 4.5-2.3 4.6-6.1 0.2-3.8-2.5-5.8-2.5-5.8 -3.2-2.8-7.7-1.2-8.6-0.6 -0.9 0.6-3.5 2.9-2.8 6C0.8 11.8 1.8 13.2 3.5 14.3zM2.2 4.5c0.7-1 2.2-2 5-1.6 2.9 0.4 3.7 1.7 4.4 2.9 0.8 1.2 0.7 2.2 0.7 2.2s-1.8-3.2-2.1-3.1c-0.3 0.1-0.7 0.6-0.5 0.9s2.3 3.1 2.2 3.3 -0.2 0.8-0.3 0.6 -1.8-3.1-2-3.1c-0.2 0.1-0.5 0.4-0.4 0.8 0.2 0.4 2 2.9 1.9 3s-0.4 0.6-0.5 0.4 -1.5-2.9-1.8-2.8 -0.5 0.4-0.3 0.8 1.7 2.4 1.6 2.5 -0.4 0.4-0.5 0.3 -1.6-2.4-1.8-2.4c-0.2 0-0.7 0.5-0.4 0.8 0.3 0.3 1.5 1.9 1.4 2 -0.2 0.1-1.1 0.3-1.3 0.2s-0.9-1.6-1.1-1.6c-0.2 0-0.7 0.4-0.6 0.7s1 1.1 0.7 1.2 -2.9-0.3-4-1.1C1.4 10.6 0.2 7.3 2.2 4.5zM4 10.3c0.2-0.2 0.2-0.3 0.2-0.5s-0.7-0.7-0.8-1.1 0-1.6 0.6-2.2 0.7-1 0.3-1.2 -1.5 0.4-1.7 1.8c-0.2 1.3 0 2.5 0.4 3C3.2 10.5 3.7 10.5 4 10.3zM6.4 19.6c-0.5-0.2-3.2-0.2-3.6-0.1s-0.4 3.8-0.4 4.2c0.1 0.4 0 1 0.3 1.1 0 0 0.6 0.1 0.7 0 0.2-0.1 0.3-3.8 0.3-4 0.1-0.3 2.8-0.1 2.9-0.2C6.9 20.5 7 19.8 6.4 19.6zM13 17.4c-1-0.4-6.2-0.5-8-0.5s-3.9-0.1-4.1 0.3c-0.2 0.3-0.1 7.6-0.2 12.4s-0.4 12-0.3 12.3c0.2 0.3 3.1 2.3 3.3 2.5 0.2 0.2 0.8 0.3 2.3 0.2s6.6 0.2 7.2 0.1 1.3-0.4 1.5-0.8 0.3-2.6 0.4-7.6 0.8-11.6 0.7-14.2S14 17.7 13 17.4zM13 23.6c-0.2-0.1-1.6-2.4-1.8-2.1 -0.3 0.3-0.3 0.5 0 1s1.7 2.6 1.8 2.9c0 0.3 0.1 1.5 0 1.5s-1.8-2.7-2-2.6 -0.4 0.6-0.4 0.7 2.2 3 2.3 3.5 0 1.2-0.1 1.1 -1.7-3.3-2-3.2c-0.3 0.2-0.5 0.7-0.3 1.1s2.2 3.1 2.2 3.3 0 1.4-0.1 1.3 -1.8-3.2-2-3.2c-0.3 0-0.5 0.7-0.4 1 0.1 0.4 2.5 3.5 2.4 3.8s0 1.7-0.2 1.6c-0.1-0.1-2.1-3.7-2.3-3.7 -0.2-0.1-0.5 0.6-0.4 0.9s2.6 4.4 2.6 4.7c0 0.4 0 2.3-0.2 2.2 -0.2-0.1-2.4-4.5-2.8-4.6s-0.4 0.8-0.4 1c0.1 0.2 3 4.7 3 4.9s0 0.5-0.3 0.6 -0.4 0.1-0.4 0 -2.2-3.9-2.6-4.1 -0.6 0.4-0.6 0.5 2.7 3.6 2.4 3.8c-0.3 0.2-1 0.3-1.1 0.1 -0.2-0.2-2.4-4-2.6-4 -0.3 0-0.8 0.7-0.6 0.8 0.2 0.2 2.3 3.2 2.1 3.2 -0.2 0-0.9 0.2-1.1 0.1 -0.2-0.2-1.9-3-2.1-3 -0.3 0-0.5 0.4-0.5 0.4s1.7 2.4 1.5 2.4 -0.9 0.1-1 0 -1.2-2.2-1.4-2.2c-0.2-0.1-0.6 0.4-0.6 0.5s1.3 1.7 1 1.7 -1.8-0.1-1.9-0.1c-0.1-0.1-0.6-0.6-0.7-1.1s0.2-22.2 0.4-22.6c0.1-0.1 4.5 0.1 6.8 0.2s3.8-0.1 4.1 0.3c0.3 0.4 0.4 2.4 0.3 2.3s-1-1.9-1.3-1.8 -0.5 0.7-0.4 1c0.2 0.3 1.6 2.4 1.7 2.7C13.2 23 13.2 23.6 13 23.6zM46.3 25.9c-0.2-3.2-2-5.6-4.4-7.1 -2.4-1.6-6.6-2-9.4-1.4 -2.8 0.6-5.8 3.2-5.9 3.1 -0.1 0 0-2.2-0.1-2.7s-1-0.5-3.4-0.5 -5.6 0-5.7 0.2c-0.1 0.6 0.1 11.6 0.1 15.6s-0.2 8.3 0 8.9c0.2 0.5 1.8 2.4 2.4 2.4s6.5-0.1 7.4-0.2 1-1.1 1-2.3c0-1.3 0-11 0.4-14 0.4-3.1 2.9-4.2 4.8-3.7 2 0.5 2.3 2.7 2.7 5.4s-0.4 10.3-0.4 11.1 0.1 3.3 0.6 3.4c0.5 0.2 7.3 0 8.3 0 1-0.1 1.4-0.2 1.5-0.9S46.5 29.1 46.3 25.9zM42.6 24.1c0.1 0.1 2.4 3.8 2.4 4.1s0 1-0.1 1c-0.1-0.1-1.6-2.9-1.9-2.9 -0.3 0-0.7 0.6-0.5 0.8 0.1 0.2 2.3 3.5 2.3 3.7 0 0.3 0.1 1.8 0 1.6 -0.1-0.1-2-3.5-2.2-3.5s-0.4 0.6-0.4 0.8c0 0.3 2.4 4 2.4 4.1s0 2.4-0.2 2.4 -0.9-1.2-1.5-2.5 -0.7-1.7-1-1.6 -0.2 1.1-0.1 1.3c0.1 0.3 2.4 4.1 2.4 4.3 0 0.2 0.1 1.9-0.1 1.8s-2.3-4.6-2.5-4.6c-0.3 0-0.6 0.7-0.5 0.8 0.1 0.1 2.6 4.3 2.6 4.9 0.1 0.6 0 0.9-0.2 0.9s-0.3-0.1-0.4-0.3c-0.1-0.2-2.4-4-2.5-4.1 -0.1 0-0.5 0.7-0.3 0.9 0.1 0.2 2.2 3.3 2.1 3.3 -0.1 0-1 0-1.1 0 -0.1-0.1-1.8-2.7-2-2.7 -0.1 0-0.6 0.6-0.5 0.7s1.5 1.9 1.3 2 -0.8 0.1-0.9 0 -1.1-1.9-1.4-1.9c-0.3 0-0.5 0.5-0.4 0.6s1 1.4 0.8 1.5c-0.3 0.1-1.1 0.1-1.1 0s0.4-3.3 0.5-6.1c0-2.8-0.2-5.7-0.5-7.6s-0.5-3.7-1.8-4.4c-1.3-0.7-3.6-1.1-5.4 0 -1.8 1.1-2.4 2.3-2.7 2.7 -0.3 0.4-0.3 0.8-0.3 0.8s-0.9-1.6-1.3-1.2c-0.4 0.5-0.4 0.7-0.3 0.9 0.1 0.1 1.1 1 1.2 1.3 0 0.4 0.1 2.1 0 2.1s-1.3-2.3-1.5-2.2c-0.3 0.1-0.3 1-0.3 1.1s1.5 2.2 1.5 2.5 0 1.5-0.1 1.5c-0.1-0.1-1.7-2.9-1.8-2.8 -0.2 0.1-0.5 0.6-0.4 0.8 0 0.2 2.4 3.7 2.4 3.8 0 0.2 0 2.1-0.2 2.1s-2-3.8-2.2-3.8c-0.1 0-0.6 0.7-0.5 0.9 0.1 0.2 2.6 4.1 2.7 4.4 0.1 0.3 0.1 2.3 0 2.3s-2.7-5.3-2.8-5.3c-0.2 0-0.6 0.7-0.6 0.8 0 0.1 2.8 4.8 2.8 5.1 0 0.2-0.1 0.3-0.1 0.3s-0.2 0.1-0.3 0 -2.2-3.6-2.4-3.7c-0.2-0.1-0.7 0.5-0.6 0.7s2.3 2.9 2.2 3.1c-0.1 0.1-1.1 0.1-1.2 0 -0.1-0.1-1.7-2.9-1.9-2.9 -0.2 0-0.6 0.7-0.6 0.8 0 0.1 1.5 2.1 1.5 2.2s-0.9 0.1-0.9 0c-0.1-0.1-1.4-2.2-1.7-2.2 -0.3 0-0.5 0.7-0.4 0.8 0.1 0.1 1.2 1.6 1 1.6s-1.7 0.1-1.7-0.3 0.3-7.6 0.3-10 -0.3-12.6-0.1-13.2c0-0.1 4.7 0 5.5 0s1.3 0 1.4 0.1c0.1 0.1 0 3.9 0.2 4.1 0.3 0.1 1-0.6 1.2-0.8 0.2-0.2 1.3-1.1 3.7-2.3 2.4-1.1 5.7-1.4 7.3-1 1.7 0.4 3.5 0.9 4.7 2.5s2 3 2.3 3.8c0.2 0.9 0.2 1.6 0.1 1.6 -0.1 0-1.5-3.5-1.9-3.4C42.6 23.1 42.5 24 42.6 24.1zM23.6 19.5c-0.3-0.2-3.2-0.1-3.4-0.1 -0.2 0-0.3 0.4-0.3 0.5 0 0-0.1 0.4 0.1 0.6 0.1 0.2 2.5 0.1 2.7 0.1 0.3 0 0.3 1.2 0.3 1.5s0.9 0.1 1 0.1 0.1-0.4 0.1-1C24.2 20.6 23.9 19.7 23.6 19.5zM33.3 21c-0.3 0.2-0.3 0.7 0.1 0.9 0.4 0.2 2.4 0.6 3.4 1.4s1 3.1 1.1 3.4c0 0.2 0.7 0.4 1 0.1s0.2-2-0.9-3.9C36.8 21 33.5 20.9 33.3 21z'
	},
	{
    href: 'http://byverdu.es',
    id: 'web',
    viewBox: '0 0 50.7 50.7',
    path: 'M49.8 36.6c-0.5-1.2-3.2-4.2-3.7-4.2 -0.6 0-1.5 0.9-2.2 1.3 -0.7 0.4-3.8 2.2-7.5 3.7s-6.2 1.9-8.6 2.2c-2.4 0.2-6.5-0.1-10-2s-7-5.2-7.8-9.5c-0.9-4.2 0.1-6.7 3.1-11.1 3.1-4.4 9.5-7.1 14.3-8s10.1 0.8 12.9 3.2c2.8 2.4 3 5.1 3.2 8s-2.3 4.7-3 4.9c-0.6 0.2-1.1 0-1.4-0.4s-0.1-7.4 0-8.6c0-1.2-0.7-2.1-1.3-2.1s-4.9-0.3-5.5 0c-0.6 0.2-0.5 1.1-0.5 1.1s-1.6-1-2.4-1.3c-0.7-0.3-4.7-0.9-8.5-0.1 -3.8 0.9-6.1 4.1-7.2 6.5s-1.3 6.1 0.2 9c1.6 2.9 4.9 5.6 9.3 6.6s9-1.4 9-1.4 3.7 0.7 5.8 0.5 4.8-1.6 7.1-4.1c2.4-2.5 3.1-5.3 4.3-10s0.2-7.9-1.3-11.2 -4.9-6-7.9-7.3C37.3 1 33.3 0 27.6 0c-5.8 0-8.4 0.6-12.1 2.1 -8.1 3.2-11.1 9-12.8 13.1s-2.7 10.9-2.2 14.8 2.4 7.4 5.7 11.4 7.8 7.2 12.7 8.6 11.8 0.5 18.5-1.3c6.6-1.8 11.9-7.3 12.5-8.5C50.7 39.3 50.3 37.8 49.8 36.6zM41.5 43.5c-0.3-0.3-3.4-5.3-3.6-5.2 -0.3 0.1-0.7 0.3-0.6 0.5 0.2 0.1 3.7 4.9 3.3 5.1 -0.4 0.2-0.7 0.6-0.8 0.3s-3.2-5.4-3.4-5.4c-0.3 0-0.7 0.4-0.7 0.5 0.1 0.1 3.8 5.2 3.4 5.3 -0.5 0.1-0.6 0.9-1 0.3s-3-4.8-3.3-4.8 -0.8 0.4-0.7 0.5 2.9 4.7 2.8 4.8 -0.8 0.6-0.9 0.4c-0.2-0.2-2.7-4.7-3-4.8 -0.3-0.2-0.8 0.3-0.7 0.4 0.1 0.1 2.9 4.6 2.7 4.7 -0.2 0.1-1 0.4-1.1 0.2 -0.1-0.1-2.4-4.4-2.9-4.4s-0.8 0.2-0.7 0.3 2.8 4.3 2.6 4.4 -0.9 0.4-1.1 0.2c-0.1-0.2-2.3-4.8-2.8-4.8s-0.9 0.1-0.7 0.4c0.2 0.3 2.4 4.5 2.4 4.5s-0.7 0.5-0.9 0.1c-0.3-0.4-2.8-4.4-3-4.5s-0.8 0-0.6 0.2 3.1 4.4 2.7 4.4c-0.4 0-0.6 0.5-0.9 0 -0.3-0.5-2.7-4.1-2.9-4.1 -0.2 0-0.7 0.1-0.6 0.4s2.4 3.7 2.1 3.7c-0.3 0-0.7 0.3-0.9 0s-2.6-4.2-3-4.2 -0.7 0.4-0.7 0.5 2.9 3.5 2.3 3.6c-0.5 0.1-1.1 0.3-1.3-0.1 -0.1-0.4-2-3.3-2.2-3.4 -0.3-0.1-0.8-0.2-0.7 0.1s2.4 3.3 1.7 3.3 -0.9 0.1-1.1-0.3c-0.2-0.4-1.6-3.1-1.7-3.1s-0.9 0.1-0.7 0.5c0.2 0.4 1.5 2.4 1 2.4s-7.1-2.3-11.3-6.6 -5.4-7.4-5.8-10.9 -0.2-7.7 1.1-11.5 3.7-8 6.7-10.7 8.2-5.9 18.5-5.5c4.7 0.2 9.8 0.7 13.7 3.2 3.9 2.6 6 6 6.6 10 0.5 4 0 7.3-1.4 10.8s-3.2 5.5-4.8 6.2c-1.6 0.6-5.4 1.3-6.1 0.7 -0.7-0.6-2.6-4.8-3.1-4.7s-0.5 0.5-0.4 0.8 2.1 3.6 1.6 3.5c-0.4 0-0.6 0.1-0.9-0.4 -0.3-0.5-2-5-2.4-5.1s-0.9 0.1-0.7 0.3 1.6 3.5 1.5 3.7c-0.1 0.1-0.3 0.7-0.5 0.5s-1.5-3-1.7-2.9 -0.6 0.5-0.4 1.1c0.3 0.5 1.5 2.5 1.4 2.6 -0.1 0.2-0.3 0.5-0.5 0.2s-1.4-2.9-1.6-3c-0.3-0.1-0.9 0.1-0.7 0.5s1.6 3 1.6 3.1 -0.5 0.5-0.7 0.2 -1.3-2.7-1.6-2.7 -0.6 0.1-0.4 0.6c0.2 0.4 1.2 2.4 1.2 2.5s-0.3 0.4-0.6 0.1c-0.3-0.3-1.5-3-1.8-3s-0.9 0.4-0.7 0.7c0.2 0.3 1.4 2.2 1.1 2.3s-0.3 0.4-0.6 0 -1.3-2.2-1.6-2.2c-0.3 0-0.8 0.3-0.6 0.5 0.2 0.2 1.4 1.9 1.1 1.9s-1.1 0-1.3-0.2c-0.2-0.2-1.3-2.4-1.5-2.4s-0.8 0.1-0.6 0.4c0.2 0.3 1 1.8 0.6 1.7s-3.5-1.2-5.4-3.3 -2.2-5.7-1.7-7.6c0.5-2 2.5-4.7 4.4-5.8s4.3-2 7.7-1.6c3.5 0.3 5.3 2.4 5.5 2.7s0.5 0.5 0.9 0.6 0.3 0 0.3-0.4 -0.2-2.2-0.1-2.3c0.1 0 4.5 0 4.7 0.3s0.1 3.5 0.2 5c0.1 1.5-0.6 4.5 0.5 5.4s1.9 0.9 2.9 0.4 2.7-2.3 3-4.4c0.4-2.1 0.8-5.9-2.4-9.3 -3.2-3.4-6-4.9-9.5-5.8 -3.5-0.8-9.7 0.3-12.6 1.3s-8 4.8-9.8 8.8 -1.9 9.2-1.5 11.4c0.4 2.1 3.1 6.7 5.2 8.4 2.2 1.7 5.9 3.7 10 4.2 4.2 0.5 10.5-1.5 11.2-1.7 0.6-0.2 3.1-1.2 3.4-1.1 0.3 0.1 3.5 5.2 3.5 5.3S41.8 43.8 41.5 43.5zM45.7 40.7c-0.2-0.4-2.6-4.8-3-4.7 -0.3 0.1-0.8 0.3-0.6 0.5s3 4.6 2.9 4.8 -0.4 0.7-0.8 0.4c-0.3-0.3-2.6-4.8-2.9-4.8 -0.3 0-0.7 0.4-0.7 0.6 0 0.1 3 4.6 2.9 4.8s-0.4 0.7-0.7 0.5c-0.2-0.1-2.2-3.9-2.5-4.4 -0.4-0.4-0.7-0.9-0.6-1.1s3.4-2 3.7-1.9 3.3 4.8 3.2 5S45.9 41.1 45.7 40.7zM47 39.9c-0.3-0.3-2.8-5.1-2.9-5.3 -0.1-0.2 0.8-0.4 0.9-0.4 0.1 0 3.2 4.5 3 4.8C47.8 39.3 47.2 40.2 47 39.9zM49.2 37.9c-0.2 0.3 0 0.8-0.4 0.5s-2.7-4.4-2.8-4.5 0.1-0.3 0.4-0.2C46.5 33.7 49.4 37.6 49.2 37.9zM26.1 18.9c-2.7-0.9-5.5-0.3-6.7 0.6 -3.1 2.4-2.4 5.4-0.6 7.6s4.7 2 7.2 1.2c2.5-0.7 3.3-2.7 3.5-4.5C29.8 22 28.8 19.8 26.1 18.9zM25.7 27.6c-2.5 0.5-3.9 0.5-5.2-0.6 -1.3-1.2-1.1-3.7 1-4.8 1.2-0.6 3.7-0.8 4.9-0.4 1.2 0.3 2 1.6 2 2S28.2 27 25.7 27.6zM19.8 18.2c0.4-0.2-0.2-0.9-0.5-0.8 -0.3 0.1-1.7 0.8-2.7 1.7s-1.4 2.6-1.2 3c0.1 0.3 0.7 0.2 1.1 0.1 0.4-0.1 0.3-1.1 0.8-2S19.3 18.4 19.8 18.2zM8.9 12.4c0.5-0.5 0.7-1.3-0.1-1.1 -0.8 0.2-3.8 3.9-4.5 6s-1 4.5-0.7 5c0 0 0.4 0 0.8 0 0.4-0.1 0.2-0.9 0.9-4C6.1 15.1 8.4 12.9 8.9 12.4zM36.9 16c-0.3-0.3-3-0.4-3.1-0.1 -0.2 0.4 0.1 0.6 0.1 0.6s1.6 0.1 1.9 0.1c0.3 0 0.1 2.4 0.1 2.9s0.4 0.3 0.8 0.3C37.2 19.7 37.3 16.3 36.9 16zM41.7 26.4c-0.3 0.2-1.7 0.8-2.7 0.6s-1.5-1.5-1.7-1.4c-0.8 0.3-0.3 1.4 0.6 1.9s1.8 0.3 3 0S42 26.2 41.7 26.4z'
	}
];

export {
  navLinksData,
  projectsData,
  aboutData,
  formData,
  socialIconsData
}