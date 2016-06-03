$(function(){
  $('#mnplp').mnplp(data);
  //today's function
  var todayDate = function(){
    var date = new Date()
    var today = date.getDate();
    $('#day').val(today)
    return today;
  }

//appending in select dropdown
var part="Part_"+todayDate();
var selectNum=1;
var quarterNum=1;
//appends 8 drop down list
for(var i=0;i<8;i++){
  var opVal=0;
  var Quarter="Quarter_"+quarterNum;
  for(x in qur2an[part][Quarter]){
    $("#s"+selectNum).append("<option value='"+opVal+"' id='"+x+"'>" + x  + "</option> ");
    opVal++;
  }
  selectNum++;
  quarterNum++;
}
  //append ends

(function setRandSheikh(){
  for(var i=0;i<8;i++){
    var j=i+1;
    data.playlist[i].mfile=(qur2an["Part_"+todayDate()]["Quarter_"+j][getRandNum()]);
  };
  $('.mnpl_playlist span')[0].click();
  $(".mnpl_tlb_stop").click();
})();

function getRandNum(){
  var SheikhNum = Math.floor((Math.random() * 4) + 1);
  if(SheikhNum == 1){
    return "الحصري";
  }
  else if(SheikhNum == 2){
    return "العفاسي";
  }
  else if(SheikhNum == 3){
    return "الغامدي";
  }
  else if(SheikhNum == 4){
    return "المنشاوي";
  }
};

$("#s1").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url = qur2an["Part_"+todayDate()]["Quarter_1"]
    var name = (opt).text();
    var link = url[name];
    data.playlist[0].cover=cover_select(name);
    data.playlist[0].author=author_select(name)
    data.playlist[0].mfile=link
    if($(".mnpl_title").text() == "الربع الاول")
    {
      $('.mnpl_playlist span')[0].click();
    };
  }
});
$("#s2").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_2"];
    var name=(opt).text();
    var link=url[name];
    data.playlist[1].cover=cover_select(name);
    data.playlist[1].author=author_select(name);
    data.playlist[1].mfile=link;
    if($(".mnpl_title").text() == "الربع الثاني")
    {
        $('.mnpl_playlist span')[1].click();
    };
 }
});

$("#s3").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_2"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[2].cover=cover_select(name);
    data.playlist[2].author=author_select(name);
    data.playlist[2].mfile=link;
    if($(".mnpl_title").text()=="الربع الثالث")
    {
      $('.mnpl_playlist span')[2].click();
    };
}
});

$("#s4").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_2"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[3].cover=cover_select(name);
    data.playlist[3].author=author_select(name)
    data.playlist[3].mfile=link;
    if($(".mnpl_title").text()=="الربع الرابع")
    {
        $('.mnpl_playlist span')[3].click()
    }
  }
});

$("#s5").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_5"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[4].cover=cover_select(name);
    data.playlist[4].author=author_select(name);
    data.playlist[4].mfile=link;
    if($(".mnpl_title").text()=="الربع الخامس")
    {
        $('.mnpl_playlist span')[4].click();
    }
  }
});

$("#s6").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_6"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[5].cover=cover_select(name);
    data.playlist[5].author=author_select(name);
    data.playlist[5].mfile=link;
    if($(".mnpl_title").text()=="الربع السادس")
    {
      $('.mnpl_playlist span')[5].click();
    }
  }
});

$("#s7").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_7"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[6].cover=cover_select(name);
    data.playlist[6].author=author_select(name);
    data.playlist[6].mfile=link;
    if($(".mnpl_title").text()=="الربع السابع")
    {
        $('.mnpl_playlist span')[6].click()
    }
  }
});

$("#s8").dropdown({
  gutter : 5,
  stack : true,
  slidingIn : 100,
  onOptionSelect : function(opt)
  {
    var url=qur2an["Part_"+todayDate()]["Quarter_8"]
    var name=(opt).text();
    var link=url[name]
    data.playlist[7].cover=cover_select(name);
    data.playlist[7].author=author_select(name)
    data.playlist[7].mfile=link;
    if($(".mnpl_title").text()=="الربع الثامن")
    {
        $('.mnpl_playlist span')[7].click()
    }
  }
});
});
