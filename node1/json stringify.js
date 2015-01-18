var a1 =["venkat","sravan"];

a1.forEach(function(element){
	console.log(element);
});
//j1= {"k1":v1,"k2":v2,"k3":v3}
a1=[{"names":["sravan","venkat","kumar"],"ids":[421,5675,878],"k":{"k1":"v1","k2":"v2"}},
    {"names":["sravan1","venkat1","kumar1"],"ids":[7687,324,677]},
    {"names":["sravan2","venkat2","kumar2"],"ids":[87,670,236]}
 ];

 //var input = "venkat1";
 var input = "k2";

a1. forEach(function(ele,i){
     // console.log(ele);
     // console.log(ele.names);
      var names = ele.names;
      
      //console.log(names,indexOf(input));

      var index =names.indexOf(input);
      if (index> -1) {
      //	console.log(ele.ids[index]);
      }

      if (ele.k !== undefined) {
         // console.log(ele.k.[input]);
          //ele.k.k2;
         // ele.k["k2"];
      }

      var jsonStr= JSON.stringfy(ele);
      console.log(jsonStr.name);

      console.log(JSON.parse(jsonStr).names);
      console.log(new Date());
      console.log(new Date().getMonth()+1);
      //console.log("keys ="+ object.keys(ele));
      console.log(i);
});

//object.keys(json1);