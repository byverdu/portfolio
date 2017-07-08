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
		name: 'name'
	},
	{
		label: 'Surname', 
		type: 'text',
		placeholder: 'Your surname',
		name: 'surname'
	},
	{
		label: 'Email', 
		type: 'mail',
		placeholder: 'Your email',
		name: 'email'
	}
];


const socialIconsData = [
	{
		href: 'https://github.com/byverdu',
		icon: 'https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-128.png'
	},
	{
		href: 'https://twitter.com/byverdu',
		icon: 'https://cdn3.iconfinder.com/data/icons/ui-web-design/33/twitter-128.png'
	},
	{
		href: 'https://codepen.io/byverdu/pens/public/',
		icon: 'http://www.iconninja.com/files/527/742/565/codepen-io-codepen-icon.png'
	},
	{
		href: 'http://byverdu.es',
		icon: 'http://dspncdn.com/a1/media/692x/9c/6c/2a/9c6c2a6df8b451c883ec1524598b843e.jpg'
	}
];

export {
  navLinksData,
  projectsData,
  aboutData,
  formData,
  socialIconsData
}