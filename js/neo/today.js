var d=new Date();
var weekday=new Array(7);
var weekdaysub=new Array(7);
weekday[0]="tw7";
weekday[1]="tw1";
weekday[2]="tw2";
weekday[3]="tw3";
weekday[4]="tw4";
weekday[5]="tw5";
weekday[6]="tw6";
weekdaysub[0]="suntitle";
weekdaysub[1]="montitle";
weekdaysub[2]="tuetitle";
weekdaysub[3]="wedtitle";
weekdaysub[4]="thutitle";
weekdaysub[5]="frititle";
weekdaysub[6]="sattitle";
document.getElementById(weekday[d.getDay()]).style.display="inline-block";
document.getElementById(weekdaysub[d.getDay()]).style.color="#00b4ff";
//Copy by jQuery
var weekdaycon=new Array(7);
weekdaycon[0]="#sunbgm";
weekdaycon[1]="#monbgm";
weekdaycon[2]="#tuebgm";
weekdaycon[3]="#wedbgm";
weekdaycon[4]="#thubgm";
weekdaycon[5]="#fribgm";
weekdaycon[6]="#satbgm";
temp = $(weekdaycon[d.getDay()]);  
temp.clone(true).appendTo($("#bgmtoday"));