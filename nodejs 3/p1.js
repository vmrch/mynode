$(document).ready(function(){
	$('#user').click(function(){

		$.ajax({
			url:"/userManagement",
			method:"GET",
			success:function(response){
				var tdrow ="<table class ='table' border='1'> \
				<thread> \
				<tr><th>Merchant ID</th>
				<th>Merchant Name</th> \
				<th>Merchant Login Name</th></tr></thread><tbody>";
				var length =0;

				response.data.forEach(function(row){

					length = length+1;
					tdrow =tdrow+ "<tr><td>" + row.merch_id +"</td><td>"+ row.merch_name +"</td><td>"+ row.merch_login_name;
					if(length == response.data.length){
						tdrow = tdrow + "</tbody></table>";
					}
				});
				$('#refresh').html(tdrow);
			},
			error: function(err){
				alert(json.stringify(err));
			}
		});
		//alert("click me";)
	});
});