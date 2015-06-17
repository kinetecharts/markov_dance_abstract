"use strict";


var stateNames=['sitting', 'talking', 'running', 'kissing', 'following'];
// white, black, red, blue, green
var statesJson=[
    {
        name:"sitting",
        image:"images/white.png",
        // image:"images/sitting.gif",
        active:true,
    },
    {
        name:"talking",
        image:"images/black.png",
        // image:"images/talking.gif",
        active:false,
    },
    {
        name:"running",
        image:"images/red.png",
        // image:"images/running.gif",
        active:false,
    },
    {
        name:"kissing",
        image:"images/blue.png",
        // image:"images/kissing.gif",
        active:false,
    },
    {
        name:"following",
        image:"images/green.png",
        // image:"images/following.gif",
        active:false,
    }
];

var samples=[
	{
		name:'dual- more white',
		transition: [
			[0.6, 0.4, 0, 0, 0], //white stillness
			[0.8, 0.2, 0, 0, 0], //black exit
			[0.5, 0.5, 0, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	},
	{
		name:'trio',
		transition: [
			[0.2, 0.7, 0.1, 0, 0], //white stillness
			[0.1, 0.2, 0.7, 0, 0], //black exit
			[0.7, 0.1, 0.2, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	},
	{
		name:'four 2 disorder',
		transition: [
			[0.2, 0.8, 0.0, 0.0, 0.0], //white stillness
			[0.0, 0.2, 0.8, 0.0, 0.0], //black exit
			[0.4, 0.0, 0.2, 0.4, 0.0], //red playful, beach
			[0.4, 0.4, 0.0, 0.2, 0.0], //blue active 5%
			[0.5, 0.5, 0.0, 0.0, 0.0] //green slow 80%
		]
	},
	{
		name:'dual W B',
		transition: [
			[0.3, 0.7, 0, 0, 0], //white stillness
			[0.7, 0.3, 0, 0, 0], //black exit
			[0.5, 0.5, 0, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	},
	{
		name:'trio_still',
		transition: [
			[0.2, 0.8, 0.0, 0.0, 0.0], //white stillness
			[0.0, 0.2, 0.8, 0.0, 0.0], //black exit
			[0.3, 0.3, 0.2, 0.2, 0.0], //red playful, beach
			[0.4, 0.4, 0.0, 0.2, 0.0], //blue active 5%
			[0.5, 0.5, 0.0, 0.0, 0.0] //green slow 80%
		]
	},
	{
		name:'four - order',
		transition: [
			[0.0, 1.0, 0.0, 0.0, 0.0], //white stillness
			[0.0, 0.0, 1.0, 0.0, 0.0], //black exit
			[0.0, 0.0, 0.0, 1.0, 0.0], //red playful, beach
			[1.0, 0.0, 0.0, 0.0, 0.0], //blue active 5%
			[0.5, 0.5, 0.0, 0.0, 0.0] //green slow 80%
		]
	},
	{
		name:'four',
		transition: [
			[0.2, 0.8, 0.0, 0.0, 0.0], //white stillness
			[0.1, 0.2, 0.7, 0.0, 0.0], //black exit
			[0.4, 0.0, 0.2, 0.4, 0.0], //red playful, beach
			[0.6, 0.0, 0.2, 0.2, 0.0], //blue active 5%
			[0.5, 0.5, 0.0, 0.0, 0.0] //green slow 80%
		]
	},
	{
		name:'five',
		transition: [
			[0.2, 0.6, 0.0, 0.0, 0.2], //white stillness
			[0.2, 0.2, 0.6, 0.0, 0.0], //black exit
			[0.0, 0.2, 0.2, 0.6, 0.0], //red playful, beach
			[0.0, 0.0, 0.2, 0.2, 0.6], //blue active 5%
			[0.6, 0.0, 0.0, 0.2, 0.2] //green slow 80%
		]
	}
];