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
		name:'calm',
		transition: [
			[0.8, 0.1, 0.02, 0.2, 0.1], //sitting
			[0.1, 0.8, 0.02, 0.2, 0.1], //talking
			[0.01, 0.39, 0.5, 0.1, 0.1], //running
			[0.3, 0.3, 0.1, 0.8, 0.5], //kissing
			[0.2, 0.3, 0.2, 0.3, 0.7] //following
		]
	},
	{
		name:'excited',
		// white, black, red, blue, green
		transition: [ //mostly active
			[0.3, 0.2, 0.3, 0.5, 0.2], //white stillness
			[0.2, 0.1, 0.3, 0.5, 0.1], //black exit
			[0.1, 0.1, 0.5, 0.5, 0.2], //red playful, beach
			[0.3, 0.1, 0.3, 0.5, 0.2], //blue active 5%
			[0.1, 0.1, 0.3, 0.5, 0.2] //green slow 80%
		]
		// transition: [ //mostly quiet
		// 	[0.3, 0.2, 0.3, 0.05, 0.5], //white stillness
		// 	[0.2, 0.1, 0.3, 0.05, 0.5], //black exit
		// 	[0.1, 0.2, 0.5, 0.05, 0.6], //red playful, beach
		// 	[0.3, 0.2, 0.3, 0.1, 0.4], //blue active 5%
		// 	[0.1, 0.2, 0.3, 0.05, 0.5] //green slow 80%
		// ]
		// transition: [
		// 	[0.3, 0.2, 0.3, 0.05, 0.5], //sitting
		// 	[0.2, 0.1, 0.3, 0.05, 0.5], //talking
		// 	[0.1, 0.2, 0.5, 0.05, 0.6], //running
		// 	[0.3, 0.2, 0.3, 0.1, 0.4], //kissing
		// 	[0.1, 0.2, 0.3, 0.05, 0.5] //following
		// ]
	},
	{
		name:'agitated',
		transition: [
			[0.1, 0.1, 0.8, 0.2, 0.4], //sitting
			[0.1, 0.1, 0.8, 0.2, 0.1], //talking
			[0.2, 0.05, 0.4, 0.2, 0.3], //running
			[0.01, 0.4, 0.6, 0.2, 0.3], //kissing
			[0.2, 0.1, 0.6, 0.3, 0.3] //following
		]
	},
	{
		name:'dual',
		transition: [
			[0.3, 0.7, 0, 0, 0], //white stillness
			[0.7, 0.3, 0, 0, 0], //black exit
			[0.5, 0.5, 0, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	},
	{
		name:'trio',
		transition: [
			[0.2, 0.8, 0.0, 0, 0], //white stillness
			[0.0, 0.2, 0.8, 0, 0], //black exit
			[0.8, 0.0, 0.2, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	},
	{
		name:'trio_still',
		transition: [
			[0.2, 0.8, 0.0, 0.0, 0.0], //white stillness
			[0.0, 0.2, 0.8, 0.0, 0.0], //black exit
			[0.0, 0.0, 0.2, 0.8, 0.0], //red playful, beach
			[0.2, 0.2, 0.2, 0.4, 0.0], //blue active 5%
			[0.5, 0.5, 0.0, 0.0, 0.0] //green slow 80%
		]
	},
	{
		name:'dual-uneven',
		transition: [
			[0.2, 0.8, 0, 0, 0], //white stillness
			[0.6, 0.4, 0, 0, 0], //black exit
			[0.5, 0.5, 0, 0, 0], //red playful, beach
			[0.5, 0.5, 0, 0, 0], //blue active 5%
			[0.5, 0.5, 0, 0, 0] //green slow 80%
		]
	}
];