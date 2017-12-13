
var host_api='http://52.77.252.230:8000/';
var base_path='api/v1/';

var emails=['gmail','yahoo'];

var Initialize=function()
{

}

$('#loginform').on('submit',function(e){

	e.preventDefault();


    var value=passwordvalidation();
  
    if(value)
    {
    	 var mobile=document.getElementById('phoneNumber').value;
	    var name=document.getElementById('courtName').value;
	    var countrycode=document.getElementById('countryCode').value;
	    var email=document.getElementById('email').value;	
	    var country=document.getElementById('country').value;
	    var city=document.getElementById('state').value;
	    var password=document.getElementById('password').value;

	    console.log(email);
	    
	    var afterat=email.split('@');
	    var afterdot=afterat[1].split('.');
	    var normalemail=emails.indexOf(afterdot[0]);


	    if(normalemail==0)
	    {
	    	alert('You are using normal email insted of official acconts. is it ok?');	
	    }

	    console.log(normalemail);

	    var dataString=JSON.stringify({
		"name":name,
		"country":country,
		"city":city,
		"country_code":countrycode,
		"mobile":mobile,
		"email":email,
		"password":password});


		console.log(dataString);
    	
    }
   $.ajax({
    	type:'post',
    	url:host_api+base_path+'forms/register',
    	contentType:'application/json',
    	data:dataString,
    	success:function(data)
    	{
    		console.log(data);
    		$('#loginform').html('');

    		var divforSuccess=document.createElement('div');
    		$(divforSuccess).addClass('row');

    		var p=document.createElement('div');
    		$(p).html('Thank You for Sign in, Kindly verify your email by clicking verification link in your mail');
    		$(divforSuccess).append(p);
    		$('#loginform').append(divforSuccess);

    	},error:function(error)
    	{	
    		console.log(error);
    	}

    });
});


function passwordvalidation()
{
	var p = document.getElementById('password').value,
        errors = [];
   	var pwd1=/^(?=.*[A-Z])/;

    if (pwd1.test(p)==false) {
        errors.push("Password Should contain atleast One UpperCase letter");
    	//return false;
	}
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        $('#error').html(errors.join("\n"));
        return false;
    }

    $('#error').html('');
    return true;
}

window.onload=Initialize()