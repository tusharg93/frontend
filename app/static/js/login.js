$('#loginform').submit(function(e){

	e.preventDefault();
	var uname=document.getElementById('Uname').value;
	var password=document.getElementById('Password').value;
	console.log(uname,password);

	var dataString={login_id :uname,password:password};
	$.ajax({
		type:'POST',
		url:'http://52.77.252.230:8000/api/v1/auth/login',
		dataType: "json",
		data:dataString,
		success:function(data)
		{
			window.location="/index.html";
		},error:function(xhr,status,error)
		{
			$('#error').text("* "+error);
		}
	})
});