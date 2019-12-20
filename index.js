
//跑动的次数
var count = 0;
//动画的执行方向
var dir = false;
//定义计时器对象
var  timer;

var li_img = document.getElementsByClassName("li_img");
li_img[count].style.opacity = 0.5;
li_img[count+1].style.opacity = 0.5;
li_img[count+6].style.opacity = 0.5;
li_img[count+5].style.opacity = 0.5;


window.onload = function() {
    /*获取ul元素*/
    var ul_img = document.getElementsByClassName("ul_img")[0];
    //获取所有的li图片元素
    var li_img = document.getElementsByClassName("li_img");
    /*定义计时器，控制图片移动*/
    showtime();
    function showtime() {
        timer = setInterval(() => {
            if (dir == false) {
                ul_img.style.transform = "translate(" + -480 * count + "px)";
                li_img[count+1].style.opacity = 0.5;
                li_img[count+4].style.opacity = 1;
                count++;
                if (count >= 3) {
                    count = 3;
                    dir = true;
                }
            }
            else {
                count--;
                ul_img.style.transform = "translate(" + -480 * (count-1) + "px)";
                li_img[count+1].style.opacity = 1;
                li_img[count+4].style.opacity = 0.5;
                if (count <= -1) {
                    count = -1;
                    dir = false;
                }
            }

        }, 2000)
    }

}


//订单统计
var db =openDatabase('mydb4','1.0','order','1024*1024');
db.transaction(function(contex) {  //建立数据库表单
contex.executeSql('create table if not exists userinf(name,price,num)');
});


var obtn = document.getElementById('cs');
var obtn1 = document.getElementById('nr');
var obtn2 = document.getElementById('fsy');
var obtn3 = document.getElementById('gdc');
var obtn4 = document.getElementById('cd');
var obtn5 = document.getElementById('mpd');
var obtn6 = document.getElementById('lcn');
var obtn7 = document.getElementById('bz');
var obtn8 = document.getElementById('dz');
var obtn9 = document.getElementById('ght');
var obtn10 = document.getElementById('csb');
var obtn11 = document.getElementById('nrw');
var obtn12 = document.getElementById('fsyt');
var obtn13 = document.getElementById('gdcf');
var obtn14 = document.getElementById('cdf');
var obtn15 = document.getElementById('mpdf');
var obtn16 = document.getElementById('lcng');
var obtn17 = document.getElementById('bzf');
var obtn18 = document.getElementById('dzx');
var obtn19 = document.getElementById('ghto');

db.transaction(function(contex){
contex.executeSql('select * from userinf',[],function(con,data){
//console.log(data);
var rows=data.rows.length,i,j=1;

for(var i=0;i<rows;i++){
  if(data.rows.item(i).num!=0){
  document.getElementById('jian'+j).innerHTML = data.rows.item(i).num;
  j++;
  }
   }
});
});


obtn.onclick = function(){
    document.getElementById('jian1').innerHTML++;
    if(document.getElementById('jian1').innerHTML==1){
      db.transaction(function(contex){
        contex.executeSql('insert into userinf(name,price,num) values("叉烧包",10,0)');
      });
    }
    db.transaction(function(contex){
      contex.executeSql('update userinf set num=num+1 where name="叉烧包"');
    });
}

obtn10.onclick = function(){
  if(document.getElementById('jian1').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian1').innerHTML--;
    if (document.getElementById('jian1').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="叉烧包"');
      });
    }
    if(document.getElementById('jian1').innerHTML>0)
    {
      db.transaction(function(contex){
        contex.executeSql('update userinf set num=num-1 where name="叉烧包"');
      });
    }
  }
}

obtn1.onclick = function(){
    document.getElementById('jian2').innerHTML++;
    if(document.getElementById('jian2').innerHTML==1){
    db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("牛肉丸粿条",9,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="牛肉丸粿条"');
});

}

obtn11.onclick = function(){
  if(document.getElementById('jian2').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian2').innerHTML--;
    if(document.getElementById('jian2').innerHTML==0){
    db.transaction(function(contex){
    contex.executeSql('delete from userinf where name="牛肉丸粿条"');
  });
}
  if(document.getElementById('jian2').innerHTML>0)
{
  db.transaction(function(contex){
    contex.executeSql('update userinf set num=num-1 where name="牛肉丸粿条"');
  });
}
  }
}

obtn2.onclick = function(){
  document.getElementById('jian3').innerHTML++;
  if (document.getElementById('jian3').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("反沙芋头",10,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="反沙芋头"');
});
}

