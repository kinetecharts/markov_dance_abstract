"use strict";

var systems = _.pluck(samples, 'name');
var clientSlaveMode = false;
var duration = 10;
var cnt = duration+1;
var timeoutId = null;
var clock1 = 0;
var clock2 = 0;
var runningMode = true;

var socket = io.connect(window.location.origin);
socket.on('from server', function(data){
  socket.emit('control', {my: 'Control connect'});
}).on('kinectHeartbeat', function(data){
  $('#kinect').css('color', 'green');
  $('#kinect').html('kinect x:'+data.x+"<br/>y:"+data.y+"z:"+data.z);
  console.log(data);
});

var formatClock=function(clock){
	return ""+(Math.floor(clock/60)) + ":" + (clock%60);
};

var updateCnt=function(){
	if(runningMode)
		cnt--;
	if(cnt==0){
		if(clientSlaveMode){
			console.log('sync');
			socket.emit('control', {control:'sync'});
		}
		cnt = duration;
	}
	$('#counter').text(cnt);
	$('#clock1').text(formatClock(clock1++));
	$('#clock2').text(formatClock(clock2++));
	timeoutId = setTimeout(function(){
		updateCnt();
	}, 1000)
};

var restartUpdateCnt=function(){
	clearTimeout(timeoutId);
	cnt = duration+1;
	updateCnt();
};

$(document).ready(function() {

	$('#sync-button').button();
	$('#sync-button').click(function(evt){
		console.log("Sync clicked");
		restartUpdateCnt();
		socket.emit('control', {control:'sync'});
	})
// http://simeydotme.github.io/jQuery-ui-Slider-Pips/
	var slider = $('#duration-slider');
	slider.slider({min:0, max:30, step:1})
			.slider('pips', {rest:"label"})
    		.slider('value', duration)
    		.slider({change:function(){
    			duration = slider.slider('value');
    			socket.emit('control', {control: 'duration', value: duration});
    		}})
    		// .slide(function(event, ui){
    		// 	console.log(slider.slider('value'));
    		// })
	for(var i=0; i<5; i++){
		(function(i){
			var id = "#state-button-"+i;
			var st={id: id};
			$(id).button();
			$(id).click(function(evt){
				console.log(i);
				socket.emit('control', {control:'state', value: i});
				restartUpdateCnt();
			})
		}(i));
	}

	$('#reload-button').button();
	$('#reload-button').click(function(evt){
		console.log("Reload clicked");
		socket.emit('control', {control:'reload'})
	})

	$('#markov_1').button();
	$('#markov_1').click(function(evt){
		console.log("starting markov_1");
		markov_1();
	})

	$('#markov_2').button();
	$('#markov_2').click(function(evt){
		console.log("starting markov_2");
		markov_2();
	})

    systems.forEach(function(system){
        $('#samples')
             .append($("<option></option>")
                 .attr("value",system)
                 .text(system)); 
    });

    $('#trigger-mode').change(function(){
    	clientSlaveMode = $('#trigger-mode').prop('checked');
    	var sendString = clientSlaveMode ? "slave" : "self";

    	console.log("clientSlaveMode changed to " + sendString);
    	socket.emit('control', {control:'trigger-mode', value: sendString});
    });
    $('#running-mode').prop("checked", true);
    $('#running-mode').change(function(){
    	runningMode = $('#running-mode').prop('checked');
    	console.log("runningMode changed to " + runningMode);
    });

    $('#samples').selectmenu()
        .on("selectmenuchange", function(event, ui){
            var name = ui.item.value;
            socket.emit('control', {control:'system', value: name});
        });

	$('#clock1').click(function(){
		clock1 = 0;
	})
	$('#clock2').click(function(){
		clock2 = 0;
	})

	updateCnt();

});

