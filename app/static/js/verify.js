/*server*/
//var url='http://52.77.252.230/verify/Imt1bWFyaGVtYW50aDQxM0BnbWFpbC5jb20i.DQgP_A.Q0-t13CUKfL1og0eo41P1dkBQ1w';
/*end of server*/

/*local*/
var Token=window.location.href.split("/").pop();

function tokenVerify()
{
	$.ajax({
		type:'get',
		url:'http://52.77.252.230:8000/api/v1/forms/verify-email?token='+Token,
		contentType:'application/json',
		success:function(data)
		{
			$('.preloader').css('display','none');
		},error:function(xhr,status,error)
		{
			alert(error);
			return false;
		}
	})

}

window.onload=tokenVerify();