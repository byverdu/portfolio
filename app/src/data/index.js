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
		title: 'PrettyFormError',
		img: 'https://cdn2.iconfinder.com/data/icons/toolbar-signs-4/512/html_code-512.png',
		text: 'Js plugin to unify styles in form errors',
		href: 'https://byverdu.github.io/prettyFormError/',
		name: 'pretty',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
    ]
	},
	{
		title: 'Twitter Clone',
		img: 'http://chitter-byver.herokuapp.com/images/chitter.gif',
		text: 'The name says everything',
		href: 'http://twitter.byverdu.es/',
		name: 'twitter',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
    ]
	},
	{
		title: 'LottoApp',
		img: 'https://igravloto.ru/images/euromillions.png',
		text: 'Web app to save your euromillions raffles',
		href: 'https://github.com/byverdu/lottoApp-backEnd',
		name: 'lotto',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
    ]
	},
	{
		title: 'Residencia Ergos',
		img: 'http://i.dailymail.co.uk/i/pix/2015/05/17/23/28CACAC800000578-3085621-image-m-29_1431900739565.jpg',
		text: 'Elderly home in Barcelona, web design and coding, web hosting, server maintenance.',
		href: 'http://residenciaergos.com/#/',
		name: 'resi',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
    ]
	},
	{
		title: 'ImdbApp',
		img: 'http://www.userlogos.org/files/logos/jumpordie/imdb-iphone.png',
		text: 'App as a POC used as an example for a post on my blog to explain the MEAN stack',
		href: 'https://github.com/byverdu/meanStackPost',
		name: 'imdb',
    techs: [
      'Sass', 'React', 'MEAN', 'Node'
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
		label: 'Name', 
		type: 'text',
		placeholder: 'Your name',
    name: 'name',
    required: true
	},
	{
		label: 'Surname', 
		type: 'text',
		placeholder: 'Your surname',
    name: 'surname',
    required: false
	},
	{
		label: 'Email', 
		type: 'mail',
		placeholder: 'Your email',
    name: 'email',
    required: true
	}
];


