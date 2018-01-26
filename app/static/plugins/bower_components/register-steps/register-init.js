var host_api='http://52.77.252.230:8000/';
var base_path='api/v1/';


$(function() {

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next_1").click(function(e){
	console.log(e);

	var currency=document.getElementById('currency').value;
	var zone=document.getElementById('timezone').value;
	var teatime=document.getElementById('teatime').value;
	var duration=document.getElementById('duration').value;
	//var tea=teatime.options[teatime.selectedIndex].value;
	var nine='false';
	var eighteen='false';
	var online='false';
	var guest='false';
	var member='false';
	console.log(currency+" ,"+zone+" ,"+teatime);

	//var doc = document.getElementById("language");
       // alert("You selected " + teatime.options[teatime.selectedIndex].value);

    //uncomment these
	//if((currency=='')||(zone=='')||(teatime=='')){return false;}
	if(animating) return false;
	animating = true;
	
	if ($('#9').is(":checked"))
	{
	  	// it is checked
	  	nine='True';
	}

	if ($('#18').is(":checked"))
	{
		eighteen='True';
	  	// it is checked
	}
	if ($('#'+rates[0]['name']).is(":checked"))
	{
		online='True';
	  	// it is checked
	}
	if ($('#'+rates[1]['name']).is(":checked"))
	{
		guest='True';
	  	// it is checked
	}
	if ($('#'+rates[2]['name']).is(":checked"))
	{
		member='True';
	  	// it is checked
	}
	//var lis = document.getElementById("teatime").getElementsByTagName("li");
	//console.log(lis);
	//const navbar = Array.from(document.querySelectorAll('#teatime>li'));

	console.log($('#teatime').select2('data'));
	var teeip=$('#teatime').select2('data');
	var ratesfromlocal=localStorage.getItem('rates',rates);
	console.log(ratesfromlocal);

	var tee=[];

	for(var i=0;i<teeip.length;i++)
	{
		tee.push(teeip[i]['id']);
	}
	var join=tee.join(',');
	console.log(join);

	var dataString=JSON.stringify({hole_9:nine,hole_18:eighteen,tee_avl:join,currency:currency,timezone:zone,member:member,guest:guest,online:online,duration:duration});		
	console.log(dataString);
	/* $.ajax({
	 	type:'post',
	 	url:host_api+base_path+'forms/1',
	 	contentType:"application/json",
	 	data:dataString,
	 	xhrFields: {
	       	withCredentials: true
	   	},
	   	crossDomain: true,
	 	success:function(data)
	 	{
	 		console.log(data)

	 	},error:function(xhr,error,status){

	 	}
	 });*/

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	//activate next step on progressbar using the index of next_fs
	$("#eliteregister li").eq($("form").index(next_fs)).addClass("active");
	
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;

				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
});

$(".next_2").click(function(e){
	console.log(e);

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	//activate next step on progressbar using the index of next_fs
	$("#eliteregister li").eq($("form").index(next_fs)).addClass("active");
	
		//show the next fieldset
		next_fs.show(); 
		//hide the current fieldset with style
		current_fs.animate({opacity: 0}, {
			step: function(now, mx) {
				//as the opacity of current_fs reduces to 0 - stored in "now"
				//1. scale current_fs down to 80%
				scale = 1 - (1 - now) * 0.2;
				
				//2. bring next_fs from the right(50%)
				left = (now * 50)+"%";
				
				//3. increase opacity of next_fs to 1 as it moves in
				opacity = 1 - now;

				current_fs.css({'transform': 'scale('+scale+')'});
				next_fs.css({'left': left, 'opacity': opacity});
			}, 
			duration: 800, 
			complete: function(){
				current_fs.hide();
				animating = false;
			}, 
			//this comes from the custom easing plugin
			easing: 'easeInOutBack'
		});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#eliteregister li").eq($("form").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function(){
	return false;
})

});