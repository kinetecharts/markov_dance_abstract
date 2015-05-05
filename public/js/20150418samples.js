"use strict";
// Used excited mode for 2nd anniversary party night 1

var samples={
	calm:[
	    {
	        name:"sitting",
	        transitionProbabilities:{
	            sitting:0.8,
	            walking:0.1,
	            running:0.02,
	            hugging:0.2,
	            following:0.1
	        }
	    },
	    {
	        name:"walking",
	        transitionProbabilities:{
	            sitting:0.1,
	            walking:0.8,
	            running:0.02,
	            hugging:0.2,
	            following:0.1
	        }
	    },
	    {
	        name:"running",
	        transitionProbabilities:{
	            sitting:0.01,
	            walking:0.39,
	            running:0.5,
	            hugging:0.1,
	            following:0.1
	        }
	    },
	    {
	        name:"hugging",
	        transitionProbabilities:{
	            sitting:0.3,
	            walking:0.3,
	            running:0.1,
	            hugging:0.8,
	            following:0.5
	        }
	    },
	    {
	        name:"following",
	        transitionProbabilities:{
	            sitting:0.2,
	            walking:0.3,
	            running:0.2,
	            hugging:0.3,
	            following:0.7
	        }
	    }
	],
	// bipolar:[
	//     {
	//         name:"sitting",
	//         transitionProbabilities:{
	//             sitting:0.3,
	//             walking:0.02,
	//             running:0.48,
	//             hugging:0.4,
	//             following:0.3
	//         }
	//     },
	//     {
	//         name:"walking",
	//         transitionProbabilities:{
	//             sitting:0.45,
	//             walking:0.1,
	//             running:0.2,
	//             hugging:0.4,
	//             following:0.1
	//         }
	//     },
	//     {
	//         name:"running",
	//         transitionProbabilities:{
	//             sitting:0.48,
	//             walking:0.02,
	//             running:0.5,
	//             hugging:0.2,
	//             following:0.1
	//         }
	//     },
	//     {
	//         name:"hugging",
	//         transitionProbabilities:{
	//             sitting:0.01,
	//             walking:0.39,
	//             running:0.6,
	//             hugging:0.2,
	//             following:0.1
	//         }
	//     },
	//     {
	//         name:"following",
	//         transitionProbabilities:{
	//             sitting:0.01,
	//             walking:0.39,
	//             running:0.6,
	//             hugging:0.2,
	//             following:0.1
	//         }
	//     }
	// ],
	excited:[
	    {
	        name:"sitting",
	        transitionProbabilities:{
	            sitting:0.2,
	            walking:0.1,
	            running:0.3,
	            hugging:0.6,
	            following:0.1
	        }
	    },
	    {
	        name:"walking",
	        transitionProbabilities:{
	            sitting:0.1,
	            walking:0.3,
	            running:0.6,
	            hugging:0.4,
	            following:0.3
	        }
	    },
	    {
	        name:"running",
	        transitionProbabilities:{
	            sitting:0.02,
	            walking:0.28,
	            running:0.7,
	            hugging:0.3,
	            following:0.4
	        }
	    },
	    {
	        name:"hugging",
	        transitionProbabilities:{
	            sitting:0.01,
	            walking:0.3,
	            running:0.6,
	            hugging:0.5,
	            following:0.3
	        }
	    },
	    {
	        name:"following",
	        transitionProbabilities:{
	            sitting:0.1,
	            walking:0.3,
	            running:0.6,
	            hugging:0.2,
	            following:0.5
	        }
	    }
	],
	agitated:[
	    {
	        name:"sitting",
	        transitionProbabilities:{
	            sitting:0.1,
	            walking:0.1,
	            running:0.8,
	            hugging:0.2,
	            following:0.4
	        }
	    },
	    {
	        name:"walking",
	        transitionProbabilities:{
	            sitting:0.1,
	            walking:0.1,
	            running:0.8,
	            hugging:0.2,
	            following:0.1
	        }
	    },
	    {
	        name:"running",
	        transitionProbabilities:{
	            sitting:0.2,
	            walking:0.05,
	            running:0.4,
	            hugging:0.2,
	            following:0.3
	        }
	    },
	    {
	        name:"hugging",
	        transitionProbabilities:{
	            sitting:0.01,
	            walking:0.39,
	            running:0.6,
	            hugging:0.2,
	            following:0.3
	        }
	    },
	    {
	        name:"following",
	        transitionProbabilities:{
	            sitting:0.2,
	            walking:0.1,
	            running:0.6,
	            hugging:0.3,
	            following:0.3
	        }
	    }
	]
};