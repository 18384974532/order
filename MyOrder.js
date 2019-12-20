var db =openDatabase('mydb4','1.0','order','1024*1024');
db.transaction(function(contex) {  //建立数据库表单
contex.executeSql('create table if not exists userinf(name,price,num)');
});


window.onload = function(){
  db.transaction(function(contex){
  contex.executeSql('select * from userinf',[],function(con,data){
  //console.log(data);
  var rows=data.rows.length,i,sum=0;
  console.log(rows);
  for(var i=0;i<rows;i++){
    document.getElementById('orderline'+i).innerHTML =(data.rows.item(i).name);
    document.getElementById('orderline'+i+'c').innerHTML =(data.rows.item(i).num);
    document.getElementById('orderline'+i+'b').innerHTML =(data.rows.item(i).price);
    sum +=((data.rows.item(i).price)*(data.rows.item(i).num)); 
     }
    document.getElementById('dp').innerHTML=sum+'元';

  });
  });
}

var oclear = document.getElementById('but1');
oclear.onclick = function(){
  db.transaction(function(contex){
    contex.executeSql('drop table userinf');
});
  alert('订单已清空，请刷新页面');
}




db.transaction(function(contex){
contex.executeSql('select * from userinf',[],function(con,data){
//console.log(data);
var rows=data.rows.length,i;
console.log('总共行数是：'+rows);
for(var i=0;i<rows;i++){
console.log(data.rows.item(i).name);
console.log(data);
}
});
});



