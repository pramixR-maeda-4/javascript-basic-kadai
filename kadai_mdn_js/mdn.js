const use_date_name = {year:"年", month:"月", day:"日", week:"曜日"};
const week_name = ['日', '月', '火', '水', '木', '金', '土'];
let now_day = new Date();


function outputNowDay() {
  // console.log(now_day);
  console.log(
    now_day.getFullYear() + use_date_name.year + space() +
    monthString(now_day.getMonth()) + use_date_name.month + space() +
    now_day.getDate() + use_date_name.day + space() +
    weekString(now_day.getDay()) + use_date_name.week
  );
}


function monthString(num) {
  return (num + 1);
}

function weekString(num) {
  return (week_name[num]);
}

space = () => {return " ";}

outputNowDay();