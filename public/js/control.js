"use strict";

var socket = io.connect(window.location.origin);
socket.on('from server', function(data){
  socket.emit('control', {my: 'Control connect'});
}).on('kinectHeartbeat', function(data){
  $('#kinect').css('color', 'green');
  $('#kinect').html('kinect x:'+data.x+"<br/>y:"+data.y+"z:"+data.z);
  console.log(data);
});

setInterval(function(){
	}, 200);
//socket.on('from server', function(data){
//$("#infoDisplay").html(data);
//});




$(document).ready(function() {

	$('#sync-button').button();
	$('#sync-button').click(function(evt){
		console.log("Sync clicked");
		socket.emit('control', {control:'sync'})
	})
// http://simeydotme.github.io/jQuery-ui-Slider-Pips/
	var slider = $('#duration-slider');
	slider.slider({min:0, max:20, step:1})
			.slider('pips', {rest:"label"})
    		.slider('value', 10)
    		.slider({change:function(){
    			var value = slider.slider('value');
    			socket.emit('control', {control: 'duration', value: value});
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
			})
		}(i));
	}

});