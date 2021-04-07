// 抓本地資料以及偵測網頁元件
var data = JSON.parse(localStorage.getItem('dataList')) || [];
var record = document.querySelector('.record');
var btn = document.querySelector('.button');
var del = document.getElementById('del');
// 檢查用
var strCheack='';
// 取得目前日期
var date = new Date;
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
updata(data)
// 更新資料
function updata(data){
    str='';
    var len = data.length;    
    for(var i=0 ; i<len ; i++){
        if(data[i].bmiValue < 18.5){
            str+='<li class="record_green"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>'; 
        }else if(18.5< data[i].bmiValue && data[i].bmiValue <25){
            str+='<li class="record_blue"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>'; 
        }else if(25< data[i].bmiValue && data[i].bmiValue<30){
            str+='<li class="record_orange"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>'; 
        }else if(30< data[i].bmiValue && data[i].bmiValue<35){
            str+='<li class="record_orange_two"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>';
        }else if(35< data[i].bmiValue && data[i].bmiValue<40){
            str+='<li class="record_orange_three"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>';
        }else{
            str+='<li class="record_red"><p>'+data[i].judgmentValue+'</p><p class="content_bmi">'+'BMI '+data[i].bmiValue+'</p><p class="content_weight">'+'weight '+data[i].weightValue+'</p><p class="content_height">'+'height '+data[i].heightValue+'</p><p class="content_date">'+data[i].dayValue+'-'+data[i].monthValue+'-'+data[i].yearValue+'</p></li>';
        };
    record.innerHTML = str;
    }
}
// 新增資料
function newdata(e){
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    // 檢查
    if(height == strCheack || weight == strCheack){
        alert('身高體重不得為空')
        return
    }else if(e.target.nodeName != 'INPUT'){
        return
    }
    // bmi判斷
    var bmi = (weight/((height*0.01)*(height*0.01))).toFixed(2);
    if( bmi<18.5){
        var judgment = '體重過輕';
    }else if(18.5< bmi && bmi<25){
        var judgment = '體重正常';
    }else if(25< bmi && bmi<30){
        var judgment = '體重過重';
    }else if(30< bmi && bmi<35){
        var judgment = '輕度肥胖';
    }else if(35< bmi && bmi<40){
        var judgment = '中度肥胖';
    }else{
        var judgment = '重度肥胖';
    }
    var todo={
        heightValue:height,
        weightValue:weight,
        bmiValue:bmi,
        yearValue:year,
        monthValue:month,
        dayValue:day,
        judgmentValue:judgment,
    }    
    data.push(todo);
    localStorage.setItem('dataList',JSON.stringify(data))
    // 更新資料
    updata(data)
    btnchange(bmi)
}
// 更改按鈕樣式
function btnchange(x){
    var box = '';
    if( x<18.5){
        box+='<div class="box_blue"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_blue"><img src="image/icons_loop.png" "></div></div><p class="text_blue">過輕</p>';
    }else if(18.5< x && x<25){
        box+='<div class="box_green"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_green"><img src="image/icons_loop.png" "></div></div><p class="text_green">理想</p>';
    }else if(25< x && x<30){
        box+='<div class="box_orange"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_orange"><img src="image/icons_loop.png" "></div></div><p class="text_orange">過重</p>';
    }else if(30< x && x<35){
        box+='<div class="box_orange_two"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_orange_two"><img src="image/icons_loop.png" ></div></div><p class="text_orange_two">輕度肥胖</p>';
    }else if(35< x && x<40){
        box+='<div class="box_orange_two"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_orange_two"><img src="image/icons_loop.png" "></div></div><p class="text_orange_two">中度肥胖</p>';
    }else{
        box+='<div class="box_red"><div class="text"><h2>'+x+'</h2><p>BMI</p></div><div class="box_img_red"><img src="image/icons_loop.png" "></div></div><p class="text_red">重度肥胖</p>';
    }
    btn.innerHTML = box;
}
// 清除
function deldata(){    
    var data = [];
    localStorage.setItem('dataList',JSON.stringify(data))
    record.innerHTML = data;
    updata(data);
}
// 監聽
btn.addEventListener('click',newdata,false);
del.addEventListener('click',deldata,false);