// Date 

let myDate = new Date();

console.log(myDate);
// 이 콘솔을 출력한 시간이 출력된다.
// 오늘이 2017.5.18 이라면
// Thu May 18 2017 00:00:00 GMT+0900 (대한민국 표준시)
// 요일 월 일 년도 시간 시간대

// new Date(milliseconds)
let myDate1 = new Date(1000);

// 1970년 1월 1일 00:00:00 UTC +1000 밀리초!

new Date('YYYY-MM-DD')
let myDate2 = new Date('2017-05-18');

// new Date(YYYY, MM, DD, hh, mm, ss, ms);
// 연도와 월까지는 필수
// 1월은 컴퓨터에서 0이다.
// 요일은 일요일부터 0으로 시작한다.

console.log(myDate.getTime());
// myDate 객체가 1970년 1월 1일 00:00:00 UTC 부터 몇 미리초 지났는지..?
// 이 값을 타임 스탬프 (Time Stamp) 라고 부른다.

let myDate3 = new Date(2017, 4, 18, 19, 11, 16)
let today = new Date();

let timeDiff = myDate3.getTime() - today.getTime();
console.log(timeDiff)

console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());