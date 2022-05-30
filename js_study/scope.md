### **Scope**

- Scope: 범위, 영역

```js
function myFunction() { // 블록문 (Block Statement)
    let x = 3; // 로컬 변수, 지역 변수 (Local Variable)
    console.log(x);
}

myFunction();
console.log(x);
-> 에러가 뜬다 (정의되지 않음)
```

변수 x는 myFunction 안에서만 유효하다.

```js
let x = 3; // 글로벌 변수, 전역 변수 (Global Variable)
function myFunction() { // 블록문 (Block Statement)
    console.log(x);
}

myFunction();
console.log(x);
-> 에러가 뜨지 않는다.
```

```js
let x = 3; // 글로벌 변수, 전역 변수 (Global Variable)
function myFunction() { // 블록문 (Block Statement)
    let x = 5;
    console.log(x);
}

myFunction();
console.log(x); // 5 3 
```

- 모든 변수에는 scope (변수의 유효범위)가 있는데, 그 기준은 중괄호로 감싸진 블록문이다. 
- 로컬 변수는 블록문 내에서만 유효하고, 글로벌 변수는 어디에서나 유효하다.
- 블록문 내에서 변수를 사용하고 싶다면 로컬 변수를 먼저 찾아 사용하고, 없을 경우에는 글로벌 변수를 사용한다.