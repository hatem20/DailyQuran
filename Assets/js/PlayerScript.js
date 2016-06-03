//select cover photo name-based
function cover_select(sheikhName)
{
  var sheikhImg;
  if(sheikhName == "العفاسي")
  {
    sheikhImg="Assets/img/afasi.jpg";
  }
  else if(sheikhName == "الحصري")
  {
    sheikhImg="Assets/img/hosari.jpg";
  }
  else if(sheikhName == "المنشاوي")
  {
    sheikhImg="Assets/img/menshawi.gif";
  }
  else if(sheikhName == "الغامدي")
  {
    sheikhImg="Assets/img/ghamdi.jpg";
  }
  return sheikhImg;
};

//select author name-based
function author_select(sheikhName){
  var author;
  if(sheikhName == "العفاسي")
  {
    author = "الشيخ مشاري راشد العفاسي"
  }
  else if(sheikhName == "الحصري"){
    author = "الشيخ محمد خليل الحصري"
  }
  else if(sheikhName == "المنشاوي"){
    author = "الشيخ محمد صديق المنشاوي"
  }
  else if(sheikhName == "الغامدي"){
    author = "الشيخ سعد الغامدي ";
  }
  return author;
};

function author_title(sheikhName){
  var title;
  if(sheikhName == "العفاسي")
  {
    title = "الشيخ مشاري راشد العفاسي"
  }
  else if(sheikhName == "الحصري")
  {
    title = "الشيخ محمد خليل الحصري"
  }
  else if(sheikhName == "المنشاوي")
  {
   title = "الشيخ محمد صديق المنشاوي"
  }
  else if(sheikhName == "الغامدي"){
    title = "الشيخ سعد الغامدي ";
  }
  return title;
}
