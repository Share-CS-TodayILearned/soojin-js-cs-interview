### **Return**

- 함수에서 Return은 output 같은 존재
- input은 파라미터(매개변수) 개념
- 함수에서 return을 만나면 그 밑은 실행되지 않는다.


function square(x) {
    console.log('return 전');
    return x * x;
    console.log('return 후');
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');