obtn12.onclick = function(){
  if(document.getElementById('jian3').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian3').innerHTML--;
    if (document.getElementById('jian3').innerHTML==0) {
    db.transaction(function(contex){
      contex.executeSql('delete from userinf where name="反沙芋头"');
    });
  }
  if(document.getElementById('jian3').innerHTML>0)
{
  db.transaction(function(contex){
    contex.executeSql('update userinf set num=num-1 where name="反沙芋头"');
  });
}
  }
}

obtn3.onclick = function(){
    document.getElementById('jian4').innerHTML++;
    if (document.getElementById('jian4').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("广东肠粉",13,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="广东肠粉"');
});
}

obtn13.onclick = function(){
  if(document.getElementById('jian4').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian4').innerHTML--;
    if (document.getElementById('jian4').innerHTML==0) {
  db.transaction(function(contex){
    contex.executeSql('delete from userinf where name="广东肠粉"');
  });
}
if(document.getElementById('jian4').innerHTML>0)
{
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num-1 where name="广东肠粉"');
});
}
  }
}


obtn4.onclick = function(){
  document.getElementById('jian5').innerHTML++;
  if (document.getElementById('jian5').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("臭豆腐",10,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="臭豆腐"');
});
}

obtn14.onclick = function(){
  if(document.getElementById('jian5').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian5').innerHTML--;
    if (document.getElementById('jian5').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="臭豆腐"');
          });
        }
        if(document.getElementById('jian5').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="臭豆腐"');
        });
        }
  }
}

obtn5.onclick = function(){
  document.getElementById('jian6').innerHTML++;
  if (document.getElementById('jian6').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("麻婆豆腐 ",8,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="麻婆豆腐 "');
});
}

obtn15.onclick = function(){
  if(document.getElementById('jian6').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian6').innerHTML--;
    if (document.getElementById('jian6').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="麻婆豆腐 "');
          });
        }
        if(document.getElementById('jian6').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="麻婆豆腐 "');
        });
        }
  }
}

obtn6.onclick = function(){
  document.getElementById('jian7').innerHTML++;
  if (document.getElementById('jian7').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("辣炒年糕",15,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="辣炒年糕"');
});
}

obtn16.onclick = function(){
  if(document.getElementById('jian7').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian7').innerHTML--;
    if (document.getElementById('jian7').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="辣炒年糕"');
          });
        }
        if(document.getElementById('jian7').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="辣炒年糕"');
        });
        }
  }
}

obtn7.onclick = function(){
  document.getElementById('jian8').innerHTML++;
  if (document.getElementById('jian8').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("煲仔饭",15,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="煲仔饭"');
});
}

obtn17.onclick = function(){
  if(document.getElementById('jian8').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian8').innerHTML--;
    if (document.getElementById('jian8').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="煲仔饭"');
          });
        }
        if(document.getElementById('jian8').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="煲仔饭"');
        });
        }
  }
}

obtn8.onclick = function(){
  document.getElementById('jian9').innerHTML++;
  if (document.getElementById('jian9').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("美味大闸蟹",21,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="美味大闸蟹"');
});
}

obtn18.onclick = function(){
  if(document.getElementById('jian9').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian9').innerHTML--;
    if (document.getElementById('jian9').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="美味大闸蟹"');
          });
        }
        if(document.getElementById('jian9').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="美味大闸蟹"');
        });
        }
  }
}

obtn9.onclick = function(){
  document.getElementById('jian10').innerHTML++;
  if (document.getElementById('jian10').innerHTML==1) {
  db.transaction(function(contex){
    contex.executeSql('insert into userinf(name,price,num) values("桂花糖藕",12,0)');
  });
}
db.transaction(function(contex){
  contex.executeSql('update userinf set num=num+1 where name="桂花糖藕"');
});
}

obtn19.onclick = function(){
  if(document.getElementById('jian10').innerHTML==0)
  {
    alert('菜品不可为负值');
  }
  else {
    document.getElementById('jian10').innerHTML--;
    if (document.getElementById('jian10').innerHTML==0) {
      db.transaction(function(contex){
        contex.executeSql('delete from userinf where name="桂花糖藕"');
          });
        }
        if(document.getElementById('jian10').innerHTML>0)
        {
        db.transaction(function(contex){
          contex.executeSql('update userinf set num=num-1 where name="桂花糖藕"');
        });
        }
  }
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
