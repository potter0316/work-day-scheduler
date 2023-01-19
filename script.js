
// The current day is displayed at the top of the calendar
let today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY'));
let time = dayjs().format('HH');

// Time blocks
$(document).ready(function () { 
$('.time-block').each(function () {
  let timeBlock = $(this).attr('id').split('-')[1];
  console.log(this);

  if (time == timeBlock) {
    $(this).addClass('present');
    $(this).children('.description').addClass('present');
  } else if (time < timeBlock) {
    $(this).removeClass('present');
    $(this).addClass('future');
  } else if (time > timeBlock) {
    $(this).removeClass('future');
    $(this).addClass('past');
  }
});

// Added code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. 
$('.saveBtn').on("click", function (event) {
  event.preventDefault();
  let content = $(this).siblings('.time').val();
  let hour = $(this).parent().attr('id').split('-')[1];
  localStorage.setItem(hour, content);
});
//Retreive data from local storage
$('#hour-09 .time').val(localStorage.getItem('09'));
$('#hour-10 .time').val(localStorage.getItem('10'));
$('#hour-11 .time').val(localStorage.getItem('11'));
$('#hour-12 .time').val(localStorage.getItem('12'));
$('#hour-13 .time').val(localStorage.getItem('13'));
$('#hour-14 .time').val(localStorage.getItem('14'));
$('#hour-15 .time').val(localStorage.getItem('15'));
$('#hour-16 .time').val(localStorage.getItem('16'));
$('#hour-17 .time').val(localStorage.getItem('17'));

//Clear local storage
$('#clearBtn').on("click", function (event) {
  $('textArea').val('');
  localStorage.clear();
});
});