### **Return**

- 함수에서 return은 output 같은 존재
- input은 파라미터(매개변수) 개념
- 함수에서 return을 만나면 그 밑은 실행되지 않는다 (함수가 종료된다).

```js
function square(x) {
    console.log('return 전');
    return x * x;
    console.log('return 후'); // dead 코드
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');
```

콘솔창에서 확인하면 'return 후'는 출력되지 않는다 (죽은 코드).

### return과 console.log의 차이

- return은 함수의 결과를 내기만하고, console.log를 하지 않으면 콘솔창에서 보이지 않는다.
- return없이 함수 안에서 console, console.log(함수)를 하면 undefined가 출력된다.
- 이처럼 return이 없는 함수는 undefined로 출력된다.
- return은 함수를 실행하고 어떤 값을 돌려주고,
- console.log는 콘솔창에 어떤 값을 출력한다.
