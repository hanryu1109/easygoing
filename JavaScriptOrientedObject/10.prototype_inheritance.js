//주류 객체지향

var superObj = {superVal:'super'}
// var subObj = {subVal: 'sub'} 
//클래스가 아닌 instance 즉 subObj 라는 객체를 직접 다른 객체의 자식으로 만들 수 있음

//prototype link를 걸어준다
// subObj.__proto__ = superObj; //prototype, __proto__

// console.log(`subObj.subVal => ${subObj.subVal}`); //sub
// console.log(`subObj.superVal => ${subObj.superVal}`); //super 
//subobj객체가 superObj 상속받고 싶어 prototype link를 연결해주어서 위의 코드 값이 'super'가 나오는 것이다

// subObj.superVal = 'sub';
// console.log(`superObj.superVal => ${superObj.superVal}`); //super
// console.log(`subObj.superVal => ${subObj.superVal}`); //sub

// Object.create를 이용해서 __proto__를 대체하는 방법을 소개합니다. 
var subObj = Object.create(superObj)  //  4번 라인 대체
subObj.superVal = "sub";
debugger;
//Object.create를 사용해서 객체와 객체간의 상속관계, 프로토링크를 지정해주는 것이 좋음
console.log(`subObj.superVal: ${subObj.superVal}`);

kim = {
    name: "kim",
    first: 10, second: 20,
    sum:function(){return this.first+this.second}
}
var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function() {return (this.first+this.second)/2};
// lee = {
//     name: "lee",
//     first: 10, second: 10,
//     avg: function(){return (this.first+this.second)/2}
// }
// lee.__proto__ = kim;
console.log(`kim.sum(): ${kim.sum()}`);
console.log(`lee.sum(): ${lee.sum()}`);
console.log(`lee.avg(): ${lee.avg()}`);