const socialIconsData = [
	{
		href: 'https://github.com/byverdu',
		image: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 90 90"><path d="M65.7 10.5c1.2 2.7 1.9 7.1 0.8 10.3 4.6 3.9 6.2 13.5 4 21.4C77.1 42.7 84.9 42 90 44c-4.7-0.6-11.2-1.8-17.3-1.4 -1.2 0.1-2.9 0-2.8 1.6 7.1 0.6 14.1 1.2 19.9 3 -5.8-0.9-12.8-2.4-19.9-2.6 -3 5.8-8.9 8.7-17.1 9.3 0.9 1.9 2.6 2.7 3 5.7 0.6 4.6-1 11.4 0.6 14.5 0.7 1.5 2 1.5 2.8 2.8 -2 2.4-7-0.3-7.6-2.8 -1-4.3 1.5-11-1.2-13.9 0.2 4.7-1.1 11.3 0.2 15.4 0.5 1.6 2 2.3 1.6 3.8 -9.4 0.9-5.4-12.1-7-19.8 -1.4 0.1-0.8 2.1-0.8 3 0 7.5 1.5 17.8-6.6 16.8 -0.2-1.6 1.1-2.1 1.6-3.6 1.5-4.2-0.3-10.5 0.4-15.7 -3.1 2.3 0.3 10.5-1.6 14.7 -1.1 2.4-4.7 3.5-7.4 2.4 0.4-1.8 2.2-1.5 3-3.2 1.1-2.3 0-5.7 0.4-9.1 -5.7 1.1-10.2-0.2-12.3-3.8 -1-1.6-1.2-3.5-2.4-5 -1.2-1.4-3-1.6-3.6-3.6 7.1-1.7 7.4 7.3 13.7 7.5 2 0.1 3-0.6 4.8-1 0.5-2.3 1.6-4 3.2-5.2 -7.9-1.1-14.5-3.6-17.5-9.5 -7.2 0.4-13.8 1.3-19.9 2.8 5.5-2 12.4-2.7 19.7-3 -0.4-2.6-4.2-1.9-6.6-1.8C9 42.8 3.5 43.3 0 44c5-1.8 12.1-1.6 18.9-1.6 -2.1-6.5-1.4-16.9 3.2-20.8C20.8 18.3 21.2 13 22.9 10.5c5.1 0.2 8.2 2.4 11.4 4.6 4-1.1 8.1-1.7 13.5-1.4 2.3 0.1 4.7 1.2 6.4 1 1.7-0.2 3.5-2 5.2-2.8C61.5 10.9 63.3 10.6 65.7 10.5z"/></svg>'
	},
	{
		href: 'https://twitter.com/byverdu',
		image: '<svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 430.1 430.1"><path d="M381.4 198.6c24.2-2 40.5-13 46.8-27.9-8.7 5.4-35.8 11.2-50.7 5.6-0.7-3.5-1.5-6.8-2.4-9.9-11.4-41.8-50.4-75.5-91.2-71.4 3.3-1.3 6.7-2.6 10-3.7 4.5-1.6 30.9-5.9 26.7-15.2-3.5-8.2-35.7 6.2-41.8 8.1 8-3 21.3-8.2 22.7-17.4-12.3 1.7-24.3 7.5-33.6 15.9 3.4-3.6 5.9-8 6.5-12.8C241.7 91 222.6 133.1 207.1 174c-12.1-11.8-22.9-21-32.6-26.2-27.1-14.5-59.5-29.7-110.4-48.6-1.6 16.8 8.3 39.2 36.8 54.1-6.2-0.8-17.5 1-26.5 3.2 3.7 19.3 15.7 35.2 48.2 42.8-14.8 1-22.5 4.4-29.5 11.6 6.8 13.4 23.3 29.2 53 25.9-33 14.2-13.5 40.6 13.4 36.6C113.7 320.9 41.5 317.4 0 277.8c108.3 147.6 343.7 87.3 378.8-54.9 26.3 0.2 41.7-9.1 51.3-19.4C415 206.1 393 203.5 381.4 198.6z"/></svg>'
	},
	{
		href: 'https://codepen.io/byverdu/pens/public/',
		image: '<svg width="60" height="60" viewBox="0 0 512 512"><path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"/></svg>'
	},
	{
		href: 'http://byverdu.es',
		image: '<svg width="60" height="60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.6 456.6"><path d="M75.3 356.7c-6.2 0-12.5-0.8-18.7-2.5 -18.5-5-34-16.9-43.6-33.5l-3.3-5.7c-19.8-34.3-8-78.4 26.3-98.2l147.9-85.4c34.3-19.8 78.4-8 98.2 26.3l3.3 5.7c19.8 34.3 8 78.4-26.3 98.2l-13.1 7.6c-6.4 3.7-14.6 1.5-18.3-4.9 -3.7-6.4-1.5-14.6 4.9-18.3l13.1-7.6c10.4-6 17.9-15.7 21-27.3 3.1-11.6 1.5-23.7-4.5-34.2l-3.3-5.7c-12.4-21.5-40-28.9-61.5-16.5L49.3 240.2c-21.5 12.4-28.9 40-16.5 61.5l3.3 5.7c6 10.4 15.7 17.9 27.3 21 11.6 3.1 23.7 1.5 34.2-4.5l33-19.1c6.4-3.7 14.6-1.5 18.3 4.9 3.7 6.4 1.5 14.6-4.9 18.3l-33 19.1C100 353.5 87.7 356.7 75.3 356.7z"/><path d="M236.9 334.6c-24.9 0-49.1-12.9-62.4-35.9l-3.3-5.7c-19.8-34.3-8-78.4 26.3-98.2l13.1-7.5c6.4-3.7 14.6-1.5 18.3 4.9 3.7 6.4 1.5 14.6-4.9 18.3l-13.1 7.6c-10.4 6-17.9 15.7-21 27.3 -3.1 11.6-1.5 23.7 4.5 34.2l3.3 5.7c12.4 21.5 40 28.9 61.5 16.5l147.9-85.4c21.5-12.4 28.9-40 16.5-61.5l-3.3-5.7c-6-10.4-15.7-17.9-27.3-21 -11.6-3.1-23.7-1.5-34.2 4.5l-33 19.1c-6.4 3.7-14.6 1.5-18.3-4.9 -3.7-6.4-1.5-14.6 4.9-18.3l33-19.1c16.6-9.6 36-12.1 54.5-7.2 18.5 5 34 16.9 43.6 33.5l3.3 5.7c9.6 16.6 12.2 36 7.2 54.5 -5 18.5-16.9 34-33.5 43.6L272.7 325C261.4 331.5 249.1 334.6 236.9 334.6z"/></svg>'
	}
];

export {
  navLinksData,
  projectsData,
  aboutData,
  formData,
  socialIconsData
}