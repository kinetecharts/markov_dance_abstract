
var sec = 1000;

//init
function markov_1(){
	runningMode = false;
	clock2=0;
	socket.emit('control', {control:'system', value: 'dual- more white'});
	socket.emit('control', {control:'trigger-mode', value: 'slave'});
	
	setTimeout(function(){
		socket.emit('control', {control:'state', value: 0}); //white
	}, 1*sec);

	for(var i=2; i<18; i++){
		setTimeout(function(){
			socket.emit('control', {control:'sync'}); //sync
		}, i*10*sec);
	}

	setTimeout(function(){
		socket.emit('control', {control:'system', value: 'trio'});
	}, 25*sec);

	// set everything to green when done
	setTimeout(function(){
		socket.emit('control', {control:'state', value: 4}); //green
	}, 210*sec);
}


function markov_2(){
	runningMode = false;
	clock2=0;
	socket.emit('control', {control:'system', value: 'dual- more white'});
	socket.emit('control', {control:'trigger-mode', value: 'slave'});

	setTimeout(function(){
		socket.emit('control', {control:'system', value: 'trio'});
	}, 25*sec);

	setTimeout(function(){
		socket.emit('control', {control:'system', value: 'four 2 disorder'});
	}, 75*sec);

	setTimeout(function(){
		socket.emit('control', {control:'state', value: 0}); //white
	}, 1*sec);

	for(var i=2; i<18; i++){
		setTimeout(function(){
			socket.emit('control', {control:'sync'}); //sync
		}, i*10*sec);
	}

	setTimeout(function(){
		socket.emit('control', {control:'system', value: 'trio'});
	}, 25*sec);

	// set everything to green when done
	setTimeout(function(){
		socket.emit('control', {control:'state', value: 4}); //green
	}, 210*sec);

}